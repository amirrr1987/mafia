import { createRouter, createWebHistory } from 'vue-router'
import TheApp from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'TheApp',
      component: () => import('@/App.vue'),
      children: [
        {
          path: '',
          name: 'AppLayout',
          component: () => import('@/layouts/AppLayout.vue'),
          children: [
            {
              path: '',
              name: '',
              component: () => import('@/views/UsersView.vue'),
            },
            {
              path: 'roles',
              name: 'TheRoles',
              component: () => import('@/views/RolesView.vue'),
            },
            {
              path: 'games',
              name: 'TheGames',
              component: () => import('@/views/GamesView.vue'),
            },
          ],
        },
      ],
    },
  ],
})

export default router
