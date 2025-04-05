import { createRouter, createWebHistory } from 'vue-router'
import PlayerView from '../views/PlayerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PlayerView',
      component: PlayerView,
    },
    {
      path: '/role',
      name: 'RoleView',
      component: () => import('../views/RoleView.vue'),
    },
    {
      path: '/game',
      name: 'GameView',
      component: () => import('../views/GameView.vue'),
    },
  ],
})

export default router
