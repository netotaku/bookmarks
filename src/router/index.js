import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component:  () => import('../views/Index.vue')
  },{
    path: '/:slug+',
    name: 'Category',
    component: () => import('../views/Category.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
