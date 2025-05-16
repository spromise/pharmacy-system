// pharmacy-system/frontend/src/api/recordQuery.ts
import request from '@/utils/request';

export const getInboundRecords = (params: any) => {
  return request({
    url: '/api/inbound',
    method: 'get',
    params
  });
};

export const getOutboundRecords = (params: any) => {
  return request({
    url: '/api/outbound',
    method: 'get',
    params
  });
};

export const searchRecords = (params: any) => {
  return request({
    url: '/api/records/search',
    method: 'get',
    params
  });
};