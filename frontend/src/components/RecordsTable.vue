<!-- components/RecordsTable.vue -->
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
      <el-table-column prop="drug.generic_name" label="药品名称" min-width="120" />
      <el-table-column prop="drug_code" label="药品本位码" min-width="140" />
      <el-table-column prop="batch_number" label="批次号" min-width="120" />
      <el-table-column prop="quantity" label="数量" width="100" />
      
      <el-table-column label="时间" width="180">
        <template #default="scope">
          {{ formatDateTime(recordType === 'inbound' ? scope.row.inbound_time : scope.row.outbound_time) }}
        </template>
      </el-table-column>
      
      <el-table-column label="操作员/处方ID" width="120">
        <template #default="scope">
          {{ recordType === 'inbound' 
            ? scope.row.operator_id 
            : scope.row.prescription_id || '-' }}
        </template>
      </el-table-column>
      
      <el-table-column label="操作" width="80">
        <template #default="scope">
          <el-button 
            type="text" 
            size="small" 
            @click="() => viewDetail(scope.row)"
          >
            详情
          </el-button>
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