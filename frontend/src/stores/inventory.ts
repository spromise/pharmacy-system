// pharmacy-system/frontend/src/stores/inventory.ts
import { defineStore } from 'pinia';
import { getInventoryList, InventoryItem, PagedResponse } from '@/api/inventory';
import { ElMessage } from 'element-plus';

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    inventoryList: [] as InventoryItem[], // 使用明确的类型
    currentPage: 1,
    pageSize: 10,
    total: 0,
    loading: false,
    errorMsg: ''
  }),
  actions: {
    async fetchInventoryList(keyword?: string) {
      this.loading = true;
      this.errorMsg = '';
      try {
        // 传递分页参数和搜索关键词
        const response = await getInventoryList({
          page: this.currentPage,
          pageSize: this.pageSize,
          keyword
        });
        
        // 处理分页数据结构
        this.inventoryList = response.data.list;
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
      this.fetchInventoryList();
    },
    
    // 刷新当前页数据
    refresh() {
      this.fetchInventoryList();
    },
    
    // 搜索功能
    search(keyword: string) {
      this.currentPage = 1; // 重置为第一页
      this.fetchInventoryList(keyword);
    }
  }
});