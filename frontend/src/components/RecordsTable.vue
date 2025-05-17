<template>
  <el-card class="box-card">
    <template #header>
      <div class="clearfix">
        <el-button style="float: right; padding: 3px 0" link @click="refresh">
          <el-icon><Refresh /></el-icon>刷新
        </el-button>
        <span>{{ recordType === 'inbound' ? '入库记录查询' : '出库记录查询' }}</span>
      </div>
    </template>
    
    <!-- 搜索栏 -->
    <el-row class="mb-4">
      <el-col :span="8">
        <el-input 
          v-model="searchParams.keyword" 
          placeholder="请输入药品名称、本位码或批次号" 
          clearable 
          @keyup.enter="search"
        >
          <template #append>
            <el-button @click="search">
              <el-icon><Search /></el-icon>搜索
            </el-button>
          </template>
        </el-input>
      </el-col>
    </el-row>
    
    <!-- 记录表格 -->
    <el-table :data="records" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="60" />
      <el-table-column prop="drug.generic_name" label="药品名称" min-width="80" />
      <el-table-column prop="drug.brand_name" label="商品名" min-width="80" />
      <el-table-column prop="drug_code" label="药品本位码" min-width="60" />
      <el-table-column prop="batch_number" label="批次号" min-width="60" />
      <el-table-column prop="quantity" label="数量" width="60" />
      
      <!-- 时间列 -->
      <el-table-column label="时间" width="180">
        <template #default="scope">
          {{ formatDateTime(recordType === 'inbound' ? scope.row.inbound_time : scope.row.outbound_time) }}
        </template>
      </el-table-column>

      <!-- 出库类型列（仅出库记录显示） -->
      <el-table-column 
        v-if="recordType === 'outbound'"
        prop="outbound_type" 
        label="出库类型" 
        width="100"
      >
        <template #default="scope">
          {{ getOutboundTypeText(scope.row.outbound_type) }}
        </template>
      </el-table-column>
    </el-table>
    
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.current"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pagination.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total"
      style="margin-top: 20px"
    />
  </el-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Refresh, Search } from '@element-plus/icons-vue';
import dayjs from 'dayjs';

const props = defineProps({
  records: {
    type: Array,
    required: true
  },
  pagination: {
    type: Object,
    required: true
  },
  searchParams: {
    type: Object,
    required: true
  },
  recordType: {
    type: String,
    required: true,
    validator: (value: string) => {
      return ['inbound', 'outbound'].includes(value);
    }
  }
});

const emit = defineEmits([
  'search',
  'refresh',
  'size-change',
  'current-change',
  'view-detail'
]);

// 格式化日期时间
const formatDateTime = (dateTime: string) => {
  return dayjs(dateTime).format('YYYY-MM-DD HH:mm:ss');
};

// 出库类型文本转换（可根据实际业务扩展）
const getOutboundTypeText = (type: string) => {
  switch (type) {
    case 'PRESCRIPTION_PICKUP': return '处方取药';
    case 'LOSS': return '损耗出库';
    default: return type;
  }
};

// 搜索记录
const search = () => {
  emit('search');
};

// 刷新记录
const refresh = () => {
  emit('refresh');
};

// 分页相关方法
const handleSizeChange = (newSize: number) => {
  emit('size-change', newSize);
};

const handleCurrentChange = (newPage: number) => {
  emit('current-change', newPage);
};

// 查看详情
const viewDetail = (record: any) => {
  emit('view-detail', record);
};
</script>