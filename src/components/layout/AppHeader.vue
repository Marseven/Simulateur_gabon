<template>
  <header class="bg-white/95 backdrop-blur-md border-b border-neutral-100 sticky top-0 z-50 safe-area-top">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-18">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <img
            src="@/assets/images/sceau_gabon.png"
            alt="Sceau du Gabon"
            class="w-9 h-9 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          <span class="text-lg sm:text-xl font-display font-bold text-neutral-800">
            Proxi<span class="text-gabon-green">Gab</span>
          </span>
        </router-link>

        <!-- Navigation Desktop -->
        <nav class="hidden lg:flex items-center gap-1">
          <router-link
            v-for="item in navigation"
            :key="item.path"
            :to="item.path"
            class="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-gabon-green rounded-xl transition-all duration-300 group"
            active-class="!text-gabon-green !bg-gabon-green/5"
          >
            {{ item.name }}
            <span class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gabon-green rounded-full group-hover:w-1/2 transition-all duration-300"></span>
          </router-link>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Notifications (si connecte) -->
          <router-link
            v-if="isAuthenticated"
            to="/notifications"
            class="relative p-2 sm:p-2.5 text-neutral-500 hover:text-gabon-green hover:bg-gabon-green/5 rounded-xl transition-all duration-300"
          >
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <span v-if="notificationCount > 0" class="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 animate-pulse">
              {{ notificationCount > 9 ? '9+' : notificationCount }}
            </span>
          </router-link>

          <!-- User Menu (si connecte) -->
          <div v-if="isAuthenticated" class="relative">
            <button
              @click="showUserMenu = !showUserMenu"
              class="flex items-center gap-2 p-1.5 sm:p-2 hover:bg-neutral-50 rounded-xl transition-all duration-300 group"
            >
              <div class="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-gabon-green to-gabon-green-dark rounded-xl flex items-center justify-center shadow-md shadow-gabon-green/20 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <span class="text-white text-xs sm:text-sm font-bold">{{ userInitials }}</span>
              </div>
              <svg class="w-4 h-4 text-neutral-400 hidden sm:block transition-transform duration-300" :class="{ 'rotate-180': showUserMenu }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div
                v-if="showUserMenu"
                class="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 overflow-hidden"
              >
                <!-- User info -->
                <div class="px-4 py-3 border-b border-neutral-100">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-gabon-green to-gabon-green-dark rounded-xl flex items-center justify-center">
                      <span class="text-white text-sm font-bold">{{ userInitials }}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold text-neutral-800 truncate">{{ userName }}</p>
                      <p class="text-xs text-neutral-500">{{ userTypeLabel }}</p>
                    </div>
                  </div>
                </div>

                <!-- Menu items -->
                <div class="py-1">
                  <router-link
                    to="/dashboard"
                    @click="showUserMenu = false"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-600 hover:bg-gabon-green/5 hover:text-gabon-green transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                    </svg>
                    Tableau de bord
                  </router-link>
                  <router-link
                    to="/profile"
                    @click="showUserMenu = false"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-600 hover:bg-gabon-green/5 hover:text-gabon-green transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    Mon profil
                  </router-link>
                  <router-link
                    to="/messages"
                    @click="showUserMenu = false"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-600 hover:bg-gabon-green/5 hover:text-gabon-green transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    Messages
                  </router-link>
                </div>

                <!-- Logout -->
                <div class="border-t border-neutral-100 pt-1">
                  <button
                    @click="logout"
                    class="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 w-full transition-colors"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    Deconnexion
                  </button>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Boutons connexion/inscription (si non connecte) -->
          <template v-else>
            <router-link
              to="/login"
              class="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-neutral-600 hover:text-gabon-green transition-colors"
            >
              Connexion
            </router-link>
            <router-link
              to="/register"
              class="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-gabon-green to-gabon-green-dark hover:from-gabon-green-dark hover:to-gabon-green rounded-xl transition-all duration-300 shadow-md shadow-gabon-green/20 hover:shadow-lg hover:shadow-gabon-green/30 btn-press"
            >
              <span class="hidden sm:inline">S'inscrire</span>
              <span class="sm:hidden">Rejoindre</span>
            </router-link>
          </template>

          <!-- Menu mobile toggle -->
          <button
            @click="showMobileMenu = !showMobileMenu"
            class="lg:hidden p-2 text-neutral-500 hover:text-gabon-green hover:bg-gabon-green/5 rounded-xl transition-all duration-300"
          >
            <svg v-if="!showMobileMenu" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Navigation Mobile -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="showMobileMenu"
          class="lg:hidden py-4 border-t border-neutral-100"
        >
          <nav class="flex flex-col gap-1">
            <router-link
              v-for="item in navigation"
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-3 px-4 py-3 text-base font-medium text-neutral-600 hover:text-gabon-green hover:bg-gabon-green/5 rounded-xl transition-all"
              active-class="!text-gabon-green !bg-gabon-green/10"
              @click="showMobileMenu = false"
            >
              <component :is="item.icon" class="w-5 h-5" />
              {{ item.name }}
            </router-link>

            <!-- Mobile auth buttons -->
            <div v-if="!isAuthenticated" class="flex flex-col gap-2 mt-4 pt-4 border-t border-neutral-100">
              <router-link
                to="/login"
                class="flex items-center justify-center px-4 py-3 text-base font-medium text-neutral-600 hover:text-gabon-green rounded-xl border border-neutral-200 hover:border-gabon-green/30 transition-all"
                @click="showMobileMenu = false"
              >
                Connexion
              </router-link>
              <router-link
                to="/register"
                class="flex items-center justify-center px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-gabon-green to-gabon-green-dark rounded-xl shadow-md"
                @click="showMobileMenu = false"
              >
                S'inscrire gratuitement
              </router-link>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, h } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showUserMenu = ref(false)
const showMobileMenu = ref(false)

// Auth state from localStorage
const isAuthenticated = ref(false)
const userName = ref('')
const userType = ref('')
const notificationCount = ref(3)

const userInitials = computed(() => {
  if (!userName.value) return 'U'
  return userName.value.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
})

const userTypeLabel = computed(() => {
  const labels = {
    'startup': 'Startup / PME',
    'investor': 'Investisseur',
    'supplier': 'Fournisseur',
    'admin': 'Administrateur'
  }
  return labels[userType.value] || 'Utilisateur'
})

// Icons for mobile nav
const HomeIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' })
  ])
}

const ProjectIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
  ])
}

const InvestorIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
  ])
}

const SupplierIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
  ])
}

const MatchingIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
  ])
}

const navigation = [
  { name: 'Accueil', path: '/', icon: HomeIcon },
  { name: 'Projets', path: '/projects', icon: ProjectIcon },
  { name: 'Investisseurs', path: '/investors', icon: InvestorIcon },
  { name: 'Fournisseurs', path: '/suppliers', icon: SupplierIcon },
  { name: 'Matching', path: '/matching', icon: MatchingIcon },
]

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('userType')
  localStorage.removeItem('userName')
  isAuthenticated.value = false
  showUserMenu.value = false
  router.push('/')
}

// Check auth state
const checkAuth = () => {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true'
  userType.value = localStorage.getItem('userType') || ''
  userName.value = localStorage.getItem('userName') || ''
}

// Close menus on click outside
const handleClickOutside = (e) => {
  if (showUserMenu.value && !e.target.closest('.relative')) {
    showUserMenu.value = false
  }
}

onMounted(() => {
  checkAuth()
  window.addEventListener('storage', checkAuth)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('storage', checkAuth)
  document.removeEventListener('click', handleClickOutside)
})
</script>
