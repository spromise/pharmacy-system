// @/api/inventoryCheck.ts
import request from '@/utils/request';

// 定义盘点记录类型（与数据库字段保持一致）
interface InventoryCheckRecord {
  check_id: number;           // 盘点记录ID
  drug_code: string;          // 药品本位码
  physical_quantity: number;  // 实际盘点数量
  system_quantity: number;    // 系统记录数量
  discrepancy_reason: string | null; // 差异原因
  check_time: string;         // 盘点时间
  operator_id: number | null; // 操作员ID
}

// 定义库存项类型（与数据库字段保持一致）
interface InventoryItem {
  inventory_id: number;       // 库存ID
  drug_code: string;          // 药品本位码
  batch_number: string;       // 批次号
  stock_quantity: number;     // 当前库存量
  expiration_date: string;    // 有效期
  alert_threshold: number;    // 库存预警阈值
  last_inbound_time: string | null; // 最后入库时间
  last_outbound_time: string | null; // 最后出库时间
  // 关联药品信息
  drug: {
    drug_code: string;
    generic_name: string;     // 药品通用名称
    brand_name: string | null; // 商品名
    dosage_form: string;      // 剂型
    specification: string | null; // 规格
    manufacturer: string | null; // 生产厂家
    unit_price: number | null; // 当前售价
  };
}

// 定义查询参数类型
interface QueryParams {
  page: number;
  pageSize: number;
  keyword?: string;
}

// 定义分页响应类型
interface PagedResponse<T> {
  list: T[];
  total: number;
  page: number;
  pageSize: number;
}

// 获取盘点记录列表
export const getInventoryCheckRecords = async (params: QueryParams) => {
  return request.get<PagedResponse<InventoryCheckRecord>>('/inventory-check/records', { params });
};

// 获取库存列表
export const getInventoryList = async (params: QueryParams) => {
  return request.get<PagedResponse<InventoryItem>>('/inventory', { params });
};

// 提交库存盘点结果
export const createInventoryCheck = async (data: {
  drug_code: string;
  physical_quantity: number;
  system_quantity: number;
  discrepancy_reason: string | null;
  check_time: string;
  operator_id: number | null;
}[]) => {
  return request.post('/inventory-check', data);
};

export const getPharmacistList = () => {
  return request.get<{ list: Pharmacist[] }>('/pharmacists');
};