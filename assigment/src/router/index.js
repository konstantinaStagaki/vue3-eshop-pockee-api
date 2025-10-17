import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  // { path: '/products', name: 'products', component: () => import('@/pages/ProductListPage.vue') }
]

const router = createRouter({
  // Vue CLI: process.env.BASE_URL ; Vite would use import.meta.env.BASE_URL
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
