// pharmacy-system/frontend/src/stores/outbound.ts
import { defineStore } from 'pinia';
import { getOutboundRecords, createOutboundRecord } from '@/api/outbound';
import { ElMessage } from 'element-plus';

export const useOutboundStore = defineStore('outbound', {
  state: () => ({
    outboundList: [] as any[],
    currentPage: 1,
    pageSize: 10,
    total: 0,
    loading: false,
    errorMsg: ''
  }),
  actions: {
    async fetchOutboundList() {
      this.loading = true;
      this.errorMsg = '';
      try {
        const response = await getOutboundRecords({
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
    async createOutbound(data: any) {
      try {
        await createOutboundRecord(data);
        ElMessage.success('出库记录创建成功');
        this.fetchOutboundList();
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    },
    setPageParams(page: number, pageSize: number) {
      this.currentPage = page;
      this.pageSize = pageSize;
      this.fetchOutboundList();
    }
  }
});