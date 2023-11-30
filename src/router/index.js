import { createRouter, createWebHashHistory } from "vue-router";
// import Home from '@/pages/home.vue'
export const constantRoutes = [
    {
        path: '/',
        component: () => import('@/pages/home.vue'),
    },
    {
        path:'/reset',
        component: () => import('@/pages/resetForm.vue'),
        meta:{
          title:'重置'
        }
      },
]
export const dynamicRoutes = []

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...constantRoutes, ...dynamicRoutes],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    },
});
export default router
