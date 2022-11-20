<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const vueRouterButton = [
  { text: `$router.push('/')`, name: 'routerPush' },
  {
    text: '链接刷新',
    name: 'refresh',
  },
  {
    text: '路径参数',
    name: 'pathParam',
  },
]

const query = { foo: 'bar' }

function vueRouterClick(e) {
  const btn = e.composedPath().filter(node => node.nodeName === 'BUTTON')[0]
  switch (btn.name) {
    case 'routerPush':
      router.push('/')
      break
    case 'refresh':
      router.go()
      break
    case 'pathParam':
      router.replace({ query })
      btn.innerText += `: ${query.foo}`
      btn.name = 'queryed'
      break
    case 'queryed':
      router.replace()
      btn.innerText = '路径参数'
      btn.name = 'pathParam'
      break
  }
}
</script>
<template>
  <Card title="vue-router">
    <template #extra>默认重定向至page1，页面刷新时保持路由高亮</template>
    <template #content>
      <div
        class="ant-btn-group"
        @click="vueRouterClick">
        <a-button
          v-for="btn in vueRouterButton"
          :key="btn.name"
          :name="btn.name"
          >{{ btn.text }}
        </a-button>
      </div>
    </template>
  </Card>
</template>
