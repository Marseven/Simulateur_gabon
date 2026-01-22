<template>
  <div class="min-h-screen bg-mesh">
    <!-- Hero Header -->
    <div class="bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-96 h-96 bg-gabon-green/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-gabon-yellow/10 rounded-full blur-3xl translate-y-1/2"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gabon-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center p-2">
              <img src="@/assets/images/logo_harmoirie.png" alt="Armoiries du Gabon" class="w-full h-full object-contain"/>
            </div>
            <div class="text-white">
              <p class="text-white/60 text-sm">Tableau de bord</p>
              <h1 class="text-xl sm:text-2xl lg:text-3xl font-display font-bold">Administration</h1>
              <p class="text-white/60 mt-0.5 text-sm">Ministere du Commerce et des PME</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button class="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-colors border border-white/10">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              <span class="hidden sm:inline">Exporter rapport</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6">
      <!-- Key Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-neutral-100 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gabon-green/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gabon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
          </div>
          <p class="text-2xl sm:text-3xl font-display font-bold text-neutral-800">{{ platformStats.totalStartups }}</p>
          <p class="text-xs sm:text-sm text-neutral-500 mt-1">Startups inscrites</p>
        </div>

        <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-neutral-100 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gabon-blue/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gabon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+8%</span>
          </div>
          <p class="text-2xl sm:text-3xl font-display font-bold text-neutral-800">{{ platformStats.totalInvestors }}</p>
          <p class="text-xs sm:text-sm text-neutral-500 mt-1">Investisseurs actifs</p>
        </div>

        <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-neutral-100 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gabon-yellow/20 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gabon-yellow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+25%</span>
          </div>
          <p class="text-2xl sm:text-3xl font-display font-bold text-neutral-800">{{ formatAmount(platformStats.totalRaised) }}</p>
          <p class="text-xs sm:text-sm text-neutral-500 mt-1">FCFA leves</p>
        </div>

        <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-neutral-100 shadow-sm">
          <div class="flex items-center justify-between mb-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+18%</span>
          </div>
          <p class="text-2xl sm:text-3xl font-display font-bold text-neutral-800">{{ platformStats.totalMatches }}</p>
          <p class="text-xs sm:text-sm text-neutral-500 mt-1">Mises en relation</p>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-5 sm:gap-6">
        <!-- Sector Distribution -->
        <div class="lg:col-span-2">
          <BaseCard title="Repartition par secteur">
            <div class="space-y-4">
              <div v-for="sector in sectorStats" :key="sector.name" class="space-y-2">
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-neutral-700">{{ sector.name }}</span>
                  <span class="text-neutral-500">{{ sector.count }} projets ({{ sector.percentage }}%)</span>
                </div>
                <div class="h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                  <div
                    class="h-full rounded-full transition-all duration-500"
                    :class="sector.color"
                    :style="{ width: sector.percentage + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        <!-- Activity Feed -->
        <div>
          <BaseCard title="Activite recente">
            <div class="space-y-4">
              <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start gap-3">
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  :class="activityIconBg(activity.type)"
                >
                  <svg class="w-4 h-4" :class="activityIconColor(activity.type)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="activityIcon(activity.type)"/>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm text-neutral-700">{{ activity.message }}</p>
                  <p class="text-xs text-neutral-400 mt-0.5">{{ activity.time }}</p>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-5 sm:gap-6">
        <!-- Recent Startups -->
        <BaseCard title="Nouvelles startups">
          <template #actions>
            <router-link to="/projects" class="text-sm font-medium text-gabon-green hover:text-gabon-green-dark">
              Voir toutes
            </router-link>
          </template>

          <div class="space-y-3">
            <div
              v-for="startup in recentStartups"
              :key="startup.id"
              class="flex items-center gap-4 p-3 sm:p-4 bg-neutral-50 rounded-xl sm:rounded-2xl hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gabon-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-gabon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-neutral-800 text-sm sm:text-base truncate">{{ startup.name }}</h4>
                <p class="text-xs sm:text-sm text-neutral-500">{{ startup.sector }}</p>
              </div>
              <div class="text-right flex-shrink-0">
                <p class="text-sm font-semibold text-gabon-green">{{ formatAmount(startup.fundingNeeded) }}</p>
                <p class="text-xs text-neutral-400">{{ startup.location }}</p>
              </div>
            </div>
          </div>
        </BaseCard>

        <!-- Pending Verifications -->
        <BaseCard title="Verifications en attente">
          <template #actions>
            <span class="text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
              {{ pendingVerifications.length }} en attente
            </span>
          </template>

          <div class="space-y-3">
            <div
              v-for="item in pendingVerifications"
              :key="item.id"
              class="flex items-center gap-4 p-3 sm:p-4 bg-amber-50/50 rounded-xl sm:rounded-2xl border border-amber-100"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-neutral-800 text-sm sm:text-base truncate">{{ item.name }}</h4>
                <p class="text-xs sm:text-sm text-neutral-500">{{ item.type }} - {{ item.date }}</p>
              </div>
              <div class="flex gap-2 flex-shrink-0">
                <button class="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </button>
                <button class="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>

      <!-- Geographic Distribution -->
      <BaseCard title="Repartition geographique">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="region in regionStats" :key="region.name" class="p-4 bg-neutral-50 rounded-xl sm:rounded-2xl text-center">
            <div class="w-12 h-12 bg-gabon-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-gabon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <p class="text-2xl font-display font-bold text-neutral-800">{{ region.count }}</p>
            <p class="text-sm text-neutral-500">{{ region.name }}</p>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'
