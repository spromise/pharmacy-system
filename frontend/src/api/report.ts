// pharmacy-system/frontend/src/api/report.ts
import request from '@/utils/request';

// 定义报表类型枚举
export enum ReportType {
  DAILY_SALES = 'daily-sales',
  SLOW_MOVING = 'slow-moving-medicines',
  INVENTORY_TURNOVER = 'inventory-turnover',
  EXPIRY_WARNING = 'expiry-warning'
}

// 定义报表查询参数类型
export interface ReportParams {
  type: ReportType; // 报表类型
  startTime?: string; // 开始日期
  endTime?: string; // 结束日期
  page?: number; // 页码
  pageSize?: number; // 每页数量
  [key: string]: any; // 其他可选参数
}

// 获取当日销售汇总报表
export const getDailySalesReport = async (params?: Omit<ReportParams, 'type'>) => {
  return request.get('/reports/daily-sales', { params });
};

// 获取滞销药品分析报表
export const getSlowMovingMedicinesReport = async (params?: Omit<ReportParams, 'type'>) => {
  return request.get('/reports/slow-moving-medicines', { params });
};

// 获取库存周转率报表
export const getInventoryTurnoverReport = async (params?: Omit<ReportParams, 'type'>) => {
  return request.get('/reports/inventory-turnover', { params });
};

// 获取效期预警报表
export const getExpiryWarningReport = async (params?: Omit<ReportParams, 'type'>) => {
  return request.get('/reports/expiry-warning', { params });
};

// 通用报表数据获取
export const getReportData = async (params: ReportParams) => {
  return request.get(`/reports/${params.type}`, { params });
};