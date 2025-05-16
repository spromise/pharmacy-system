<template>
  <div>
    <el-card class="box-card">
      <template #header><span>出入库记录查询</span></template>
      <el-tabs v-model="activeTab" type="card">
        <el-tab-pane label="入库记录" name="inbound">
          <el-table :data="store.inboundList" stripe style="width: 100%">
            <!-- 列定义保持不变 -->
            <el-table-column prop="id" label="入库ID" />
            <el-table-column prop="medicineName" label="药品名称" />
            <el-table-column prop="standardCode" label="药品本位码" />
            <el-table-column prop="batchNumber" label="批次号" />
            <el-table-column prop="quantity" label="入库数量" />
            <el-table-column prop="createTime" label="入库时间" />
          </el-table>
          <!-- 入库分页 -->
          <el-pagination
            :current-page="store.currentPage"
            :page-size="store.pageSize"
            :total="store.total"
            @size-change="handlePageSizeChange"
            @current-change="handleInboundPageChange"
          />
        </el-tab-pane>

        <el-tab-pane label="出库记录" name="outbound">
          <el-table :data="store.outboundList" stripe style="width: 100%">
            <!-- 列定义保持不变 -->
            <el-table-column prop="id" label="出库ID" />
            <el-table-column prop="medicineName" label="药品名称" />
            <el-table-column prop="standardCode" label="药品本位码" />
            <el-table-column prop="batchNumber" label="批次号" />
            <el-table-column prop="quantity" label="出库数量" />
            <el-table-column prop="outboundType" label="出库类型">
              <template #default="scope">
                {{ scope.row.outboundType === 'prescription' ? '处方自动出库' : '手动损耗出库' }}
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="出库时间" />
          </el-table>
          <!-- 出库分页（复用同一分页参数） -->
          <el-pagination
            :current-page="store.currentPage"
            :page-size="store.pageSize"
            :total="store.total"
            @size-change="handlePageSizeChange"
            @current-change="handleOutboundPageChange"
          />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRecordQueryStore } from '@/stores/recordQuery';

// 关联 Pinia Store
const store = useRecordQueryStore();
const activeTab = ref('inbound'); // 标签页状态（可根据需求保留或移除）

// 分页事件处理
const handlePageSizeChange = (size: number) => {
  store.setPageParams(1, size); // 切换页大小后重置为第1页
};

const handleInboundPageChange = (page: number) => {
  store.setPageParams(page, store.pageSize); // 入库分页变更
};

const handleOutboundPageChange = (page: number) => {
  store.setPageParams(page, store.pageSize); // 出库分页变更（复用同一页码）
};


// 初始化加载数据
onMounted(() => {
  store.fetchInboundRecords();
  store.fetchOutboundRecords();
});
</script>