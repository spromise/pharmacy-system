<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <span>药品入库</span>
      </div>
    </template>
    
    <el-form :model="form" ref="formRef" label-width="120px">
      <!-- 药品选择/本位码输入 -->
      <el-form-item label="药品选择" required>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-select
              style="width: 200px"
              v-model="form.drug_code"
              placeholder="选择药品"
              @change="handleDrugSelect"
              filterable
              remote
              :remote-method="searchDrugs"
              :loading="loading"
            >
              <el-option
                v-for="drug in drugOptions"
                :key="drug.drug_code"
                :label="`${drug.generic_name} (${drug.drug_code})`"
                :value="drug.drug_code"
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
        <el-descriptions border column="4">
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
        v-if="!drugExists && form.drug_code"
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
import { getMedicineList } from '@/api/medicine';

// 状态管理
const formRef = ref(null);
const emit = defineEmits(['inbound-success']);
const drugOptions = ref<DrugOption[]>([]);
const pharmacists = ref([]);
const loading = ref(false);

// 表单数据（直接使用drug_code作为选中值）
const form = reactive({
  drug_code: '',         // 药品本位码
  batch_number: '',
  quantity: 1,
  expiration_date: new Date(),
  pharmacist_id: null
});

// 新药品信息（用于创建不存在的药品）
const newDrug = reactive({
  drug_code: '',         // 药品本位码
  generic_name: '',
  brand_name: '',
  dosage_form: '',
  specification: '',
  manufacturer: '',
  unit_price: 0
});

// 药品状态
const drugExists = ref(false);
const drugInfo = ref(null);

// 药品类型定义
interface DrugOption {
  drug_code: string;     // 药品本位码
  generic_name: string;  // 通用名
  brand_name?: string;   // 商品名（可选）
  dosage_form?: string;  // 剂型
}

// 搜索药品（支持远程搜索）
const searchDrugs = async (keyword: string) => {
  loading.value = true;
  try {
    const response = await getMedicineList({
      page: 1,
      pageSize: 20,
      keyword
    });
    
    drugOptions.value = response.data.map(drug => ({
      drug_code: drug.drug_code,
      generic_name: drug.generic_name,
      brand_name: drug.brand_name,
      dosage_form: drug.dosage_form
    }));
  } catch (error) {
    console.error('搜索药品失败', error);
    ElMessage.error('搜索药品失败');
  } finally {
    loading.value = false;
  }
};

// 处理药品选择
const handleDrugSelect = (drugCode: string) => {
  // 清空手动输入的本位码（如果有）
  form.drug_code = drugCode;
  checkDrugExist();
};

// 处理本位码输入
const handleDrugCodeInput = (value: string) => {
  // 清空已选择的药品（如果有）
  const selectedDrug = drugOptions.value.find(d => d.drug_code === value);
  if (!selectedDrug) {
    drugExists.value = false;
    drugInfo.value = null;
  }
};

// 验证药品存在性
const checkDrugExist = async () => {
  const drugCode = form.drug_code;
  
  if (!drugCode) {
    drugExists.value = false;
    drugInfo.value = null;
    return;
  }

  try {
    // 假设 checkDrugExists 返回 { exists: boolean, drug?: object }
    const response = await checkDrugExists(drugCode);
    const data = response.data || response; // 兼容不同响应结构
    
    // 确保 data 存在且包含 exists 字段
    if (typeof data !== 'object' || data === null || data.exists === undefined) {
      throw new Error('无效的响应结构');
    }

    drugExists.value = data.exists;
    drugInfo.value = data.drug || null; // 处理药品信息
    
    if (!data.exists) {
      // 填充新药品基础信息（如果药品不存在）
      const selectedDrug = drugOptions.value.find(d => d.drug_code === drugCode);
      if (selectedDrug) {
        newDrug.drug_code = drugCode;
        newDrug.generic_name = selectedDrug.generic_name;
        newDrug.dosage_form = selectedDrug.dosage_form;
      }
    }
  } catch (error) {
    drugExists.value = false;
    drugInfo.value = null;
  }
};

// 获取药师列表
const fetchPharmacists = async () => {
  try {
    const response = await getPharmacistList();
    pharmacists.value = response.list || [];
  } catch (error) {
    console.error('获取药师列表失败', error);
    ElMessage.error('获取药师列表失败');
  }
};

// 获取药品列表
const fetchDrugList = async () => {
  loading.value = true;
  try {
    const response = await getMedicineList({
      page: 1,
      pageSize: 100
    });
    
    drugOptions.value = response.data.map(drug => ({
      drug_code: drug.drug_code,
      generic_name: drug.generic_name,
      brand_name: drug.brand_name,
      dosage_form: drug.dosage_form
    }));
    
    if (drugOptions.value.length === 0) {
      ElMessage.warning('当前没有可选择的药品，请先维护药品基础信息');
    }
  } catch (error) {
    console.error('获取药品列表失败', error);
    ElMessage.error('获取药品列表失败，请联系管理员');
  } finally {
    loading.value = false;
  }
};

// 提交入库
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
  form.drug_code = '';
  form.batch_number = '';
  form.quantity = 1;
  form.expiration_date = new Date();
  form.pharmacist_id = null;
  
  newDrug.drug_code = '';
  newDrug.generic_name = '';
  newDrug.brand_name = '';
  newDrug.dosage_form = '';
  newDrug.specification = '';
  newDrug.manufacturer = '';
  newDrug.unit_price = 0;
  
  drugExists.value = false;
  drugInfo.value = null;
};

// 组件挂载时加载药品列表和药师列表
onMounted(() => {
  fetchPharmacists();
  fetchDrugList();
});

// 监听字段变化触发验证
watch(() => form.drug_code, () => {
  checkDrugExist();
});
</script>