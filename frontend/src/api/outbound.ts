// pharmacy-system/frontend/src/api/outbound.ts
import request from '@/utils/request';

export const getOutboundRecords = (params: any) => {
  return request({
    url: '/api/outbound',
    method: 'get',
    params
  });
};

export const createOutboundRecord = (data: any) => {
  return request({
    url: '/api/outbound',
    method: 'post',
    data
  });
};