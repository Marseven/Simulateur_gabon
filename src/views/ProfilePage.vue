<template>
  <div class="min-h-screen bg-mesh">
    <!-- Hero Header -->
    <div class="bg-gradient-to-br from-gabon-green via-gabon-green-dark to-gabon-blue relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-96 h-96 bg-gabon-yellow/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
        <div class="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-5">
          <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <h1 class="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white">{{ userName }}</h1>
        <p class="text-white/70 text-sm sm:text-base mt-1">{{ userTypeLabel }}</p>
        <span class="inline-flex items-center gap-1.5 mt-3 sm:mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm text-sm rounded-full text-white">
          <svg class="w-4 h-4 text-gabon-yellow" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Profil verifie
        </span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6">
      <BaseCard title="Parametres">
        <div class="space-y-1">
          <button
            v-for="item in menuItems"
            :key="item.label"
            class="w-full flex items-center gap-3 sm:gap-4 py-3 sm:py-4 px-3 sm:px-4 hover:bg-neutral-50 rounded-xl sm:rounded-2xl transition-colors group"
          >
            <div class="w-10 h-10 sm:w-11 sm:h-11 bg-neutral-100 group-hover:bg-gabon-green/10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
              <svg class="w-5 h-5 text-neutral-500 group-hover:text-gabon-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
              </svg>
            </div>
            <span class="flex-1 text-left text-sm sm:text-base text-neutral-700 font-medium">{{ item.label }}</span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 group-hover:text-neutral-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </BaseCard>

      <BaseButton variant="danger" block @click="logout" class="!py-3.5">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        Deconnexion
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const router = useRouter()

const userName = computed(() => localStorage.getItem('userName') || 'Utilisateur')
const userType = computed(() => localStorage.getItem('userType') || 'startup')

const userTypeLabel = computed(() => {
  const labels = {
    startup: 'Startup / PME',
    investor: 'Investisseur',
    supplier: 'Fournisseur'
  }
  return labels[userType.value] || 'Utilisateur'
})

const menuItems = [
  { label: 'Informations personnelles', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  { label: 'Securite', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { label: 'Notifications', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
  { label: 'Langue', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' }
]

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('userType')
  localStorage.removeItem('userName')
  router.push('/')
}
</script>
