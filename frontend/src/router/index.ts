// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import InventoryView from '../views/InventoryView.vue';
import MedicineView from '../views/MedicineView.vue';
import InboundView from '../views/InboundView.vue';
import ReportView from '../views/ReportView.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/inventory',
    name: 'Inventory',
    component: InventoryView
  },
  {
    path: '/medicine',
    name: 'Medicine',
    component: MedicineView
  },
  {
    path: '/inbound',
    name: 'Inbound',
    component: InboundView
  },
  {
    path: '/report',
    name: 'Report',
    component: ReportView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/inventory'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;