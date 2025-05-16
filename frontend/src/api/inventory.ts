// pharmacy-system/frontend/src/api/inventory.ts
import request from '@/utils/request';

// 定义库存项类型
export interface InventoryItem {
  id: number;
  medicineId: number;
  medicineName: string;
  specification: string; // 规格
  batchNumber: string; // 批号
  productionDate: string; // 生产日期
  expirationDate: string; // 过期日期
  quantity: number; // 数量
  unit: string; // 单位
  location: string; // 存放位置
  supplier: string; // 供应商
  status: 'normal' | 'warning' | 'expired'; // 状态
  createTime: string;
  updateTime: string;
}

// 定义查询参数类型
export interface InventoryQueryParams {
  page: number;
  pageSize: number;
  keyword?: string;
  status?: 'normal' | 'warning' | 'expired';
  minExpirationDate?: string;
  maxExpirationDate?: string;
}

// 定义分页响应类型
export interface PagedResponse<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

// 获取库存列表
export const getInventoryList = async (params: InventoryQueryParams) => {
  return request.get<PagedResponse<InventoryItem>>('/inventory', { params });
};

// 创建库存记录
export const createInventory = async (data: Partial<InventoryItem>) => {
  return request.post('/inventory', data);
};

// 更新库存记录
export const updateInventory = async (id: number, data: Partial<InventoryItem>) => {
  return request.put(`/inventory/${id}`, data);
};

// 删除库存记录
export const deleteInventory = async (id: number) => {
  return request.delete(`/inventory/${id}`);
};

// 批量更新库存
export const batchUpdateInventory = async (data: { id: number; quantity: number }[]) => {
  return request.post('/inventory/batch-update', data);
};

// 获取库存预警列表
export const getInventoryWarningList = async (params: Omit<InventoryQueryParams, 'status'>) => {
  return request.get<PagedResponse<InventoryItem>>('/inventory/warning', { 
    params: { ...params, status: 'warning' } 
  });
};