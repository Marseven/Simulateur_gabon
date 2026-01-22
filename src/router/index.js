import { createRouter, createWebHistory } from 'vue-router'

// Views
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { hideLayout: true }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: { hideLayout: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/DashboardPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/projects/ProjectsList.vue')
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: () => import('@/views/projects/ProjectDetail.vue')
  },
  {
    path: '/my-projects',
    name: 'my-projects',
    component: () => import('@/views/projects/ProjectsList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/my-projects/new',
    name: 'new-project',
    component: () => import('@/views/projects/CreateProject.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/investors',
    name: 'investors',
    component: () => import('@/views/investors/InvestorsList.vue')
  },
  {
    path: '/investors/:id',
    name: 'investor-detail',
    component: () => import('@/views/investors/InvestorDetail.vue')
  },
  {
    path: '/suppliers',
    name: 'suppliers',
    component: () => import('@/views/suppliers/SuppliersList.vue')
  },
  {
    path: '/suppliers/:id',
    name: 'supplier-detail',
    component: () => import('@/views/suppliers/SupplierDetail.vue')
  },
  {
    path: '/matching',
    name: 'matching',
    component: () => import('@/views/MatchingPage.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('@/views/MessagesPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('@/views/NotificationsPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfilePage.vue'),
    meta: { requiresAuth: true }
  },
  // Catch all 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// Navigation guard for auth
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
