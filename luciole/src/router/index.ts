import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/connexion',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/actualites',
      name: 'information-list',
      component: () => import('../views/InformationListView.vue')
    },
    {
      path: '/actualites/:id',
      name: 'info',
      component: () => import('../views/InformationView.vue')
    },
    {
      path: '/profil',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
  ]
})

export default router
