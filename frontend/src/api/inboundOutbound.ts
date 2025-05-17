// @/api/inboundOutbound.ts
import request from '@/utils/request';

// 定义出库参数类型
interface OutboundParams {
  drug_code: string;        // 药品本位码
  batch_number: string;     // 批次号
  quantity: number;         // 出库数量
  prescription_id?: number; // 处方ID（可选，处方出库时需要）
  outbound_type: 'prescription' | 'loss'; // 出库类型
  pharmacist_id: number;  // 药师ID
}

// 定义分页查询参数
interface PaginationParams {
  page: number;
  pageSize: number;
  keyword?: string; // 搜索关键词
}

// 定义入库记录类型（与数据库字段一致）
interface InboundRecord {
  inbound_id: number;      // 入库ID
  drug_code: string;       // 药品本位码
  batch_number: string;    // 批次号
  quantity: number;        // 入库数量
  inbound_time: string;    // 入库时间
  pharmacist_id: number;  // 药师ID
  drug?: {                  // 关联药品信息
    drug_code: string;
    generic_name: string;  // 药品通用名称
    brand_name: string | null; // 商品名
    dosage_form: string;   // 剂型
    specification: string | null; // 规格
    manufacturer: string | null; // 生产厂家
    unit_price: number | null; // 当前售价
  };
}

// 定义出库记录类型（与数据库字段一致）
interface OutboundRecord {
  outbound_id: number;     // 出库ID
  drug_code: string;       // 药品本位码
  batch_number: string;    // 批次号
  quantity: number;        // 出库数量
  prescription_id: number | null; // 处方ID
  outbound_type: 'prescription' | 'loss'; // 出库类型
  outbound_time: string;   // 出库时间
  drug: {                  // 关联药品信息
    drug_code: string;
    generic_name: string;  // 药品通用名称
    brand_name: string | null; // 商品名
    dosage_form: string;   // 剂型
    specification: string | null; // 规格
    manufacturer: string | null; // 生产厂家
    unit_price: number | null; // 当前售价
  };
}

// 定义检查药品存在性的响应
interface CheckDrugExistsResponse {
  exists: boolean;
  drug?: {
    drug_code: string;
    generic_name: string;
    dosage_form: string;
    specification?: string;
    manufacturer?: string;
    unit_price?: number;
  };
}

// 定义分页响应类型
interface PagedResponse<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

/**
 * 药品入库
 * @param data 入库参数
 */
export const inboundMedicine = (data: InboundParams) => {
  return request.post<{ message: string }>('/inbound', data);
};

/**
 * 药品出库
 * @param data 出库参数
 */
export const outboundMedicine = (data: OutboundParams) => {
  return request.post<{ message: string }>('/outbound', data);
};

/**
 * 获取入库记录列表
 * @param params 分页参数
 */
export const getInboundRecordList = (params: PaginationParams) => {
  return request.get<PagedResponse<InboundRecord>>('/inbound', { params });
};

/**
 * 获取出库记录列表
 * @param params 分页参数
 */
export const getOutboundRecordList = (params: PaginationParams) => {
  return request.get<PagedResponse<OutboundRecord>>('/outbound', { params });
};

/**
 * 检查药品是否存在
 * @param drug_code 药品本位码
 */
export const checkDrugExists = (drug_code: string) => {
  return request.get<CheckDrugExistsResponse>(`/medicines/${drug_code}`);
};

export const getPharmacistList = () => {
  return request.get<{ list: Pharmacist[] }>('/pharmacists');
};