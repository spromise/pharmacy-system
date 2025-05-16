import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/MedicineView.vue'),
        meta: { title: '首页', icon: 'fa-tachometer' }
      },
      {
        path: 'medicines',
        name: 'Medicines',
        component: () => import('@/views/MedicineView.vue'),
        meta: { title: '药品管理', icon: 'fa-pills' }
      },
      {
        path: 'inventory',
        name: 'Inventory',
        component: () => import('@/views/InventoryView.vue'),
        meta: { title: '库存管理', icon: 'fa-warehouse' }
      },
      {
        path: 'inbound-outbound',
        name: 'InboundOutbound',
        component: () => import('@/views/InboundOutboundView.vue'),
        meta: { title: '出入库管理', icon: 'fa-exchange-alt' }
      },
      {
        path: 'prescriptions',
        name: 'Prescriptions',
        component: () => import('@/views/PrescriptionView.vue'),
        meta: { title: '处方管理', icon: 'fa-file-medical' }
      },
      {
        path: 'reports',
        name: 'Reports',
        component: () => import('@/views/ReportView.vue'),
        meta: { title: '统计报表', icon: 'fa-chart-bar' }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由守卫（如果不需要权限控制可以移除）
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} - 药房管理系统` : '药房管理系统';
  next();
});

export default router;