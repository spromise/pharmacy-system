<template>
  <div>
    <!-- 处方表格 -->
    <el-table :data="prescriptions" stripe style="width: 100%">
      <el-table-column prop="id" label="处方ID" />
      <el-table-column prop="patientVisitNumber" label="患者就诊流水号" />
      <el-table-column prop="doctorId" label="开方医生ID" />
      <el-table-column prop="prescriptionTime" label="处方开具时间" />
      <el-table-column prop="status" label="状态" />
      <el-table-column prop="clinicalDiagnosis" label="临床诊断" />
      <el-table-column prop="medicalAdvice" label="医嘱备注" />
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="small" type="primary" @click="openEditDialog(scope.row)">
            <el-icon><Edit /></el-icon>编辑
          </el-button>
          <el-button size="small" type="danger" @click="deletePrescription(scope.row.id)">
            <el-icon><Delete /></el-icon>删除
          </el-button>
          <el-button size="small" type="info" @click="viewPrescriptionDetails(scope.row.id)">
            查看处方明细
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

    <!-- 新增/编辑处方对话框 -->
    <el-dialog :visible.sync="dialogVisible" title="处方信息">
      <template #content>
        <el-form :model="formData" ref="formRef" label-width="120px">
          <el-form-item label="患者就诊流水号" prop="patientVisitNumber">
            <el-input v-model="formData.patientVisitNumber" placeholder="请输入患者就诊流水号" />
          </el-form-item>
          <el-form-item label="开方医生ID" prop="doctorId">
            <el-input v-model="formData.doctorId" placeholder="请输入开方医生ID" />
          </el-form-item>
          <el-form-item label="临床诊断" prop="clinicalDiagnosis">
            <el-input v-model="formData.clinicalDiagnosis" placeholder="请输入临床诊断" />
          </el-form-item>
          <el-form-item label="医嘱备注" prop="medicalAdvice">
            <el-input v-model="formData.medicalAdvice" placeholder="请输入医嘱备注" />
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="savePrescription">确定</el-button>
      </template>
    </el-dialog>

    <!-- 处方明细对话框 -->
    <el-dialog :visible.sync="prescriptionDetailsDialogVisible" title="处方明细">
      <el-table :data="prescriptionDetails" stripe style="width: 100%">
        <el-table-column prop="medicineStandardCode" label="药品本位码" />
        <el-table-column prop="medicineName" label="药品名称" />
        <el-table-column prop="unitPrice" label="单价" />
        <el-table-column prop="quantity" label="数量" />
        <el-table-column prop="usageDosage" label="用法用量" />
      </el-table>
      <template #footer>
        <el-button @click="prescriptionDetailsDialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { Edit, Delete } from '@element-plus/icons-vue';
import {
  getPrescriptionList,
  createPrescription,
  updatePrescription,
  deletePrescription as deleteApi,
  getPrescriptionDetailList
} from '@/api/prescription';
import { ElMessage, ElMessageBox } from 'element-plus';

const prescriptions = ref<any[]>([]);
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(0);
const dialogVisible = ref(false);
const formData = reactive({
  id: 0,
  patientVisitNumber: '',
  doctorId: '',
  clinicalDiagnosis: '',
  medicalAdvice: ''
});
const formRef = ref(null);
const isEdit = ref(false);
const prescriptionDetailsDialogVisible = ref(false);
const prescriptionDetails = ref<any[]>([]);

// 获取处方列表
const fetchPrescriptions = async () => {
  try {
    const response = await getPrescriptionList({
      page: currentPage.value,
      pageSize: pageSize.value
    });
    prescriptions.value = response.data;
    total.value = response.total;
  } catch (error) {
    console.error('Error fetching prescriptions:', error);
    ElMessage.error('获取处方列表失败');
  }
};

// 分页相关方法
const handleSizeChange = (newSize: number) => {
  pageSize.value = newSize;
  fetchPrescriptions();
};

const handleCurrentChange = (newPage: number) => {
  currentPage.value = newPage;
  fetchPrescriptions();
};

// 打开新增对话框
const openCreateDialog = () => {
  isEdit.value = false;
  // 重置表单
  Object.assign(formData, {
    id: 0,
    patientVisitNumber: '',
    doctorId: '',
    clinicalDiagnosis: '',
    medicalAdvice: ''
  });
  dialogVisible.value = true;
};

// 打开编辑对话框
const openEditDialog = (row: any) => {
  isEdit.value = true;
  Object.assign(formData, { ...row });
  dialogVisible.value = true;
};

// 保存处方信息
const savePrescription = async () => {
  try {
    if (!formData.patientVisitNumber || !formData.doctorId) {
      ElMessage.warning('请输入患者就诊流水号和开方医生ID');
      return;
    }

    if (isEdit.value) {
      // 更新处方
      await updatePrescription(formData.id, formData);
      ElMessage.success('更新成功');
    } else {
      // 创建处方
      await createPrescription(formData);
      ElMessage.success('创建成功');
    }

    dialogVisible.value = false;
    fetchPrescriptions();
  } catch (error) {
    console.error('Error saving prescription:', error);
    ElMessage.error('保存失败');
  }
};

// 删除处方
const deletePrescription = (id: number) => {
  ElMessageBox.confirm(
    '确定要删除此处方吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(async () => {
    try {
      await deleteApi(id);
      fetchPrescriptions();
      ElMessage.success('删除成功');
    } catch (error) {
      console.error('Error deleting prescription:', error);
      ElMessage.error('删除失败');
    }
  }).catch(() => {
    // 取消操作
  });
};

// 查看处方明细
const viewPrescriptionDetails = async (prescriptionId: number) => {
  try {
    const response = await getPrescriptionDetailList(prescriptionId);
    prescriptionDetails.value = response.data;
    prescriptionDetailsDialogVisible.value = true;
  } catch (error) {
    console.error('Error fetching prescription details:', error);
    ElMessage.error('获取处方明细失败');
  }
};

onMounted(fetchPrescriptions);
</script>