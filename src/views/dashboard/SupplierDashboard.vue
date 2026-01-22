<template>
  <div class="space-y-6">
    <!-- Welcome Header -->
    <div class="bg-gradient-to-r from-gabon-yellow-dark to-amber-600 rounded-2xl p-6 text-white">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-white/80 text-sm">Bienvenue</p>
          <h1 class="text-2xl font-bold">{{ companyName }}</h1>
          <p class="text-white/70 mt-1 flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Profil verifie
          </p>
        </div>
        <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        label="Avis clients"
        :value="45"
        variant="yellow"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
          </svg>
        </template>
      </StatCard>

      <StatCard
        label="Note moyenne"
        value="4.8"
        suffix="/ 5"
        variant="green"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </template>
      </StatCard>

      <StatCard
        label="Missions en cours"
        :value="12"
        variant="blue"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
        </template>
      </StatCard>
    </div>

    <!-- Quick Actions -->
    <BaseCard title="Actions">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <router-link to="/catalog" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-gabon-yellow/10 transition-colors group">
          <div class="w-12 h-12 bg-gabon-yellow/20 rounded-xl flex items-center justify-center group-hover:bg-gabon-yellow group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-gabon-yellow-dark group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Mon catalogue</span>
        </router-link>

        <router-link to="/opportunities" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-gabon-green/5 transition-colors group">
          <div class="w-12 h-12 bg-gabon-green/10 rounded-xl flex items-center justify-center group-hover:bg-gabon-green group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-gabon-green group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Opportunites</span>
        </router-link>

        <router-link to="/missions" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-gabon-blue/5 transition-colors group">
          <div class="w-12 h-12 bg-gabon-blue/10 rounded-xl flex items-center justify-center group-hover:bg-gabon-blue group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-gabon-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Mes missions</span>
        </router-link>

        <router-link to="/messages" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-purple-50 transition-colors group">
          <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Messages</span>
        </router-link>
      </div>
    </BaseCard>

    <!-- Opportunities -->
    <BaseCard title="Nouvelles opportunites">
      <template #actions>
        <router-link to="/opportunities" class="text-sm font-medium text-gabon-green hover:text-gabon-green-dark">
          Voir toutes
        </router-link>
      </template>

      <div class="space-y-4">
        <div
          v-for="need in opportunities"
          :key="need.id"
          class="p-4 bg-neutral-50 rounded-xl"
        >
          <div class="flex items-start justify-between mb-2">
            <div>
              <h4 class="font-semibold text-neutral-800">{{ need.company }}</h4>
              <p class="text-sm text-neutral-600">{{ need.need }}</p>
            </div>
            <BaseBadge variant="info" size="sm">{{ need.category }}</BaseBadge>
          </div>
          <div class="flex items-center gap-4 text-xs text-neutral-500 mb-3">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ need.budget }}
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {{ need.deadline }}
            </span>
          </div>
          <BaseButton size="sm" block>Candidater</BaseButton>
        </div>
      </div>
    </BaseCard>

    <!-- Recent review -->
    <BaseCard title="Dernier avis">
      <div class="p-4 bg-neutral-50 rounded-xl">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-12 h-12 bg-gabon-green/10 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-gabon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <div class="flex-1">
            <p class="font-semibold text-neutral-800">AgriGabon Tech</p>
            <div class="flex items-center gap-1">
              <svg v-for="i in 5" :key="i" class="w-4 h-4 text-gabon-yellow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
        <p class="text-neutral-600 italic">"Service excellent, tres reactif et professionnel. Je recommande vivement !"</p>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseBadge from '@/components/common/BaseBadge.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import StatCard from '@/components/features/StatCard.vue'

const companyName = ref(localStorage.getItem('userName') || 'JuriConsult Gabon')

const opportunities = [
  { id: 1, company: 'AgriGabon Tech', need: 'Developpement application mobile iOS/Android', budget: '15 000 000 FCFA', deadline: '30 jours', category: 'IT' },
  { id: 2, company: 'PayLib Gabon', need: 'Audit juridique complet', budget: '8 000 000 FCFA', deadline: '15 jours', category: 'Juridique' }
]
</script>
