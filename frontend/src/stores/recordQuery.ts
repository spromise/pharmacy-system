// pharmacy-system/frontend/src/stores/recordQuery.ts
import { defineStore } from 'pinia';
import { 
  getInboundRecords, 
  getOutboundRecords, 
  searchRecords 
} from '@/api/recordQuery';
import { ElMessage } from 'element-plus';

export const useRecordQueryStore = defineStore('recordQuery', {
  state: () => ({
    inboundList: [] as any[],
    outboundList: [] as any[],
    currentPage: 1,
    pageSize: 10,
    total: 0,
    searchParams: {} as any,
    loading: false,
    errorMsg: ''
  }),
  actions: {
    async fetchInboundRecords() {
      this.loading = true;
      this.errorMsg = '';
      try {
        const response = await getInboundRecords({
          ...this.searchParams,
          page: this.currentPage,
          pageSize: this.pageSize
        });
        this.inboundList = response.data.list;
        this.total = response.data.total;
      } catch (error: any) {
        this.errorMsg = error.message;
        ElMessage.error(this.errorMsg);
      } finally {
        this.loading = false;
      }
    },
    async fetchOutboundRecords() {
      this.loading = true;
      this.errorMsg = '';
      try {
        const response = await getOutboundRecords({
          ...this.searchParams,
          page: this.currentPage,
          pageSize: this.pageSize
        });
        this.outboundList = response.data.list;
        this.total = response.data.total;
      } catch (error: any) {
        this.errorMsg = error.message;
        ElMessage.error(this.errorMsg);
      } finally {
        this.loading = false;
      }
    },
    async searchRecords(params: any) {
      this.searchParams = params;
      this.currentPage = 1;
      await Promise.all([
        this.fetchInboundRecords(),
        this.fetchOutboundRecords()
      ]);
    },
    setPageParams(page: number, pageSize: number) {
      this.currentPage = page;
      this.pageSize = pageSize;
      this.searchRecords(this.searchParams);
    }
  }
});