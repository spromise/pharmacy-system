import { defineStore } from 'pinia'
import { getMedicines } from '@/api/medicine'

export const useMedicineStore = defineStore('medicine', {
  state: () => ({ medicines: [] }),
  actions: {
    async loadMedicines() {
      this.medicines = await getMedicines()
    }
  }
})