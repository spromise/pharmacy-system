<!-- src/views/MedicineView.vue -->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>药品信息管理</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="primary"
          @click="openCreateDialog"
        >
          <el-icon><Plus /></el-icon>新增药品
        </el-button>
      </div>
    </template>
    
    <!-- 药品表格 -->
    <el-table :data="medicines" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="药品名称" />
      <el-table-column prop="specification" label="规格" />
      <el-table-column prop="price" label="价格" width="100" />
      <el-table-column prop="stock" label="库存" width="100" />
      <el-table-column prop="unit" label="单位" width="80" />
      <el-table-column prop="category" label="分类" width="100" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small" type="primary" @click="openEditDialog(scope.row)">
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
  
  <!-- 新增/编辑药品对话框 -->
  <el-dialog :visible.sync="dialogVisible" title="药品信息">
    <template #content>
      <el-form :model="formData" ref="formRef" label-width="120px">
        <el-form-item label="药品名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入药品名称" />
        </el-form-item>
        <el-form-item label="药品规格" prop="specification">
          <el-input v-model="formData.specification" placeholder="请输入药品规格" />
        </el-form-item>
        <el-form-item label="药品价格" prop="price">
          <el-input-number v-model="formData.price" :min="0" placeholder="请输入药品价格" />
        </el-form-item>
        <el-form-item label="库存数量" prop="stock">
          <el-input-number v-model="formData.stock" :min="0" placeholder="请输入库存数量" />
        </el-form-item>
        <el-form-item label="药品单位" prop="unit">
          <el-select v-model="formData.unit" placeholder="请选择药品单位">
            <el-option label="盒" value="盒" />
            <el-option label="瓶" value="瓶" />
            <el-option label="片" value="片" />
            <el-option label="支" value="支" />
          </el-select>
        </el-form-item>
        <el-form-item label="药品分类" prop="category">
          <el-select v-model="formData.category" placeholder="请选择药品分类">
            <el-option label="处方药" value="处方药" />
            <el-option label="非处方药" value="非处方药" />
            <el-option label="保健品" value="保健品" />
            <el-option label="医疗器械" value="医疗器械" />
          </el-select>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="saveMedicine">确定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { Plus, Edit, Delete } from '@element-plus/icons-vue';
import { getMedicineList, createMedicine, updateMedicine, deleteMedicine as deleteApi } from '@/api/medicine';

const medicines = ref<any[]>([]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const dialogVisible = ref(false);
const formData = reactive({
  id: 0,
  name: '',
  specification: '',
  price: 0,
  stock: 0,
  unit: '盒',
  category: '处方药'
});
const formRef = ref(null);
const isEdit = ref(false);

// 获取药品列表
const fetchMedicines = async () => {
  try {
    const response = await getMedicineList({
      page: currentPage.value,
      pageSize: pageSize.value
    });
    medicines.value = response.data;
    total.value = response.total;
  } catch (error) {
    console.error('Error fetching medicines:', error);
    ElMessage.error('获取药品列表失败');
  }
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

// 打开新增对话框
const openCreateDialog = () => {
  isEdit.value = false;
  // 重置表单
  Object.assign(formData, {
    id: 0,
    name: '',
    specification: '',
    price: 0,
    stock: 0,
    unit: '盒',
    category: '处方药'
  });
  dialogVisible.value = true;
};

// 打开编辑对话框
const openEditDialog = (row: any) => {
  isEdit.value = true;
  Object.assign(formData, { ...row });
  dialogVisible.value = true;
};

// 保存药品信息
const saveMedicine = async () => {
  try {
    if (!formData.name) {
      ElMessage.warning('请输入药品名称');
      return;
    }
    
    if (isEdit.value) {
      // 更新药品
      await updateMedicine(formData.id, formData);
      ElMessage.success('更新成功');
    } else {
      // 创建药品
      await createMedicine(formData);
      ElMessage.success('创建成功');
    }
    
    dialogVisible.value = false;
    fetchMedicines();
  } catch (error) {
    console.error('Error saving medicine:', error);
    ElMessage.error('保存失败');
  }
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
      await deleteApi(id);
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