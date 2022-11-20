<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<template>
  <div class="module">
    <BasicRouter />
    <BasicVuex />
    <Card title="components">
      <template #extra>
        <a-input-number v-model:value="store.state.pi" style="width: 200px; margin-right: 10px;" :step="1"
          size="small" />实现组件通信，组件复用，插槽应用等
      </template>
      <template #content>
        <div class="modules">
          <SubComponent>
            <template #content>
              <SubComponent> </SubComponent>
            </template>
          </SubComponent>
          <SubComponent> </SubComponent>
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.module>* {
  margin-bottom: 20px;
}

.module>*:last-child {
  margin-bottom: 0;
}

.modules {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modules>* {
  flex: 1;
  margin-right: 20px;
}

.modules>*:last-child {
  margin-right: 0;
}
</style>
