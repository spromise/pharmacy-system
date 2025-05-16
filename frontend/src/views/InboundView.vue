<template>
  <div>
    <el-card class="box-card">
      <template #header><span>药品入库</span></template>
      <el-form :model="formData" :rules="rules" ref="formRef" label-width="120px">
        <el-form-item label="药品本位码" prop="standardCode">
          <el-input v-model="formData.standardCode" placeholder="请输入药品本位码" />
        </el-form-item>
        <el-form-item label="批次号" prop="batchNumber">
          <el-input v-model="formData.batchNumber" placeholder="请输入批次号" />
        </el-form-item>
        <el-form-item label="入库数量" prop="quantity">
          <el-input-number v-model="formData.quantity" :min="1" placeholder="请输入入库数量" />
        </el-form-item>
        <el-form-item label="操作员ID" prop="operatorId">
          <el-input v-model="formData.operatorId" placeholder="请输入操作员ID" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">入库</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { inboundMedicine } from '@/api/inboundOutbound'; // 入库接口

const formData = reactive({
  standardCode: '',
  batchNumber: '',
  quantity: 0,
  operatorId: ''
});

const formRef = ref(null);
const rules = reactive({
  standardCode: [{ required: true, message: '请输入药品本位码', trigger: 'blur' }],
  batchNumber: [{ required: true, message: '请输入批次号', trigger: 'blur' }],
  quantity: [{ required: true, message: '请输入入库数量', trigger: 'blur' }],
  operatorId: [{ required: true, message: '请输入操作员ID', trigger: 'blur' }]
});

const handleSubmit = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 调用入库接口
      inboundMedicine(formData).then(() => {
        ElMessage.success('入库成功');
        formData.standardCode = '';
        formData.batchNumber = '';
        formData.quantity = 0;
        formData.operatorId = '';
      });
    }
  });
};
</script>