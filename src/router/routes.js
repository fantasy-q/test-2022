import Requirements from '../pages/Requirements.vue'
import VueBasic from '../pages/VueBasic.vue'
import DataShowcase from '../pages/DataShowcase.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  { path: '/', redirect: '/page1' },
  { path: '/:catchAll(.*)', component: NotFound },
  { path: '/page1', component: Requirements, name: '要求说明' },
  { path: '/page2', component: VueBasic, name: 'VUE基础' },
  { path: '/page3', component: DataShowcase, name: '数据展示' },
]

export default routes
