// pharmacy-system/frontend/src/stores/inboundOutbound.ts
import { defineStore } from 'pinia';
import { getInboundOutboundRecords, createInboundOutboundRecord } from '@/api/inboundOutbound';
import { ElMessage } from 'element-plus';

export const useInboundOutboundStore = defineStore('inboundOutbound', {
  state: () => ({
    inboundOutboundList: [] as any[],
    currentPage: 1,
    pageSize: 10,
    total: 0,
    loading: false,
    errorMsg: ''
  }),
  actions: {
    async fetchInboundOutboundList() {
      this.loading = true;
      this.errorMsg = '';
      try {
        // 修正：使用正确的函数名并传递分页参数
        const response = await getInboundOutboundRecords({
          page: this.currentPage,
          pageSize: this.pageSize
        });
        
        // 修正：处理分页数据结构
        this.inboundOutboundList = response.data.list;
        this.total = response.data.total;
      } catch (error: any) {
        this.errorMsg = error.message;
        ElMessage.error(this.errorMsg);
      } finally {
        this.loading = false;
      }
    },
    async createNewInboundOutboundRecord(data: any) {
      try {
        await createInboundOutboundRecord(data);
        ElMessage.success('出入库记录创建成功');
        this.fetchInboundOutboundList();
      } catch (error: any) {
        ElMessage.error(error.message);
      }
    },
    
    // 新增：更新分页参数并重新加载数据
    setPageParams(page: number, pageSize: number) {
      this.currentPage = page;
      this.pageSize = pageSize;
      this.fetchInboundOutboundList();
    }
  }
});