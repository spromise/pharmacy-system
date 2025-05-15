<!-- src/views/ReportView.vue -->
<template>
  <div>
    <h1>业务相关数据查询报表</h1>
    <table>
      <thead>
        <tr>
          <th>药品名称</th>
          <th>库存数量</th>
          <th>总价值</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in report" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.totalValue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const report = ref<any[]>([]);

const fetchReport = async () => {
  try {
    const response = await axios.get('/api/reports/inventory');
    report.value = response.data;
  } catch (error) {
    console.error('Error fetching report:', error);
  }
};

onMounted(fetchReport);
</script>