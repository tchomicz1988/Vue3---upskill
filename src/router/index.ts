import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(), // import.meta.env.BASE_URL for test chane to localhost
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/add-question',
      name: 'add-question',
      component: () => import('../views/QuestionNew/QuestionNew.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/QuestionEdit/QuestionEdit.vue')
    }
  ]
})

export default router
