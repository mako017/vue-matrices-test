import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: () => import('@/views/Instructions.vue')
  },
  {
    path: '/task',
    name: 'Task',
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/final',
    name: 'Final',
    component: () => import('@/views/Final.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
