// pharmacy-system/frontend/src/api/prescription.ts
import request from '@/utils/request';

// 定义处方类型
export interface Prescription {
  id: number;
  patientId: number;
  patientName: string;
  doctorId: number;
  doctorName: string;
  visitDate: string;
  diagnosis: string;
  status: 'draft' | 'issued' | 'completed' | 'cancelled';
  createTime: string;
  updateTime: string;
}

// 定义处方明细类型
export interface PrescriptionDetail {
  id: number;
  prescriptionId: number;
  medicineId: number;
  medicineName: string;
  specification: string;
  quantity: number;
  usage: string; // 用法
  dosage: string; // 剂量
  frequency: string; // 频次
}

// 定义查询参数类型
export interface PrescriptionQueryParams {
  page: number;
  pageSize: number;
  keyword?: string;
  status?: 'draft' | 'issued' | 'completed' | 'cancelled';
  startTime?: string;
  endTime?: string;
}

// 定义分页响应类型
export interface PagedResponse<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

// 获取处方列表
export const getPrescriptionList = async (params: PrescriptionQueryParams) => {
  return request.get<PagedResponse<Prescription>>('/prescriptions', { params });
};

// 创建处方
export const createPrescription = async (data: Omit<Prescription, 'id'>) => {
  return request.post('/prescriptions', data);
};

// 更新处方
export const updatePrescription = async (id: number, data: Partial<Prescription>) => {
  return request.put(`/prescriptions/${id}`, data);
};

// 删除处方
export const deletePrescription = async (id: number) => {
  return request.delete(`/prescriptions/${id}`);
};

// 获取处方明细列表
export const getPrescriptionDetailList = async (prescriptionId: number) => {
  return request.get<PrescriptionDetail[]>(`/prescriptions/${prescriptionId}/details`);
};

// 批量创建处方明细
export const batchCreatePrescriptionDetails = async (
  prescriptionId: number, 
  details: Omit<PrescriptionDetail, 'id' | 'prescriptionId'>[]
) => {
  return request.post(`/prescriptions/${prescriptionId}/details/batch`, details);
};

// 提交处方（状态从 draft 变为 issued）
export const submitPrescription = async (id: number) => {
  return request.post(`/prescriptions/${id}/submit`);
};

// 完成处方
export const completePrescription = async (id: number) => {
  return request.post(`/prescriptions/${id}/complete`);
};

// 取消处方
export const cancelPrescription = async (id: number) => {
  return request.post(`/prescriptions/${id}/cancel`);
};

export const updatePrescriptionStatus = (id: number, status: string) => {
  return request({
    url: `/prescriptions/${id}/status`,
    method: 'put',
    data: { status }
  });
};

export const createOutboundRecordFromPrescription = (prescriptionId: number) => {
  // 假设该接口根据处方明细自动生成出库记录
  return request({
    url: `/prescriptions/${prescriptionId}/generate-outbound`,
    method: 'post'
  });
};