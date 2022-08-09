import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('@/views/TestWorld.vue'),
      children: [
        {
          path: 'button',
          name: 'button',
          component: () => import('@/packages/button/demo/button.vue')
        }
      ]
    }
  ]
})
export default router
