import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory('://localhost'), // import.meta.env.BASE_URL for test chane to localhost
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-question',
      name: 'add-question',
      component: () => import('../views/NewQuestionView/NewQuestionView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/EditQuestionView/EditQuestionView.vue')
    }
  ]
})

export default router
