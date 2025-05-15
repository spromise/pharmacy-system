// src/utils/request.ts
import axios from 'axios';
import { ElMessage } from 'element-plus';

const service = axios.create({
  baseURL: '/api', // 后端API基础路径
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
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      ElMessage.error(res.message || '操作失败');
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    console.error('Response error:', error);
    ElMessage.error(error.message || '响应错误');
    return Promise.reject(error);
  }
);

export default service;