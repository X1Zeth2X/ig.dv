import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Categories.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
