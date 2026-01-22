<template>
  <div class="space-y-6">
    <div class="bg-gradient-to-r from-gabon-green to-gabon-blue rounded-2xl p-8 text-white text-center">
      <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      </div>
      <h1 class="text-2xl font-bold">{{ userName }}</h1>
      <p class="text-white/80">{{ userTypeLabel }}</p>
      <span class="inline-flex items-center gap-1 mt-3 px-4 py-1.5 bg-white/20 text-sm rounded-full">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        Profil verifie
      </span>
    </div>

    <BaseCard title="Parametres">
      <div class="space-y-1">
        <button
          v-for="item in menuItems"
          :key="item.label"
          class="w-full flex items-center gap-3 py-3 px-2 hover:bg-neutral-50 rounded-xl transition-colors"
        >
          <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
          </svg>
          <span class="flex-1 text-left text-sm text-neutral-700">{{ item.label }}</span>
          <svg class="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </BaseCard>

    <BaseButton variant="danger" block @click="logout">
      Deconnexion
    </BaseButton>
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
