// @/api/inboundOutbound.ts
import request from '@/utils/request';

// 定义类型
interface QueryParams {
  page: number;
  pageSize: number;
  keyword?: string;
}

interface RecordItem {
  id: number;
  medicineId: number;
  medicineName: string;
  quantity: number;
  type: 'inbound' | 'outbound';
  operator: string;
  createTime: string;
}

interface PagedResponse<T> {
  list: T[];
  total: number;
}

// 药品入库
export const inboundMedicine = async (data: any) => {
  return request.post('/inbound', data);
};

// 药品出库
export const outboundMedicine = async (data: any) => {
  return request.post('/outbound', data);
};

// 获取入库记录列表
export const getInboundRecordList = async (params: QueryParams) => {
  return request.get<PagedResponse<RecordItem>>('/inbound-records', { params });
};

// 获取出库记录列表
export const getOutboundRecordList = async (params: QueryParams) => {
  return request.get<PagedResponse<RecordItem>>('/outbound-records', { params });
};

// 获取所有出入库记录（合并）
export const getInboundOutboundRecords = async (params: QueryParams) => {
  return request.get<PagedResponse<RecordItem>>('/inbound-outbound-records', { params });
};

// 创建出入库记录
export const createInboundOutboundRecord = async (data: any) => {
  return request.post('/inbound-outbound-records', data);
};

export const createOutboundRecord = (data: {
  standardCode: string;
  batchNumber: string;
  quantity: number;
  outboundType: 'prescription' | 'loss';
  prescriptionId?: number; // 仅处方出库需要
}) => {
  return request({
    url: '/outbound-records',
    method: 'post',
    data
  });
};