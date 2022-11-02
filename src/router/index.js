import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'

const routes = [
  {
    path: '/',
    name: 'princiapl',
    component: PrincipalView
  },
  {
    path: '/sistemas-operativos',
    name: 'sistemas-operativos',
    component: () => import('../views/SistemasOperativosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
