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
      path: '/couverture-sante',
      name: 'health-insurance',
      component: () => import('../views/HealthInsuranceView.vue')
    },
    {
      path: '/soins',
      name: 'care',
      component: () => import('../views/CareView.vue')
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
      path: '/parametres',
      name: 'settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/profil',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/backoffice/post/:id',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/backoffice',
      name: 'backoffice-main',
      component: () => import('../views/BackofficeView.vue')
    },
    {
      path: '/backoffice/post',
      name: 'backoffice-posts',
      component: () => import('../views/BackofficePostView.vue')
    },
    {
      path: '/backoffice/post/create',
      name: 'backoffice-posts-create',
      component: () => import('../views/CreatePostView.vue')
    },
    {
      path: '/backoffice/tag',
      name: 'backoffice-tag',
      component: () => import('../views/TagView.vue')
    },
  ]
})

export default router
