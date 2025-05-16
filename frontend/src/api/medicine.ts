import request from '@/utils/request';

// 获取药品列表
export const getMedicineList = async (params: {
  page: number;
  pageSize: number;
  keyword?: string;
}) => {
  return request.get('/medicines', { params });
};

// 创建药品
export const createMedicine = async (data: any) => {
  return request.post('/medicines', data);
};

// 更新药品
export const updateMedicine = async (id: number, data: any) => {
  return request.put(`/medicines/${id}`, data);
};

// 删除药品
export const deleteMedicine = async (id: number) => {
  return request.delete(`/medicines/${id}`);
};

// 获取药品调价历史
export const getMedicinePriceHistory = async (medicineId: number) => {
  return request.get(`/medicines/${medicineId}/price-history`);
};