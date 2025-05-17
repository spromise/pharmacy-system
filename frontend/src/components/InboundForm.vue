<!-- components/inbound/InboundForm.vue -->
<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>药品入库</span>
      </div>
    </template>
    
    <el-form :model="form" ref="formRef" label-width="120px">
      <!-- 商品名选择/本位码输入 -->
      <el-form-item label="药品选择" required>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-select
              style="width: 200px"
              v-model="form.brand_name"
              placeholder="选择商品名"
              @change="handleBrandSelect"
            >
              <el-option
                v-for="drug in drugOptions"
                :key="drug.drug_code"
                :label="`${drug.brand_name || drug.generic_name} (${drug.drug_code})`"
                :value="drug.brand_name"
              />
            </el-select>
          </el-col>
          <el-col :span="12">
            <el-input
              style="width: 200px"
              v-model="form.drug_code"
              placeholder="或输入药品本位码"
              @input="handleDrugCodeInput"
            />
          </el-col>
        </el-row>
      </el-form-item>

      <!-- 药品信息展示 -->
      <el-form-item label="药品信息" v-if="drugInfo">
        <el-descriptions border column="3">
          <el-descriptions-item label="通用名称">{{ drugInfo.generic_name }}</el-descriptions-item>
          <el-descriptions-item label="商品名">{{ drugInfo.brand_name || '-' }}</el-descriptions-item>
          <el-descriptions-item label="剂型">{{ drugInfo.dosage_form }}</el-descriptions-item>
          <el-descriptions-item label="规格">{{ drugInfo.specification || '-' }}</el-descriptions-item>
          <el-descriptions-item label="生产厂家">{{ drugInfo.manufacturer || '-' }}</el-descriptions-item>
        </el-descriptions>
      </el-form-item>

      <!-- 其他表单字段 -->
      <el-form-item label="批次号" required>
        <el-input v-model="form.batch_number" placeholder="请输入批次号" />
      </el-form-item>
      
      <el-form-item label="入库数量" required>
        <el-input-number v-model="form.quantity" :min="1" placeholder="请输入入库数量" />
      </el-form-item>
      
      <el-form-item label="有效期至" required>
        <el-date-picker
          v-model="form.expiration_date"
          type="date"
          placeholder="选择日期"
          :default-value="new Date()"
        />
      </el-form-item>
      
      <el-form-item label="操作药师" required>
        <el-select v-model="form.pharmacist_id" placeholder="请选择药师">
          <el-option
            v-for="pharmacist in pharmacists"
            :key="pharmacist.pharmacist_id"
            :label="pharmacist.name"
            :value="pharmacist.pharmacist_id"
          />
        </el-select>
      </el-form-item>

      <!-- 药品不存在时的创建表单 -->
      <el-form-item
        label="药品信息"
        :required="!drugExists"
        v-if="!drugExists && (form.drug_code || form.brand_name)"
      >
        <el-alert
          title="药品信息不存在，请补充以下信息"
          type="warning"
          show-icon
          :closable="false"
        />
        
        <el-form :model="newDrug" label-width="90px">
          <el-form-item label="通用名称" required style="margin-bottom: 12px">
            <el-input v-model="newDrug.generic_name" placeholder="请输入药品通用名称" />
          </el-form-item>
          
          <el-form-item label="商品名" style="margin-bottom: 12px;">
            <el-input v-model="newDrug.brand_name" placeholder="请输入商品名" />
          </el-form-item>
          
          <el-form-item label="剂型" required style="margin-bottom: 12px;">
            <el-input v-model="newDrug.dosage_form" placeholder="请输入剂型" />
          </el-form-item>
          
          <el-form-item label="规格" style="margin-bottom: 12px;">
            <el-input v-model="newDrug.specification" placeholder="请输入规格" />
          </el-form-item>
          
          <el-form-item label="生产厂家" style="margin-bottom: 12px;">
            <el-input v-model="newDrug.manufacturer" placeholder="请输入生产厂家" />
          </el-form-item>
          
          <el-form-item label="当前售价">
            <el-input-number v-model="newDrug.unit_price" :min="0" placeholder="请输入当前售价" />
          </el-form-item>
        </el-form>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="handleSubmit">确认入库</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { 
  checkDrugExists, 
  inboundMedicine, 
  getPharmacistList 
} from '@/api/inboundOutbound';

