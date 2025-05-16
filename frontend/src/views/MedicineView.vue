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
      <el-table-column prop="standardCode" label="本位码" />
      <el-table-column prop="genericName" label="通用名" />
      <el-table-column prop="tradeName" label="商品名" />
      <el-table-column prop="dosageForm" label="剂型" />
      <el-table-column prop="specification" label="规格" />
      <el-table-column prop="manufacturer" label="生产厂家" />
      <el-table-column prop="currentPrice" label="当前售价" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small" type="primary" @click="openEditDialog(scope.row)">
            <el-icon><Edit /></el-icon>编辑
          </el-button>
          <el-button size="small" type="danger" @click="deleteMedicine(scope.row.id)">
            <el-icon><Delete /></el-icon>删除
          </el-button>
          <el-button size="small" type="info" @click="viewPriceHistory(scope.row.id)">
            查看调价历史
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
        <el-form-item label="本位码" prop="standardCode">
          <el-input v-model="formData.standardCode" placeholder="请输入本位码" />
        </el-form-item>
        <el-form-item label="通用名" prop="genericName">
          <el-input v-model="formData.genericName" placeholder="请输入通用名" />
        </el-form-item>
        <el-form-item label="商品名" prop="tradeName">
          <el-input v-model="formData.tradeName" placeholder="请输入商品名" />
        </el-form-item>
        <el-form-item label="剂型" prop="dosageForm">
          <el-input v-model="formData.dosageForm" placeholder="请输入剂型" />
        </el-form-item>
        <el-form-item label="规格" prop="specification">
          <el-input v-model="formData.specification" placeholder="请输入规格" />
        </el-form-item>
        <el-form-item label="生产厂家" prop="manufacturer">
          <el-input v-model="formData.manufacturer" placeholder="请输入生产厂家" />
        </el-form-item>
        <el-form-item label="当前售价" prop="currentPrice">
          <el-input-number v-model="formData.currentPrice" :min="0" placeholder="请输入当前售价" />
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="saveMedicine">确定</el-button>
    </template>
  </el-dialog>

  <!-- 药品调价历史对话框 -->
  <el-dialog :visible.sync="priceHistoryDialogVisible" title="药品调价历史">
    <el-table :data="priceHistory" stripe style="width: 100%">
      <el-table-column prop="originalPrice" label="原价格" />
      <el-table-column prop="newPrice" label="新价格" />
      <el-table-column prop="effectiveDate" label="生效日期" />
      <el-table-column prop="operatorId" label="操作员ID" />
    </el-table>
    <template #footer>
      <el-button @click="priceHistoryDialogVisible = false">关闭</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { Plus, Edit, Delete } from '@element-plus/icons-vue';
import axios from 'axios';
import {
  getMedicineList,
  createMedicine,
  updateMedicine,
  deleteMedicine as deleteApi,
  getMedicinePriceHistory
} from '@/api/medicine';
import { ElMessage, ElMessageBox } from 'element-plus';

const medicines = ref<any[]>([]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const dialogVisible = ref(false);
const formData = reactive({
  id: 0,
  standardCode: '',
  genericName: '',
  tradeName: '',
  dosageForm: '',
  specification: '',
  manufacturer: '',
  currentPrice: 0
});
const formRef = ref(null);
const isEdit = ref(false);
const priceHistoryDialogVisible = ref(false);
const priceHistory = ref<any[]>([]);

// 封装错误处理函数
const handleError = (error: any, message: string) => {
  console.error(message, error);
  if (axios.isAxiosError(error)) {
    const errorMessage = error.response?.data?.message || error.message;
    ElMessage.error(`操作失败: ${errorMessage}`);
  } else {
    ElMessage.error(`${message}: ${error.message}`);
  }
};

// 获取药品列表
const fetchMedicines = async () => {
  try {
    const response = await getMedicineList({
      page: currentPage.value,
      pageSize: pageSize.value
    });
    medicines.value = response.data.data;
    total.value = response.data.total;
  } catch (error) {
    handleError(error, '获取药品列表失败');
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
    standardCode: '',
    genericName: '',
    tradeName: '',
    dosageForm: '',
    specification: '',
    manufacturer: '',
    currentPrice: 0
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
    if (!formData.tradeName) {
      ElMessage.warning('请输入商品名');
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
    handleError(error, '保存药品信息失败');
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
      handleError(error, '删除药品失败');
    }
  }).catch(() => {
    // 取消操作
  });
};

// 查看药品调价历史
const viewPriceHistory = async (medicineId: number) => {
  try {
    const response = await getMedicinePriceHistory(medicineId);
    priceHistory.value = response.data;
    priceHistoryDialogVisible.value = true;
  } catch (error) {
    handleError(error, '获取调价历史失败');
  }
};

onMounted(fetchMedicines);
</script>