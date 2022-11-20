<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import routes from '../router/routes'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()
const route = useRoute();
const path = computed(() => route.path)
const validRoutes = routes.filter(({ name }) => name)
const selectedKeys = ref<string[]>([path.value]);

watch(path, () => {
  selectedKeys.value.push(path.value)
})


function setClass() {
  return store.getters.getColor ? 'color' : null
}
</script>

<template>
  <a-layout-sider class="sider" width="110">
    <div class="menu">
      <a-menu class="menu" v-model:selectedKeys="selectedKeys">
        <a-menu-item v-for="(route, index) in validRoutes" :class="setClass()" :key="route.path">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </a-menu-item>
        <!-- 动态菜单 -->
        <a-menu-item v-for="(name, index) in store.state.menus" :class="setClass()" :key="name + index"
          @click="router.push(`dynamicPage${3 + index}`)">
          {{ '动态菜单' + (3 + index) }}
        </a-menu-item>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<style scoped>
.layout .sider {
  background: #fff;
  border-radius: 5px 0 0 5px;
}

.menu {
  height: 100%;
  text-align: center;
}
</style>
