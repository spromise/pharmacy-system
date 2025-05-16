<!-- src/views/ReportView.vue -->
<template>
  <div>
    <!-- 搜索框 -->
    <el-input v-model="searchKey" placeholder="请输入药品名称" clearable @keyup.enter="searchReport">
      <template #append>
        <el-button @click="searchReport">
          <el-icon><Search /></el-icon>搜索
        </el-button>
      </template>
    </el-input>
    <!-- 加载状态 -->
    <el-skeleton :loading="loading" animated>
      <!-- 表格 -->
      <el-table :data="filteredReport" stripe style="width: 100%">
        <el-table-column prop="name" label="药品名称" />
        <el-table-column prop="stock" label="库存数量" />
        <el-table-column prop="totalValue" label="总价值" />
      </el-table>
    </el-skeleton>
    <!-- 错误提示 -->
    <el-alert v-if="errorMsg" title="错误" type="error" :description="errorMsg" show-icon />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { Search } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const report = ref<any[]>([]);
const searchKey = ref('');
const loading = ref(false);
const errorMsg = ref('');

// // 过滤后的报表数据
// const filteredReport = computed(() => {
//   return report.value.filter(item =>
//     item.name.includes(searchKey.value)
//   );
// });

const fetchReport = async () => {
  loading.value = true;
  errorMsg.value = '';

  try {
    const response = await axios.get('/api/reports/inventory');
    report.value = response.data;
  } catch (error: any) {
    console.error('Error fetching report:', error);
    if (error.response) {
      errorMsg.value = `请求失败 (${error.response.status}): ${error.response.data.message || '服务器错误'}`;
    } else if (error.request) {
      errorMsg.value = '服务器未响应，请检查网络连接';
    } else {
      errorMsg.value = `请求错误: ${error.message}`;
    }
    ElMessage.error(errorMsg.value);
  } finally {
    loading.value = false;
  }
};

// 搜索报表
const searchReport = () => {
  // 可以在这里添加更多搜索逻辑，例如重新请求接口
  // 这里暂时使用本地过滤
};

onMounted(fetchReport);

function computed(arg0: () => any[]) {
  throw new Error('Function not implemented.');
}
</script>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>