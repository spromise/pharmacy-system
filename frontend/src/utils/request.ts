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
    // 假设只要响应状态码是 200 就认为请求成功
    if (response.status === 200) {
      return res;
    }
    // 若状态码不是 200，则抛出错误
    return Promise.reject(new Error('服务器返回错误'));
  },
  (error: AxiosError) => {
    // 处理网络错误（如超时、断网等）
    return Promise.reject(new Error(
      (error.response?.data as { message?: string })?.message || 
      error.message || 
      '网络请求失败'
    ));
  }
);
export default service;