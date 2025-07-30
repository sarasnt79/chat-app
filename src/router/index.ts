// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// import صفحاتت:
import Register from './../pages/register.vue'
import Chat from './../pages/chat.vue'

const routes = [
  { path: '/', name: 'Home', component: Register },
  { path: '/chat', name: 'About', component: Chat },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
