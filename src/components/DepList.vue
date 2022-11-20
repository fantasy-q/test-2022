<script lang="ts" setup>
const data = Object.entries({
  "ant-design-vue": "^3.2.12",
  "axios": "^1.0.0",
  "vite": "^3.1.0",
  "vue": "^3.2.37",
  "vue-request": "^1.2.4",
  "vue-router": "^4.1.5",
  "vuex": "^4.0.2",
  "@vitejs/plugin-vue": "^3.1.0",
  "unplugin-vue-components": "^0.22.8",
})

</script>

<template>
  <a-list size="small" bordered :data-source="data">
    <template #header>
      <div>依赖列表</div>
    </template>
    <template #renderItem="{ item: [key, value] }">
      <a-list-item>{{ key }}:{{ value.slice(1) }}</a-list-item>
    </template>
  </a-list>
</template>
