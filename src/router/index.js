import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counterTimer',
    name: 'counterTimer',
    component: () => import('../views/TimerView.vue')
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import('../views/CalView.vue')
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import('../views/ToDoView.vue')
  },
  {
    path: '/weather',
    name: 'weather',
    component: () => import('../views/WeatherView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/directory',
    name: 'directory',
    component: () => import('../views/DirectoryView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
