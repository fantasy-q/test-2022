<script setup>
const props = defineProps({
  title: { type: String, default: 'Default size card' },
})
</script>
<template>
  <a-card :title="props.title">
    <template #extra><slot name="extra"></slot></template>
    <slot name="content"></slot>
  </a-card>
</template>
