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
      component: () => import('../views/QuestionNew/QuestionsNew.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/QuestionsEdit/QuestionsEdit.vue')
    }
  ]
})

export default router
