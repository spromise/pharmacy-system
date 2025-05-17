<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>库存查询</span>
        <el-button style="float: right; padding: 3px 0" link @click="fetchInventories">
          <el-icon><Refresh /></el-icon>刷新
        </el-button>
      </div>
    </template>

    <!-- 搜索栏 -->
    <el-row class="mb-4">
      <el-col :span="8">
        <el-input 
          v-model="searchKey" 
          placeholder="请输入药品本位码、药品名称或商品名" 
          clearable 
          @keyup.enter="search"
        >
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
      <el-table-column prop="drug_code" label="药品本位码" min-width="100" />
      <el-table-column label="药品名称" min-width="100">
        <template #default="scope">
          {{ scope.row.drug?.generic_name || '-' }}
        </template>
      </el-table-column>
      <el-table-column label="商品名" min-width="100">
        <template #default="scope">
          {{ scope.row.drug?.brand_name || '-' }}
        </template>
      </el-table-column>
      <el-table-column prop="stock_quantity" label="当前库存量" width="120" />
      <el-table-column prop="alert_threshold" label="库存预警阈值" width="120" />
      <el-table-column label="最后入库时间" width="160">
        <template #default="scope">
          {{ formatDateTime(scope.row.last_inbound_time) }}
        </template>
      </el-table-column>
      <el-table-column label="最后出库时间" width="160">
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
import { Refresh, Search } from '@element-plus/icons-vue';
import { getInventoryList } from '@/api/inventory';
import { ElMessage } from 'element-plus';
import dayjs from 'dayjs';

const inventories = ref<any[]>([]);
const searchKey = ref('');
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const loading = ref(false);

// 格式化日期时间为年月日时分
const formatDateTime = (dateTime: string | null) => {
  return dateTime ? dayjs(dateTime).format('YYYY-MM-DD HH:mm') : '';
};

// 获取库存列表
const fetchInventories = async () => {
  loading.value = true;

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
    ElMessage.error(error.message || '获取库存列表失败');
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