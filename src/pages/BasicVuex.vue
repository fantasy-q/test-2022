<script setup>
import { useStore } from 'vuex'
const store = useStore()

function vuexClick(e) {
  const btn = e.composedPath().filter(node => node.nodeName === 'BUTTON')[0]
  switch (btn.name) {
    case 'changeColor':
      store.state.colorBtnValue = store.state.isColored ? '改 色' : '恢 复'
  }
  store.commit(btn.name)
}
</script>

<template>
  <Card title="vuex">
    <template #extra> 通过mapState、mapMutations等实现全局状态共享</template>
    <template #content>
      <div class="ant-btn-group" @click="vuexClick">
        <a-button name="addItem">修改state.menus增加菜单</a-button>
        <a-button name="changeColor">{{ store.state.colorBtnValue }}</a-button>
      </div>
    </template>
  </Card>
</template>
