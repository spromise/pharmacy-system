<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>库存查询</span>
        <el-button style="float: right; padding: 3px 0" link>
          <el-icon><Refresh /></el-icon>刷新
        </el-button>
      </div>
    </template>

    <!-- 搜索栏 -->
    <el-row class="mb-4">
      <el-col :span="8">
        <el-input v-model="searchKey" placeholder="请输入药品本位码" clearable @keyup.enter="search">
          <template #append>
            <el-button @click="search">
              <el-icon><Search /></el-icon>搜索
            </el-button>
          </template>
        </el-input>
      </el-col>
    </el-row>

    <!-- 库存表格 -->
    <el-table :data="inventories" stripe style="width: 100%">
      <el-table-column prop="drug_code" label="药品本位码" />
      <el-table-column prop="batch_number" label="批次号" />
      <el-table-column prop="stock_quantity" label="当前库存量" />
      <el-table-column prop="alert_threshold" label="库存预警阈值" />
      <el-table-column label="最后入库时间">
        <template #default="scope">
          {{ formatDateTime(scope.row.last_inbound_time) }}
        </template>
      </el-table-column>
      <el-table-column label="最后出库时间">
        <template #default="scope">
          {{ formatDateTime(scope.row.last_outbound_time) }}
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      style="margin-top: 20px"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { Refresh, Search, Edit, Delete } from '@element-plus/icons-vue';
import {
  getInventoryList,
} from '@/api/inventory';
import { ElMessage, ElMessageBox } from 'element-plus';
import dayjs from 'dayjs';

const inventories = ref<any[]>([]);
const searchKey = ref('');
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const loading = ref(false);
const errorMsg = ref('');



// 格式化日期时间为年月日时分
const formatDateTime = (dateTime: string | null) => {
  return dateTime ? dayjs(dateTime).format('YYYY-MM-DD HH:mm') : '';
};

// 获取库存列表
const fetchInventories = async () => {
  loading.value = true;
  errorMsg.value = '';

  try {
    const response = await getInventoryList({
      page: currentPage.value,
      pageSize: pageSize.value,
      keyword: searchKey.value
    });

    // 验证响应格式
    if (!response || !Array.isArray(response.data?.list)) {
      throw new Error('Invalid response format');
    }

    inventories.value = response.data.list;
    total.value = response.data.total || 0;
  } catch (error: any) {
    console.error('Error fetching inventories:', error);

    // 区分不同类型的错误
    if (error.response) {
      // 服务器返回错误状态码（如 400、500）
      errorMsg.value = `请求失败 (${error.response.status}): ${error.response.data.message || '服务器错误'}`;
    } else if (error.request) {
      // 请求已发送但无响应
      errorMsg.value = '服务器未响应，请检查网络连接';
    } else {
      // 请求设置时出错
      errorMsg.value = `请求错误: ${error.message}`;
    }

    ElMessage.error(errorMsg.value);
  } finally {
    loading.value = false;
  }
};

// 搜索库存
const search = () => {
  currentPage.value = 1;
  fetchInventories();
};

// 分页相关方法
const handleSizeChange = (newSize: number) => {
  pageSize.value = newSize;
  fetchInventories();
};

const handleCurrentChange = (newPage: number) => {
  currentPage.value = newPage;
  fetchInventories();
};

onMounted(fetchInventories);
</script>