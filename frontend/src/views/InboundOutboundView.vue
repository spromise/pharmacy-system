<template>
  <div class="inventory-management-page">
    <!-- 顶部导航 -->
    <div class="page-header">   
      <el-tabs v-model="activeTab" type="card">
        <el-tab-pane label="入库操作" name="inbound-operation">
          <InboundForm 
            @inbound-success="refreshInboundRecords"
          />
        </el-tab-pane>
        <el-tab-pane label="出库操作" name="outbound-operation">
          <OutboundForm 
            @outbound-success="refreshOutboundRecords"
          />
        </el-tab-pane>
        <el-tab-pane label="入库记录" name="inbound-query">
          <RecordsTable 
            :records="inboundRecords"
            :pagination="inboundPagination"
            :searchParams="inboundSearch"
            @search="searchInboundRecords"
            @refresh="refreshInboundRecords"
            @size-change="handleInboundSizeChange"
            @current-change="handleInboundCurrentChange"
            @view-detail="viewInboundDetail"
            record-type="inbound"
          />
        </el-tab-pane>
        <el-tab-pane label="出库记录" name="outbound-query">
          <RecordsTable 
            :records="outboundRecords"
            :pagination="outboundPagination"
            :searchParams="outboundSearch"
            @search="searchOutboundRecords"
            @refresh="refreshOutboundRecords"
            @size-change="handleOutboundSizeChange"
            @current-change="handleOutboundCurrentChange"
            @view-detail="viewOutboundDetail"
            record-type="outbound"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
    
    <!-- 详情弹窗 -->
    <el-dialog 
      :visible.sync="detailDialogVisible" 
      title="记录详情"
      width="600px"
      @close="closeDetailDialog"
    >
      <template #content>
        <el-card v-if="detailType === 'inbound'" class="detail-card">
          <div class="detail-item">
            <span class="detail-label">药品名称:</span>
            <span class="detail-value">{{ currentInboundRecord.drug.generic_name }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">药品本位码:</span>
            <span class="detail-value">{{ currentInboundRecord.drug_code }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">批次号:</span>
            <span class="detail-value">{{ currentInboundRecord.batch_number }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">入库数量:</span>
            <span class="detail-value">{{ currentInboundRecord.quantity }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">入库时间:</span>
            <span class="detail-value">{{ formatDateTime(currentInboundRecord.inbound_time) }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">操作员ID:</span>
            <span class="detail-value">{{ currentInboundRecord.operator_id }}</span>
          </div>
        </el-card>
        
        <el-card v-if="detailType === 'outbound'" class="detail-card">
          <div class="detail-item">
            <span class="detail-label">药品名称:</span>
            <span class="detail-value">{{ currentOutboundRecord.drug.generic_name }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">药品本位码:</span>
            <span class="detail-value">{{ currentOutboundRecord.drug_code }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">批次号:</span>
            <span class="detail-value">{{ currentOutboundRecord.batch_number }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">出库数量:</span>
            <span class="detail-value">{{ currentOutboundRecord.quantity }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">出库类型:</span>
            <span class="detail-value">{{ currentOutboundRecord.outbound_type === 'prescription' ? '处方出库' : '损耗出库' }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">处方ID:</span>
            <span class="detail-value">{{ currentOutboundRecord.prescription_id || '-' }}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label">出库时间:</span>
            <span class="detail-value">{{ formatDateTime(currentOutboundRecord.outbound_time) }}</span>
          </div>
        </el-card>
      </template>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="detailDialogVisible = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { 
  getInboundRecordList, 
  getOutboundRecordList,
} from '@/api/inboundOutbound';
import { ElMessage } from 'element-plus';
import { Refresh, Search } from '@element-plus/icons-vue';
import dayjs from 'dayjs';
import InboundForm from '../components/InboundForm.vue';
import OutboundForm from '../components/OutboundForm.vue';
import RecordsTable from '../components/RecordsTable.vue';

// 选项卡
const activeTab = ref('inbound-operation');

// 搜索参数
const inboundSearch = reactive({
  keyword: ''
});

const outboundSearch = reactive({
  keyword: ''
});

// 分页参数和数据
const inboundPagination = reactive({
  current: 1,
  pageSize: 10,
  total: 0
});

const outboundPagination = reactive({
  current: 1,
  pageSize: 10,
  total: 0
});

const inboundRecords = ref<InboundRecord[]>([]);
const outboundRecords = ref<OutboundRecord[]>([]);

// 详情弹窗
const detailDialogVisible = ref(false);
const detailType = ref('');
const currentInboundRecord = ref<InboundRecord | null>(null);
const currentOutboundRecord = ref<OutboundRecord | null>(null);

// 格式化日期时间
const formatDateTime = (dateTime: string) => {
  return dayjs(dateTime).format('YYYY-MM-DD HH:mm:ss');
};

// 统一错误处理
const handleError = (error: any, message: string) => {
  console.error(message, error);
  ElMessage.error(message);
};

// 获取入库记录列表
const fetchInboundRecords = async (resetPage = false) => {
  if (resetPage) {
    inboundPagination.current = 1;
  }
  
  try {
    const response = await getInboundRecordList({
      page: inboundPagination.current,
      pageSize: inboundPagination.pageSize,
      keyword: inboundSearch.keyword
    });
    
    inboundRecords.value = response.data.list;
    inboundPagination.total = response.data.total;
  } catch (error) {
    handleError(error, '获取入库记录列表失败');
  }
};

// 获取出库记录列表
const fetchOutboundRecords = async (resetPage = false) => {
  if (resetPage) {
    outboundPagination.current = 1;
  }
  
  try {
    const response = await getOutboundRecordList({
      page: outboundPagination.current,
      pageSize: outboundPagination.pageSize,
      keyword: outboundSearch.keyword
    });
    
    outboundRecords.value = response.data.list;
    outboundPagination.total = response.data.total;
  } catch (error) {
    handleError(error, '获取出库记录列表失败');
  }
};

// 入库记录分页相关方法
const handleInboundSizeChange = (newSize: number) => {
  inboundPagination.pageSize = newSize;
  fetchInboundRecords();
};

const handleInboundCurrentChange = (newPage: number) => {
  inboundPagination.current = newPage;
  fetchInboundRecords();
};

// 出库记录分页相关方法
const handleOutboundSizeChange = (newSize: number) => {
  outboundPagination.pageSize = newSize;
  fetchOutboundRecords();
};

const handleOutboundCurrentChange = (newPage: number) => {
  outboundPagination.current = newPage;
  fetchOutboundRecords();
};

// 搜索方法
const searchInboundRecords = () => {
  fetchInboundRecords(true);
};

const searchOutboundRecords = () => {
  fetchOutboundRecords(true);
};

// 刷新方法
const refreshInboundRecords = () => {
  inboundSearch.keyword = '';
  fetchInboundRecords(true);
};

const refreshOutboundRecords = () => {
  outboundSearch.keyword = '';
  fetchOutboundRecords(true);
};

// 查看详情
const viewInboundDetail = (record: InboundRecord) => {
  currentInboundRecord.value = { ...record };
  detailType.value = 'inbound';
  detailDialogVisible.value = true;
};

const viewOutboundDetail = (record: OutboundRecord) => {
  currentOutboundRecord.value = { ...record };
  detailType.value = 'outbound';
  detailDialogVisible.value = true;
};

// 关闭详情弹窗
const closeDetailDialog = () => {
  detailDialogVisible.value = false;
  currentInboundRecord.value = null;
  currentOutboundRecord.value = null;
};

onMounted(() => {
  // 预先加载记录数据
  fetchInboundRecords();
  fetchOutboundRecords();
});
</script>

<style scoped>
.inventory-management-page {
  padding: 20px;
}

.page-header {
  margin-bottom: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 15px;
  color: #303133;
}

.detail-card {
  border: none;
  box-shadow: none;
}

.detail-item {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
}

.detail-label {
  width: 120px;
  color: #909399;
}

.detail-value {
  flex: 1;
  color: #303133;
}
</style>