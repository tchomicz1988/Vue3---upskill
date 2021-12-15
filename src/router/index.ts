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
      path: '/add-question',
      name: 'add-question',
      component: () => import('../views/NewQuestionView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/EditQuestionView.vue')
    }
  ]
})

export default router
