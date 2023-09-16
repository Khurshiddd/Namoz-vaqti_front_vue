import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/yanvar',
      name: 'year.yanvar',
      component: () => import('@/components/year/Yanvar.vue')
    },
    {
      path: '/fevral',
      name: 'year.fevral',
      component: () => import('@/components/year/Fevral.vue')
    },
    {
      path: '/mart',
      name: 'year.mart',
      component: () => import('@/components/year/Mart.vue')
    },
    {
      path: '/aprel',
      name: 'year.aprel',
      component: () => import('@/components/year/Aprel.vue')
    },
    {
      path: '/may',
      name: 'year.may',
      component: () => import('@/components/year/May.vue')
    },
    {
      path: '/iyun',
      name: 'year.iyun',
      component: () => import('@/components/year/Iyun.vue')
    },
    {
      path: '/iyul',
      name: 'year.iyul',
      component: () => import('@/components/year/Iyul.vue')
    },
    {
      path: '/avgust',
      name: 'year.avgust',
      component: () => import('@/components/year/Avgust.vue')
    },
    {
      path: '/sentyabr',
      name: 'year.sentyabr',
      component: () => import('@/components/year/Sentyabr.vue')
    },
    {
      path: '/oktyabr',
      name: 'year.oktyabr',
      component: () => import('@/components/year/Oktyabr.vue')
    },
    {
      path: '/noyabr',
      name: 'year.noyabr',
      component: () => import('@/components/year/Noyabr.vue')
    },
    {
      path: '/dekabr',
      name: 'year.dekabr',
      component: () => import('@/components/year/Dekabr.vue')
    },
  ]
})

export default router
