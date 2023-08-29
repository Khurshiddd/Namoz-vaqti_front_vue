import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/day',
      name: 'day',
      component: () => import('@/components/Day.vue')
    },
    {
      path: '/month',
      name: 'month',
      component: () => import('@/components/Month.vue')
    },
    {
      path: '/year',
      name: 'year',
      component: () => import('@/components/Year.vue')
    }
  ]
})

export default router
