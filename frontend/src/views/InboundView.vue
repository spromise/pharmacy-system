<!-- src/views/InboundView.vue -->
<template>
  <div>
    <h1>药品入库管理</h1>
    <form @submit.prevent="inboundMedicine">
      <input v-model="medicineId" type="number" placeholder="药品 ID" />
      <input v-model="quantity" type="number" placeholder="入库数量" />
      <button type="submit">入库</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const medicineId = ref(0);
const quantity = ref(0);

const inboundMedicine = async () => {
  try {
    const response = await axios.post('/api/inbound', {
      medicineId: parseInt(medicineId.value),
      quantity: parseInt(quantity.value),
    });
    console.log('Inbound record created:', response.data);
  } catch (error) {
    console.error('Error creating inbound record:', error);
  }
};
</script>