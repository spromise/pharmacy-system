<template>
  <el-container style="height: 100vh; overflow: hidden">
    <!-- 侧边栏导航 -->
    <el-aside width="200px" class="sidebar">
      <div class="sidebar-header">
        <el-icon size="20"><User /></el-icon>
        <div class="admin-info">
          <div class="admin-content">
            <span class="admin-name">药房医生</span>
          </div>
        </div>
      </div>
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical"
        router
        background-color="#e4f0fa"
        text-color="#303133"
        active-text-color="#409eff"
      >
        <!-- 遍历一级路由 -->
        <template v-for="route in $router.options.routes[0].children" :key="route.name">
          <!-- 有子路由的使用el-sub-menu -->
          <el-sub-menu v-if="route.children" :index="route.name">
            <template #title>
              <el-icon><component :is="route.meta?.icon" /></el-icon>
              <span>{{ route.meta?.title }}</span>
            </template>
            <!-- 遍历子路由 -->
            <template v-for="child in route.children" :key="child.name">
              <el-menu-item 
                :index="child.path.startsWith('/') ? child.path : `/${route.path}/${child.path}`"
              >
                <el-icon><component :is="child.meta?.icon" /></el-icon>
                <span>{{ child.meta?.title }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
          
          <!-- 无子路由的使用el-menu-item -->
          <el-menu-item v-else :index="route.path.startsWith('/') ? route.path : `/${route.path}`">
            <el-icon><component :is="route.meta?.icon" /></el-icon>
            <span>{{ route.meta?.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>

    <!-- 主内容区 -->
    <el-container>
      <el-header class="header">
        <div class="header-title">药房管理系统</div>
        <div class="header-actions">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-icon><Bell /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>系统通知</el-dropdown-item>
                <el-dropdown-item>药品预警</el-dropdown-item>
                <el-dropdown-item divided>查看全部</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 动态计算当前激活的菜单项
const activeMenu = computed(() => {
  // 处理一级菜单选中状态
  if (route.path.startsWith('/inventory')) {
    return 'InventoryManagement';
  }
  return route.path;
});

// 获取当前页面标题
const getCurrentPageTitle = computed(() => {
  const matchedRoute = route.matched.find(r => r.meta.title);
  return matchedRoute?.meta.title || '未知页面';
});

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped>
/* 侧边栏样式 */
.sidebar {
  background-color: #e4f0fa;
  border-right: 1px solid #dcdfe6;
}

.sidebar-header {
  padding: 20px;
  background-color: #409eff;
  color: white;
  display: flex;
  align-items: center;
}

/* 头部样式 */
.header {
  background-color: #ffffff;
  color: #303133;
  line-height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdfe6;
}

.header-title {
  font-size: 18px;
  font-weight: 500;
  color: #409eff;
}

.header-actions {
  display: flex;
  align-items: center;
}

.header-actions .el-dropdown {
  margin-right: 20px;
}

.badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #ff4d4f;
  color: white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 10px;
}

/* 主内容区样式 */
.main-content {
  background-color: #f5f7fa;
  padding: 20px;
  overflow-y: auto;
}

.page-header {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dcdfe6;
}

.page-header h1 {
  font-size: 24px;
  font-weight: 400;
  color: #303133;
  margin: 0;
}

/* 为侧边栏图标添加间距 */
.el-menu-item .el-icon {
  margin-right: 8px;
  width: 20px;
  text-align: center;
}

/* 调整 ElementPlus 菜单样式 */
.el-menu-vertical {
  border-right: none;
}

.el-menu-item.is-active {
  background-color: #ffffff !important;
  border-right: 3px solid #409eff;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>