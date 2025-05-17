<!-- components/OutboundForm.vue -->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>药品出库</span>
      </div>
    </template>
    
    <el-form :model="outboundForm" ref="outboundFormRef" label-width="120px">
      <el-form-item label="药品本位码" required>
        <el-input v-model="outboundForm.drug_code" placeholder="请输入药品本位码" />
      </el-form-item>
      
      <el-form-item label="批次号" required>
        <el-input v-model="outboundForm.batch_number" placeholder="请输入批次号" />
      </el-form-item>
      
      <el-form-item label="出库数量" required>
        <el-input-number 
          v-model="outboundForm.quantity" 
          :min="1" 
          placeholder="请输入出库数量" 
        />
      </el-form-item>
      
      <el-form-item label="出库类型" required>
        <el-radio-group v-model="outboundForm.outbound_type">
          <el-radio-button label="prescription">处方出库</el-radio-button>
          <el-radio-button label="loss">损耗出库</el-radio-button>
        </el-radio-group>
      </el-form-item>
      
      <el-form-item label="处方ID" :required="outboundForm.outbound_type === 'prescription'">
        <el-input 
          v-model="outboundForm.prescription_id" 
          placeholder="处方出库时必填" 
          :disabled="outboundForm.outbound_type !== 'prescription'"
        />
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="handleOutbound">确认出库</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { outboundMedicine } from '@/api/inboundOutbound';

const outboundFormRef = ref(null);
const emit = defineEmits(['outbound-success']);

// 出库表单数据（与数据库字段一致）
const outboundForm = reactive({
  drug_code: '',
  batch_number: '',
  quantity: 0,
  outbound_type: 'prescription',
  prescription_id: ''
});

// 提交出库
const handleOutbound = () => {
  (outboundFormRef.value as any)?.validate((valid: boolean) => {
    if (!valid) return;
    
    // 转换数据类型
    const formData: any = {
      ...outboundForm,
      quantity: Number(outboundForm.quantity)
    };
    
    // 如果是处方出库，添加处方ID
    if (outboundForm.outbound_type === 'prescription') {
      formData.prescription_id = Number(outboundForm.prescription_id);
    } else {
      formData.prescription_id = null;
    }
    
    outboundMedicine(formData)
      .then(() => {
        ElMessage.success('出库成功');
        resetForm();
        emit('outbound-success'); // 通知父组件刷新数据
      })
      .catch(error => {
        console.error('Error during outbound:', error);
        ElMessage.error('出库失败');
      });
  });
};

// 重置表单
const resetForm = () => {
  outboundForm.drug_code = '';
  outboundForm.batch_number = '';
  outboundForm.quantity = 0;
  outboundForm.outbound_type = 'prescription';
  outboundForm.prescription_id = '';
};
</script>