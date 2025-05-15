<script setup lang="ts">
import { ref } from 'vue'
import { useMedicineStore } from '@/stores/medicine'

const store = useMedicineStore()
const searchKeyword = ref('')

const loadData = async () => {
  await store.fetchMedicines({
    page: 1,
    pageSize: 10,
    keyword: searchKeyword.value
  })
}
</script>

<template>
  <el-input v-model="searchKeyword" placeholder="搜索药品..." />
  <el-table :data="store.medicines">
    <el-table-column prop="name" label="药品名称" />
    <el-table-column prop="spec" label="规格" />
    <el-table-column prop="inventory" label="库存" />
  </el-table>
</template>