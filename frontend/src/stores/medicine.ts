// pharmacy-system/frontend/src/stores/medicine.ts
import { defineStore } from 'pinia';
import { getMedicineList, createMedicine, updateMedicine, deleteMedicine } from '@/api/medicine';
import { ElMessage } from 'element-plus';

export const useMedicineStore = defineStore('medicine', {
  state: () => ({
    medicines: [] as any[],
    currentPage: 1,
    pageSize: 10,
    total: 0,
    searchKey: '',
    loading: false,
    errorMsg: ''
  }),
  actions: {
    async fetchMedicines() {
      this.loading = true;
      this.errorMsg = '';
      try {
        const response = await getMedicineList({
          page: this.currentPage,
          pageSize: this.pageSize,
          keyword: this.searchKey
        });
        this.medicines = response.data.data;
        this.total = response.data.total;
      } catch (error: any) {
        this.errorMsg = error.message;
        ElMessage.error(this.errorMsg);
      } finally {
        this.loading = false;
      }
    },
    async createNewMedicine(data: any) {
      try {
        await createMedicine(data);
        ElMessage.success('药品创建成功');
        this.fetchMedicines();
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    },
    async updateExistingMedicine(id: number, data: any) {
      try {
        await updateMedicine(id, data);
        ElMessage.success('药品更新成功');
        this.fetchMedicines();
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    },
    async deleteExistingMedicine(id: number) {
      try {
        await deleteMedicine(id);
        ElMessage.success('药品删除成功');
        this.fetchMedicines();
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    },
    searchMedicines() {
      this.currentPage = 1;
      this.fetchMedicines();
    },
    handleSizeChange(newSize: number) {
      this.pageSize = newSize;
      this.fetchMedicines();
    },
    handleCurrentChange(newPage: number) {
      this.currentPage = newPage;
      this.fetchMedicines();
    }
  }
});