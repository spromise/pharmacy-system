// src/utils/request.ts
import axios, { AxiosResponse, AxiosError } from 'axios';
import { ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: 'http://localhost:3000/api', // 后端实际端口和路径
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 可以在这里添加token等
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    ElMessage.error('请求失败');
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    
    // 统一判断业务状态码（假设后端约定 code=200 为成功）
    if (res.code !== 200) {
      // 使用 res.message 作为错误信息
      return Promise.reject(new Error(res.message || '服务器返回错误'));
    }
    return res;
  },
  (error: AxiosError) => {
    // 处理网络错误（如超时、断网等）
    return Promise.reject(new Error(
      error.response?.data?.message || 
      error.message || 
      '网络请求失败'
    ));
  }
);
export default service;