import { startups } from '@/data/mockStartups.js'
import { platformStats } from '@/data/mockProjects.js'

const recentStartups = startups.slice(0, 4)

const sectorStats = ref([
  { name: 'Technologies', count: 45, percentage: 35, color: 'bg-gabon-blue' },
  { name: 'Agriculture', count: 32, percentage: 25, color: 'bg-gabon-green' },
  { name: 'Services', count: 26, percentage: 20, color: 'bg-gabon-yellow' },
  { name: 'Industrie', count: 15, percentage: 12, color: 'bg-purple-500' },
  { name: 'Autres', count: 10, percentage: 8, color: 'bg-neutral-400' }
])

const regionStats = ref([
  { name: 'Libreville', count: 89 },
  { name: 'Port-Gentil', count: 24 },
  { name: 'Franceville', count: 18 },
  { name: 'Autres regions', count: 17 }
])

const recentActivity = ref([
  { id: 1, type: 'startup', message: 'AgriGabon Tech a rejoint la plateforme', time: 'Il y a 5 min' },
  { id: 2, type: 'match', message: 'Nouveau match: TechLib x BGD Capital', time: 'Il y a 15 min' },
  { id: 3, type: 'investment', message: 'Investissement de 50M FCFA confirme', time: 'Il y a 1h' },
  { id: 4, type: 'verification', message: 'PayLib Gabon verifie avec succes', time: 'Il y a 2h' },
  { id: 5, type: 'startup', message: 'GabonLogistics inscrit', time: 'Il y a 3h' }
])

const pendingVerifications = ref([
  { id: 1, name: 'EcoGreen Solutions', type: 'Startup', date: 'Soumis le 20 Jan' },
  { id: 2, name: 'Gabon Capital Partners', type: 'Investisseur', date: 'Soumis le 19 Jan' },
  { id: 3, name: 'TechConsult LBV', type: 'Fournisseur', date: 'Soumis le 18 Jan' }
])

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + ' Md'
  }
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(0) + ' M'
  }
  return amount.toLocaleString('fr-FR')
}

const activityIconBg = (type) => {
  const colors = {
    startup: 'bg-gabon-green/10',
    match: 'bg-purple-100',
    investment: 'bg-gabon-yellow/20',
    verification: 'bg-blue-100'
  }
  return colors[type] || 'bg-neutral-100'
}

const activityIconColor = (type) => {
  const colors = {
    startup: 'text-gabon-green',
    match: 'text-purple-600',
    investment: 'text-gabon-yellow-dark',
    verification: 'text-blue-600'
  }
  return colors[type] || 'text-neutral-600'
}

const activityIcon = (type) => {
  const icons = {
    startup: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    match: 'M13 10V3L4 14h7v7l9-11h-7z',
    investment: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    verification: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
  return icons[type] || icons.startup
}
</script>
