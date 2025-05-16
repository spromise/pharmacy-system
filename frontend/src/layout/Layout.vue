<!-- pharmacy-system/frontend/src/layout/Layout.vue -->
<template>
  <div class="app-container">
    <!-- 顶部导航栏 -->
    <el-header>
      <div class="header-container">
        <div class="logo">药房管理系统</div>
        <div class="user-info">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <i class="fa fa-user-circle"></i> 管理员 <i class="fa fa-caret-down"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    
    <!-- 主体内容 -->
    <div class="main-container">
      <!-- 侧边栏导航 -->
      <el-aside width="200px">
        <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-menu-item index="/">
            <i class="fa fa-tachometer"></i>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/medicines">
            <i class="fa fa-pills"></i>
            <span>药品管理</span>
          </el-menu-item>
          <el-menu-item index="/inventory">
            <i class="fa fa-warehouse"></i>
            <span>库存管理</span>
          </el-menu-item>
          <el-menu-item index="/inbound-outbound">
            <i class="fa fa-exchange-alt"></i>
            <span>出入库管理</span>
          </el-menu-item>
          <el-menu-item index="/prescriptions">
            <i class="fa fa-file-medical"></i>
            <span>处方管理</span>
          </el-menu-item>
          <el-menu-item index="/reports">
            <i class="fa fa-chart-bar"></i>
            <span>统计报表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      
      <!-- 内容区域 -->
      <el-main>
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const activeMenu = ref(route.path);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.user-info {
  cursor: pointer;
}

.main-container {
  flex: 1;
  display: flex;
  overflow: hidden;
}
</style>