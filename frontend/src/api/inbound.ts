// pharmacy-system/frontend/src/api/inbound.ts
import request from '@/utils/request';

export const getInboundRecords = (params: any) => {
  return request({
    url: '/api/inbound',
    method: 'get',
    params
  });
};

export const createInboundRecord = (data: any) => {
  return request({
    url: '/api/inbound',
    method: 'post',
    data
  });
};