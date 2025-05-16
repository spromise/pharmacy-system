<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>库存管理</span>
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
      <el-table-column prop="id" label="库存ID" />
      <el-table-column prop="standardCode" label="药品本位码" />
      <el-table-column prop="batchNumber" label="批次号" />
      <el-table-column prop="currentStock" label="当前库存量" />
      <el-table-column prop="expiryDate" label="有效期" />
      <el-table-column prop="warningThreshold" label="库存预警阈值" />
      <el-table-column prop="lastInboundTime" label="最后入库时间" />
      <el-table-column prop="lastOutboundTime" label="最后出库时间" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small" type="primary" @click="editInventory(scope.row)">
            <el-icon><Edit /></el-icon>编辑
          </el-button>
          <el-button size="small" type="danger" @click="deleteInventory(scope.row.id)">
            <el-icon><Delete /></el-icon>删除
          </el-button>
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

  <!-- 新增/编辑库存对话框 -->
  <el-dialog :visible.sync="dialogVisible" title="库存信息">
    <template #content>
      <el-form :model="formData" ref="formRef" label-width="120px">
        <el-form-item label="药品本位码" prop="standardCode">
          <el-input v-model="formData.standardCode" placeholder="请输入药品本位码" />
        </el-form-item>
        <el-form-item label="批次号" prop="batchNumber">
          <el-input v-model="formData.batchNumber" placeholder="请输入批次号" />
        </el-form-item>
        <el-form-item label="当前库存量" prop="currentStock">
          <el-input-number v-model="formData.currentStock" :min="0" placeholder="请输入当前库存量" />
        </el-form-item>
        <el-form-item label="有效期" prop="expiryDate">
          <el-date-picker v-model="formData.expiryDate" type="date" placeholder="请选择有效期" />
        </el-form-item>
        <el-form-item label="库存预警阈值" prop="warningThreshold">
          <el-input-number v-model="formData.warningThreshold" :min="0" placeholder="请输入库存预警阈值" />
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="saveInventory">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { Refresh, Search, Edit, Delete } from '@element-plus/icons-vue';
import {
  getInventoryList,
  createInventory,
  updateInventory,
  deleteInventory as deleteApi
} from '@/api/inventory';
import { ElMessage, ElMessageBox } from 'element-plus';

const inventories = ref<any[]>([]);
const searchKey = ref('');
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const loading = ref(false);
const errorMsg = ref('');
const dialogVisible = ref(false);
const formData = reactive({
  id: 0,
  standardCode: '',
  batchNumber: '',
  currentStock: 0,
  expiryDate: null,
  warningThreshold: 0
});
const formRef = ref(null);
const isEdit = ref(false);

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

// 打开新增对话框
const openCreateDialog = () => {
  isEdit.value = false;
  // 重置表单
  Object.assign(formData, {
    id: 0,
    standardCode: '',
    batchNumber: '',
    currentStock: 0,
    expiryDate: null,
    warningThreshold: 0
  });
  dialogVisible.value = true;
};

// 打开编辑对话框
const openEditDialog = (row: any) => {
  isEdit.value = true;
  Object.assign(formData, { ...row });
  dialogVisible.value = true;
};

// 保存库存信息
const saveInventory = async () => {
  try {
    if (!formData.standardCode || !formData.batchNumber) {
      ElMessage.warning('请输入药品本位码和批次号');
      return;
    }

    if (isEdit.value) {
      // 更新库存
      await updateInventory(formData.id, formData);
      ElMessage.success('更新成功');
    } else {
      // 创建库存
      await createInventory(formData);
      ElMessage.success('创建成功');
    }

    dialogVisible.value = false;
    fetchInventories();
  } catch (error) {
    console.error('Error saving inventory:', error);
    ElMessage.error('保存失败');
  }
};

// 删除库存记录
const deleteInventory = (id: number) => {
  ElMessageBox.confirm(
    '确定要删除此库存记录吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(async () => {
    try {
      await deleteApi(id);
      fetchInventories();
      ElMessage.success('删除成功');
    } catch (error) {
      console.error('Error deleting inventory:', error);
      ElMessage.error('删除失败');
    }
  }).catch(() => {
    // 取消操作
  });
};

onMounted(fetchInventories);
</script>