import { defineStore } from 'pinia'
import type { Medicine } from '@/types/medicine'

export const useMedicineStore = defineStore('medicine', {
  state: () => ({
    medicines: [] as Medicine[],
    currentPage: 1
  })
})