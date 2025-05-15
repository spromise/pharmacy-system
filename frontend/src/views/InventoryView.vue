<!-- src/views/InventoryView.vue -->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>库存管理</span>
        <el-button style="float: right; padding: 3px 0" type="text">
          <el-icon><Refresh /></el-icon>刷新
        </el-button>
      </div>
    </template>
    
    <!-- 搜索栏 -->
    <el-row class="mb-4">
      <el-col :span="8">
        <el-input v-model="searchKey" placeholder="请输入药品名称" clearable @keyup.enter="search">
          <template #append>
            <el-button @click="search">
              <el-icon><Search /></el-icon>搜索
            </el-button>
          </template>
        </el-input>
      </el-col>
    </el-row>
    
    <!-- 库存表格 -->
    <el-table :data="medicines" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="药品名称" />
      <el-table-column prop="specification" label="规格" />
      <el-table-column prop="price" label="价格" width="100" />
      <el-table-column prop="stock" label="库存数量" width="100" />
      <el-table-column prop="unit" label="单位" width="80" />
      <el-table-column prop="category" label="分类" width="100" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small" type="primary" @click="editMedicine(scope.row)">
            <el-icon><Edit /></el-icon>编辑
          </el-button>
          <el-button size="small" type="danger" @click="deleteMedicine(scope.row.id)">
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Refresh, Search, Edit, Delete } from '@element-plus/icons-vue';
import { getMedicineList } from '@/api/medicine';

const medicines = ref<any[]>([]);
const searchKey = ref('');
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);

// 获取药品列表
const fetchMedicines = async () => {
  try {
    const response = await getMedicineList({
      page: currentPage.value,
      pageSize: pageSize.value,
      keyword: searchKey.value
    });
    medicines.value = response.data;
    total.value = response.total;
  } catch (error) {
    console.error('Error fetching medicines:', error);
    ElMessage.error('获取药品列表失败');
  }
};

// 搜索药品
const search = () => {
  currentPage.value = 1;
  fetchMedicines();
};

// 分页相关方法
const handleSizeChange = (newSize: number) => {
  pageSize.value = newSize;
  fetchMedicines();
};

const handleCurrentChange = (newPage: number) => {
  currentPage.value = newPage;
  fetchMedicines();
};

// 编辑药品
const editMedicine = (row: any) => {
  console.log('Edit medicine:', row);
  // 跳转到编辑页面或打开编辑对话框
};

// 删除药品
const deleteMedicine = (id: number) => {
  ElMessageBox.confirm(
    '确定要删除此药品吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(async () => {
    try {
      // 调用删除API
      console.log('Delete medicine:', id);
      fetchMedicines();
      ElMessage.success('删除成功');
    } catch (error) {
      console.error('Error deleting medicine:', error);
      ElMessage.error('删除失败');
    }
  }).catch(() => {
    // 取消操作
  });
};

onMounted(fetchMedicines);
</script>