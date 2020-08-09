import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "categories" */ '@/views/Categories.vue'),
  },
  {
    path: '/accountHistory',
    name: 'Account History',
    component: () => import(/* webpackChunkName: "accountHistory" */ '@/views/Data/AccountHistory.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Data/Profile.vue'),
  },
  {
    path: '/comments',
    name: 'Comments',
    component: () => import(/* webpackChunkName: "comments" */ '@/views/Data/Comments.vue'),
  },
  {
    path: '/likes',
    name: 'Likes',
    component: () => import(/* webpackChunkName: "likes" */ '@/views/Data/Likes.vue'),
  },
  {
    path: '/connections',
    name: 'Connections',
    component: () => import(/* webpackChunkName: "connections" */ '@/views/Data/Connections.vue'),
  },
  {
    path: '/messages',
    name: 'Messages',
    component: () => import(/* webpackChunkName: "messages" */ '@/views/Data/Messages.vue'),
  },
  {
    path: '/searches',
    name: 'Searches',
    component: () => import(/* webpackChunkName: "searches" */ '@/views/Data/Searches.vue'),
  },
  {
    path: '/devices',
    name: 'devices',
    component: () => import(/* webpackChunkName: "devices" */ '@/views/Data/Devices.vue'),
  },
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
