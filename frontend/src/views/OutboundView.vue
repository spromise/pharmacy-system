<template>
  <div>
    <el-card class="box-card">
      <template #header><span>药品出库</span></template>
      <el-form :model="formData" :rules="rules" ref="formRef" label-width="120px">
        <el-form-item label="药品本位码" prop="standardCode">
          <el-input v-model="formData.standardCode" placeholder="请输入药品本位码" />
        </el-form-item>
        <el-form-item label="批次号" prop="batchNumber">
          <el-input v-model="formData.batchNumber" placeholder="请输入批次号" />
        </el-form-item>
        <el-form-item label="出库数量" prop="quantity">
          <el-input-number v-model="formData.quantity" :min="1" placeholder="请输入出库数量" />
        </el-form-item>
        <el-form-item label="出库类型" prop="outboundType">
          <el-select v-model="formData.outboundType" placeholder="请选择出库类型">
            <el-option label="损耗出库" value="loss" /> <!-- 仅保留损耗出库 -->
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">出库</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import { outboundMedicine } from '@/api/inboundOutbound'; // 出库接口

const formData = reactive({
  standardCode: '',
  batchNumber: '',
  quantity: 0,
  outboundType: 'loss' // 默认损耗出库
});

const formRef = ref(null);
const rules = reactive({
  standardCode: [{ required: true, message: '请输入药品本位码', trigger: 'blur' }],
  batchNumber: [{ required: true, message: '请输入批次号', trigger: 'blur' }],
  quantity: [{ required: true, message: '请输入出库数量', trigger: 'blur' }],
  outboundType: [{ required: true, message: '请选择出库类型', trigger: 'change' }]
});

const handleSubmit = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 调用出库接口
      outboundMedicine(formData).then(() => {
        ElMessage.success('出库成功');
        formData.standardCode = '';
        formData.batchNumber = '';
        formData.quantity = 0;
      });
    }
  });
};
</script>