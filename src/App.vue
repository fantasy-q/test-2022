<script setup></script>

<template>
  <a-layout class="layout">
    <Sider />
    <a-layout-content class="content">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
.layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 20px;
}

.layout .content {
  padding: 20px;
  background: #fff;
  border-radius: 0 5px 5px 0;
  overflow: hidden auto;
}
</style>
