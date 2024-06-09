import StatusesView from '@/views/StatusesView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/statuses',
      name: 'Statuses',
      component: StatusesView
    }
  ]
})

export default router
