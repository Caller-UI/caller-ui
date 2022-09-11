export const zhComponentRoutes = [
  {
    path: 'button',
    name: 'button',
    component: () => import('#/packages/components/button/demo/zh/doc.md')
  },
  {
    path: 'icon',
    name: 'icon',
    component: () => import('#/packages/components/icon/demo/zh/doc.md')
  },
  {
    path: 'space',
    name: 'space',
    component: () => import('#/packages/components/space/demo/zh/doc.md')
  },
  {
    path: 'ConfigProvider',
    name: 'ConfigProvider',
    component: () => import('#/packages/components/ConfigProvider/demo/zh/doc.md')
  }
]

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/zhComponents',
    name: 'component',
    component: () => import('@/views/TestWorld.vue'),
    children: zhComponentRoutes
  }
]
