// pharmacy-system/frontend/src/stores/report.ts
import { defineStore } from 'pinia';
import { getReportData } from '@/api/report'; // 假设存在该接口
import { ElMessage } from 'element-plus';

export const useReportStore = defineStore('report', {
  state: () => ({
    reportData: [] as any[],
    loading: false,
    errorMsg: '',
    currentPage: 1,
    pageSize: 10
  }),
  actions: {
    async fetchReportData(params?: any) {
      this.loading = true;
      this.errorMsg = '';
      try {
        const response = await getReportData(
          params ?? { page: this.currentPage, pageSize: this.pageSize }
        );
        this.reportData = response.data?.list ?? response;
      } catch (error: any) {
        this.errorMsg = error.message;
        ElMessage.error(this.errorMsg);
      } finally {
        this.loading = false;
      }
    },
    setPageParams(page: number, pageSize: number) {
      this.currentPage = page;
      this.pageSize = pageSize;
      this.fetchReportData();
    }
  }
});