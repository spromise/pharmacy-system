export const useMedicineStore = defineStore('medicine', {
  state: () => ({
    medicines: [],
    currentPage: 1
  }),
  actions: {
    async fetchMedicines() {
      const res = await getMedicines({ page: this.currentPage })
      this.medicines = res.data
    }
  }
})