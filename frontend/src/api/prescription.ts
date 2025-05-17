// src/api/prescription.ts
import request from '@/utils/request';

// 获取所有患者
export const getPatients = () => {
  return request({
    url: '/patients',
    method: 'get'
  });
};

// 根据患者ID获取处方
export const getPrescriptionsByPatient = (visitId: string) => {
  return request({
    url: `/prescriptions/patient/${visitId}`,
    method: 'get'
  });
};

// 更新取药状态
export const updatePickupStatusApi = (prescriptionId: number, drugCode: string, status: string) => {
  return request({
    url: `/prescription-details/${prescriptionId}/${drugCode}/status`,
    method: 'put',
    data: { pickupStatus: status }
  });
};