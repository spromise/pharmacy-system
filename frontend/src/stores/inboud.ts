// pharmacy-system/frontend/src/stores/inbound.ts
import { defineStore } from 'pinia';
import { getInboundRecords, createInboundRecord } from '@/api/inbound';
import { ElMessage } from 'element-plus';

export const useInboundStore = defineStore('inbound', {
  state: () => ({
    inboundList: [] as any[],
    currentPage: 1,
    pageSize: 10,
    total: 0,
    loading: false,
    errorMsg: ''
  }),
  actions: {
    async fetchInboundList() {
      this.loading = true;
      this.errorMsg = '';
      try {
        const response = await getInboundRecords({
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
    async createInbound(data: any) {
      try {
        await createInboundRecord(data);
        ElMessage.success('入库记录创建成功');
        this.fetchInboundList();
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    },
    setPageParams(page: number, pageSize: number) {
      this.currentPage = page;
      this.pageSize = pageSize;
      this.fetchInboundList();
    }
  }
});