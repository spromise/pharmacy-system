// src/main.ts
import { createApp } from 'vue';
import App from '@/App.vue';
import './style.css'
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';


const app = createApp(App);
const pinia = createPinia();

// 注册所有 ElementPlus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(ElementPlus);
app.use(pinia);
app.mount('#app');