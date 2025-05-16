// pharmacy-system/frontend/src/stores/prescription.ts
import { defineStore } from 'pinia';
import { 
  getPrescriptionList, 
  createPrescription, 
  updatePrescription, 
  deletePrescription,
  Prescription,
  PagedResponse 
} from '@/api/prescription';
import { ElMessage } from 'element-plus';

export const usePrescriptionStore = defineStore('prescription', {
  state: () => ({
    prescriptionList: [] as Prescription[], // 使用明确的类型
    currentPage: 1,
    pageSize: 10,
    total: 0,
    loading: false,
    errorMsg: ''
  }),
  actions: {
    async fetchPrescriptionList(keyword?: string, status?: string) {
      this.loading = true;
      this.errorMsg = '';
      try {
        // 传递分页参数和搜索关键词
        const allowedStatus = ['draft', 'issued', 'completed', 'cancelled'] as const;
        const safeStatus = allowedStatus.includes(status as any) ? status as typeof allowedStatus[number] : undefined;
        const response = await getPrescriptionList({
          page: this.currentPage,
          pageSize: this.pageSize,
          keyword,
          status: safeStatus
        });
        
        // 处理分页数据结构
        this.prescriptionList = response.data.list;
        this.total = response.data.total;
      } catch (error: any) {
        this.errorMsg = error.message;
        ElMessage.error(this.errorMsg);
      } finally {
        this.loading = false;
      }
    },
    
    // 更新分页参数并重新加载数据
    setPageParams(page: number, pageSize: number) {
      this.currentPage = page;
      this.pageSize = pageSize;
      this.fetchPrescriptionList();
    },
    
    // 刷新当前页数据
    refresh() {
      this.fetchPrescriptionList();
    },
    
    // 搜索功能
    search(keyword: string, status?: string) {
      this.currentPage = 1; // 重置为第一页
      this.fetchPrescriptionList(keyword, status);
    },
    
    // 创建处方
    async createNewPrescription(data: Omit<Prescription, 'id'>) {
      try {
        await createPrescription(data);
        ElMessage.success('处方创建成功');
        this.fetchPrescriptionList();
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    },
    
    // 更新处方
    async updateExistingPrescription(id: number, data: Partial<Prescription>) {
      try {
        await updatePrescription(id, data);
        ElMessage.success('处方更新成功');
        this.fetchPrescriptionList();
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    },
    
    // 删除处方
    async deleteSelectedPrescription(id: number) {
      try {
        await deletePrescription(id);
        ElMessage.success('处方删除成功');
        this.fetchPrescriptionList();
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    }
  }
});