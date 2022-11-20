<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>
<template>
  <Card title="子组件">
    <template #extra>
      <a-button @click="store.commit('square')" size="small">求平方根</a-button>
    </template>
    <template #content>
      {{ store.state.pi }}
      <slot name="content"></slot>
    </template>
  </Card>
</template>
