<template>
  <div>
   <!-- 入库表单 -->
    <el-card class="box-card">
      <template #header>
        <span>药品入库</span>
      </template>
      <el-form :model="inboundFormData" :rules="inboundRules" ref="inboundFormRef" label-width="120px">
        <el-form-item label="药品本位码" prop="standardCode">
          <el-input v-model="inboundFormData.standardCode" placeholder="请输入药品本位码" />
        </el-form-item>
        <el-form-item label="批次号" prop="batchNumber">
          <el-input v-model="inboundFormData.batchNumber" placeholder="请输入批次号" />
        </el-form-item>
        <el-form-item label="入库数量" prop="quantity">
          <el-input-number v-model="inboundFormData.quantity" :min="1" placeholder="请输入入库数量" />
        </el-form-item>
        <el-form-item label="操作员ID" prop="operatorId">
          <el-input v-model="inboundFormData.operatorId" placeholder="请输入操作员ID" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleInbound">入库</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 出库表单 -->
    <el-card class="box-card">
      <template #header>
        <span>药品出库</span>
      </template>
      <el-form :model="outboundFormData" :rules="outboundRules" ref="outboundFormRef" label-width="120px">
        <el-form-item label="药品本位码" prop="standardCode">
          <el-input v-model="outboundFormData.standardCode" placeholder="请输入药品本位码" />
        </el-form-item>
        <el-form-item label="批次号" prop="batchNumber">
          <el-input v-model="outboundFormData.batchNumber" placeholder="请输入批次号" />
        </el-form-item>
        <el-form-item label="出库数量" prop="quantity">
          <el-input-number v-model="outboundFormData.quantity" :min="1" placeholder="请输入出库数量" />
        </el-form-item>
        <el-form-item label="关联处方" prop="prescriptionId" v-if="outboundFormData.outboundType === 'prescription'">
          <el-input v-model="outboundFormData.prescriptionId" placeholder="请输入关联处方ID" />
        </el-form-item>
        <el-form-item label="出库类型" prop="outboundType">
          <el-select v-model="outboundFormData.outboundType" placeholder="请选择出库类型">
            <el-option label="处方出库" value="prescription" />
            <el-option label="损耗出库" value="loss" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleOutbound">出库</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 出入库记录选项卡 -->
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="入库记录" name="inbound">
        <el-card class="box-card">
          <el-table :data="inboundRecords" stripe style="width: 100%">
            <el-table-column prop="id" label="入库ID" />
            <el-table-column prop="medicineName" label="药品名称" />
            <el-table-column prop="standardCode" label="药品本位码" />
            <el-table-column prop="batchNumber" label="批次号" />
            <el-table-column prop="quantity" label="入库数量" />
            <el-table-column prop="createTime" label="入库时间" />
            <el-table-column prop="operatorName" label="操作员" />
          </el-table>
          <el-pagination
            @size-change="handleInboundSizeChange"
            @current-change="handleInboundCurrentChange"
            :current-page="inboundCurrentPage"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="inboundPageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="inboundTotal"
            style="margin-top: 20px"
          />
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="出库记录" name="outbound">
        <el-card class="box-card">
          <el-table :data="outboundRecords" stripe style="width: 100%">
            <el-table-column prop="id" label="出库ID" />
            <el-table-column prop="medicineName" label="药品名称" />
            <el-table-column prop="standardCode" label="药品本位码" />
            <el-table-column prop="batchNumber" label="批次号" />
            <el-table-column prop="quantity" label="出库数量" />
            <el-table-column prop="prescriptionId" label="关联处方ID" />
            <el-table-column prop="outboundType" label="出库类型">
              <template #default="scope">
                {{ scope.row.outboundType === 'prescription' ? '处方出库' : '损耗出库' }}
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="出库时间" />
          </el-table>
          <el-pagination
            @size-change="handleOutboundSizeChange"
            @current-change="handleOutboundCurrentChange"
            :current-page="outboundCurrentPage"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="outboundPageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="outboundTotal"
            style="margin-top: 20px"
          />
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import {
  inboundMedicine as inboundApi,
  outboundMedicine as outboundApi,
  getInboundRecordList,
  getOutboundRecordList,
} from '@/api/inboundOutbound';
import { ElMessage } from 'element-plus';
import { useInboundOutboundStore } from '../stores/inboundOutbound';

// 使用 Pinia store
const store = useInboundOutboundStore();

// 表单数据
const inboundFormData = reactive({
  standardCode: '',
  batchNumber: '',
  quantity: 0,
  operatorId: ''
});

const outboundFormData = reactive({
  standardCode: '',
  batchNumber: '',
  quantity: 0,
  prescriptionId: '',
  outboundType: 'prescription'
});

const inboundFormRef = ref(null);
const outboundFormRef = ref(null);