// 优化：移除多余的 drugOptions 及 fetchDrugList，保留药师列表
const formRef = ref(null);
const emit = defineEmits(['inbound-success']);

// 表单数据整合
const form = reactive({
  drug_code: '',         // 药品本位码（支持手动输入或通过商品名填充）
  brand_name: '',        // 商品名（支持下拉选择）
  batch_number: '',
  quantity: 1,
  expiration_date: new Date(),
  pharmacist_id: null
});

const newDrug = reactive({
  generic_name: '',
  brand_name: '',
  dosage_form: '',
  specification: '',
  manufacturer: '',
  unit_price: 0
});

const drugExists = ref(false);
const drugInfo = ref(null);
const pharmacists = ref([]);

// 验证药品存在性（统一处理本位码和商品名）
const checkDrugExist = async () => {
  const lookupCode = form.drug_code || 
    drugOptions.value.find(d => d.brand_name === form.brand_name)?.drug_code;

  if (!lookupCode) {
    drugExists.value = false;
    drugInfo.value = null;
    return;
  }

  try {
    const { data } = await checkDrugExists(lookupCode);
    drugExists.value = data.exists;
    drugInfo.value = data.drug;
    
    if (!data.exists) {
      // 填充新药品基础信息（如果通过商品名选择但药品不存在）
      const selectedDrug = drugOptions.value.find(d => d.brand_name === form.brand_name);
      if (selectedDrug) {
        newDrug.generic_name = selectedDrug.generic_name;
        newDrug.dosage_form = selectedDrug.dosage_form;
      }
    }
  } catch (error) {
    console.error('验证药品失败', error);
  }
};

// 处理商品名选择
const handleBrandSelect = (brandName: string) => {
  form.drug_code = ''; // 清空本位码输入
  checkDrugExist(); // 自动验证选择的商品名
};

// 处理本位码输入
const handleDrugCodeInput = (value: string) => {
  form.brand_name = ''; // 清空商品名选择
  checkDrugExist(); // 自动验证输入的本位码
};

// 获取药师列表（保留必要API）
const fetchPharmacists = async () => {
  try {
    const response = await getPharmacistList();
    pharmacists.value = response.list || [];
  } catch (error) {
    console.error('获取药师列表失败', error);
    ElMessage.error('获取药师列表失败');
  }
};

const handleSubmit = async () => {
  try {
    // 验证表单
    await (formRef.value as any)?.validate();
    
    // 确认对话框
    await ElMessageBox.confirm(
      `您确定要执行入库操作吗？\n药品: ${drugInfo.value?.generic_name || newDrug.generic_name} (${form.drug_code})\n批次: ${form.batch_number}\n数量: ${form.quantity}`,
      '确认入库',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    );
    
    // 准备提交数据
    const payload = {
      ...form,
      // 安全地转换日期格式
      expiration_date: form.expiration_date 
        ? new Date(form.expiration_date).toISOString() 
        : new Date().toISOString(),
      // 如果药品不存在，添加药品信息
      drug: drugExists.value ? undefined : newDrug
    };
    
    // 提交数据
    const { data } = await inboundMedicine(payload);
    
    // 处理成功响应
    ElMessage.success(data.message || '入库成功');
    resetForm();
    emit('inbound-success'); // 通知父组件刷新数据
  } catch (error: any) {
    // 处理验证失败
    if (error.name === 'ValidationError') {
      console.warn('表单验证失败', error);
      return;
    }
    
    // 处理用户取消
    if (error.name === 'cancel') {
      console.log('用户取消了入库操作');
      return;
    }
    
    // 处理API错误
    console.error('入库失败', error);
    const errorMessage = error.response?.data?.message || '入库失败，请重试';
    ElMessage.error(errorMessage);
  }
};

// 重置表单
const resetForm = () => {
  // 省略重复代码...
  form.brand_name = '';
  form.drug_code = '';
};

// 仅加载药师列表（移除药品列表请求）
onMounted(() => {
  fetchPharmacists();
});

// 监听字段变化触发验证
watch([() => form.drug_code, () => form.brand_name], () => {
  checkDrugExist();
});
</script>