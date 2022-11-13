import { createRouter } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'

const routes = [
  {
    path: './',
    name: 'principal',
    component: PrincipalView
  },
  {
    path: './sistemas-operativos',
    name: 'sistemas-operativos',
    component: () => import('../views/SistemasOperativosView.vue')
  },
  {
    path: './sistema-operativo/:id',
    name: 'sistema-operativo',
    component: () => import('../views/SistemaOperativoView.vue')
  },
  {
    path: './hardware',
    name:'hardware',
    component: () => import ('../views/HardwareView.vue')
  },
  {
    path: './hardware2/:id',
    name:'hardware2',
    component: () => import ('../views/Hardware2View.vue')
  },
  {
    path: './glosario',
    name:'glosario',
    component: () => import ('../views/GlosarioView.vue')
  },
  {
    path: './ingles',
    name: '/ingles',
    component: () => import('../views/InglesView.vue')
  }
    
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