// 表单验证规则
const inboundRules = reactive({
  standardCode: [
    { required: true, message: '请输入药品本位码', trigger: 'blur' }
  ],
  batchNumber: [
    { required: true, message: '请输入批次号', trigger: 'blur' }
  ],
  quantity: [
    { required: true, message: '请输入入库数量', trigger: 'blur' },
    { type: 'number', min: 1, message: '入库数量必须大于0', trigger: 'blur' }
  ],
  operatorId: [
    { required: true, message: '请输入操作员ID', trigger: 'blur' }
  ]
});

const outboundRules = reactive({
  standardCode: [
    { required: true, message: '请输入药品本位码', trigger: 'blur' }
  ],
  batchNumber: [
    { required: true, message: '请输入批次号', trigger: 'blur' }
  ],
  quantity: [
    { required: true, message: '请输入出库数量', trigger: 'blur' },
    { type: 'number', min: 1, message: '出库数量必须大于0', trigger: 'blur' }
  ],
  prescriptionId: [
    { required: outboundFormData.outboundType === 'prescription', message: '处方出库必须输入处方ID', trigger: 'blur' }
  ],
  outboundType: [
    { required: true, message: '请选择出库类型', trigger: 'change' }
  ]
});

// 选项卡
const activeTab = ref('inbound');

// 表格数据
const inboundRecords = computed(() => store.inboundOutboundList.filter(record => record.type === 'inbound'));
const outboundRecords = computed(() => store.inboundOutboundList.filter(record => record.type === 'outbound'));

const inboundCurrentPage = ref(1);
const inboundPageSize = ref(10);
const inboundTotal = ref(0);

const outboundCurrentPage = ref(1);
const outboundPageSize = ref(10);
const outboundTotal = ref(0);

// 统一错误处理
const handleError = (error: any, message: string) => {
  console.error(message, error);
  ElMessage.error(message);
};

// 药品入库
const handleInbound = async () => {
  (inboundFormRef.value as any)?.validate((valid: boolean) => {
    if (!valid) return;
    
    store.createNewInboundOutboundRecord({
      ...inboundFormData,
      type: 'inbound'
    }).then(() => {
      // 清空表单
      Object.assign(inboundFormData, {
        standardCode: '',
        batchNumber: '',
        quantity: 0,
        operatorId: ''
      });
      // 切换到入库记录选项卡
      activeTab.value = 'inbound';
    }).catch(error => {
      handleError(error, '入库失败');
    });
  });
};

// 药品出库
const handleOutbound = async () => {
  (outboundFormRef.value as any)?.validate((valid: boolean) => {
    if (!valid) return;
    
    store.createNewInboundOutboundRecord({
      ...outboundFormData,
      type: 'outbound'
    }).then(() => {
      // 清空表单
      Object.assign(outboundFormData, {
        standardCode: '',
        batchNumber: '',
        quantity: 0,
        prescriptionId: '',
        outboundType: 'prescription'
      });
      // 切换到出库记录选项卡
      activeTab.value = 'outbound';
    }).catch(error => {
      handleError(error, '出库失败');
    });
  });
};

// 获取入库记录列表
const fetchInboundRecords = async () => {
  try {
    const response = await getInboundRecordList({
      page: inboundCurrentPage.value,
      pageSize: inboundPageSize.value
    });
    store.inboundOutboundList = response.data.map(record => ({ ...record, type: 'inbound' }));
    inboundTotal.value = response.total;
  } catch (error) {
    handleError(error, '获取入库记录列表失败');
  }
};

// 获取出库记录列表
const fetchOutboundRecords = async () => {
  try {
    const response = await getOutboundRecordList({
      page: outboundCurrentPage.value,
      pageSize: outboundPageSize.value
    });
    store.inboundOutboundList = response.data.map(record => ({ ...record, type: 'outbound' }));
    outboundTotal.value = response.total;
  } catch (error) {
    handleError(error, '获取出库记录列表失败');
  }
};

// 入库记录分页相关方法
const handleInboundSizeChange = (newSize: number) => {
  inboundPageSize.value = newSize;
  fetchInboundRecords();
};

const handleInboundCurrentChange = (newPage: number) => {
  inboundCurrentPage.value = newPage;
  fetchInboundRecords();
};

// 出库记录分页相关方法
const handleOutboundSizeChange = (newSize: number) => {
  outboundPageSize.value = newSize;
  fetchOutboundRecords();
};

const handleOutboundCurrentChange = (newPage: number) => {
  outboundCurrentPage.value = newPage;
  fetchOutboundRecords();
};

onMounted(() => {
  fetchInboundRecords();
  fetchOutboundRecords();
});
</script>

<style scoped>
.box-card {
  margin-bottom: 20px;
}
</style>