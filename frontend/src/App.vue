<!-- src/App.vue -->
<template>
  <el-container style="height: 100vh; overflow: hidden">
    <!-- 侧边栏导航 -->
    <el-aside width="200px">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><House /></el-icon>
            <span>库存管理</span>
          </template>
          <el-menu-item index="/inventory">库存查询</el-menu-item>
          <el-menu-item index="/check">盘点管理</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="2">
          <template #title>
            <el-icon><FirstAidKit /></el-icon>
            <span>药品管理</span>
          </template>
          <el-menu-item index="/medicine">药品信息</el-menu-item>
          <el-menu-item index="/price">药品调价</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="3">
          <template #title>
            <el-icon><van /></el-icon>
            <span>出入库管理</span>
          </template>
          <el-menu-item index="/inbound">药品入库</el-menu-item>
          <el-menu-item index="/outbound">药品出库</el-menu-item>
        </el-sub-menu>
        
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>报表模块</span>
          </template>
          <el-menu-item index="/report">业务报表</el-menu-item>
          <el-menu-item index="/summary">数据总结</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    
    <!-- 主内容区 -->
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <span class="el-dropdown-link">
            管理员 <el-icon><Avatar /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Document, Avatar } from '@element-plus/icons-vue';


const activeMenu = ref('/inventory');

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>