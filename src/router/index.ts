import HomeView from '@/views/HomeView.vue'
import ImproveView from '@/views/ImproveView.vue'
import ProfileView from '@/views/ProfileView.vue'
import StatusesView from '@/views/StatusesView.vue'
import WorkView from '@/views/WorkView.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkView
    },
    {
      path: '/improve',
      name: 'Improve',
      component: ImproveView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    }
  ]
})

export default router
