import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Layout.vue';
import { 
  FirstAidKit, 
  Van, 
  Memo, 
  Document, 
  Histogram,
  House,
  Download,
  Upload
} from '@element-plus/icons-vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/medicine',
    component: Layout,
    children: [
      {
        path: 'medicine',
        name: 'Medicines',
        component: () => import('@/views/MedicineView.vue'),
        meta: { title: '药品管理', icon: FirstAidKit }
      },
      // 库存管理模块（新增一级菜单）
      {
        path: 'inventory',
        name: 'InventoryManagement',
        redirect: '/inventory/query',
        meta: { title: '库存管理', icon: House },
        children: [
          {
            path: 'query',
            name: 'InventoryQuery',
            component: () => import('@/views/InventoryView.vue'),
            meta: { title: '库存查询', icon: Van }
          },
          {
            path: 'inbound',
            name: 'InventoryInbound',
            component: () => import('@/views/InboundView.vue'),
            meta: { title: '入库', icon: Download }
          },
          {
            path: 'outbound',
            name: 'InventoryOutbound',
            component: () => import('@/views/OutboundView.vue'),
            meta: { title: '出库', icon: Upload }
          },
          {
            path: 'records',
            name: 'InventoryRecords',
            component: () => import('@/views/RecordQueryView.vue'),
            meta: { title: '记录查询', icon: Memo }
          }
        ]
      },
      {
        path: 'prescriptions',
        name: 'Prescriptions',
        component: () => import('@/views/PrescriptionView.vue'),
        meta: { title: '处方管理', icon: Document }
      },
      {
        path: 'reports',
        name: 'Reports',
        component: () => import('@/views/ReportView.vue'),
        meta: { title: '统计报表', icon: Histogram }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;