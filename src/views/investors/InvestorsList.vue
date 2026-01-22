<template>
  <div class="min-h-screen bg-mesh">
    <!-- Hero Header -->
    <div class="bg-gradient-to-br from-gabon-blue via-gabon-blue-dark to-gabon-green relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-96 h-96 bg-gabon-yellow/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div class="text-white">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-2">Investisseurs</h1>
            <p class="text-white/70 text-sm sm:text-base max-w-lg">Trouvez le partenaire financier ideal pour accelerer votre projet</p>
          </div>

          <!-- Stats -->
          <div class="flex gap-4 sm:gap-6">
            <div class="text-center">
              <p class="text-2xl sm:text-3xl font-display font-bold text-white">{{ investors.length }}</p>
              <p class="text-xs sm:text-sm text-white/60">Investisseurs</p>
            </div>
            <div class="text-center">
              <p class="text-2xl sm:text-3xl font-display font-bold text-gabon-yellow">12+</p>
              <p class="text-xs sm:text-sm text-white/60">Deals actifs</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6">
      <!-- Filters -->
      <div class="bg-white rounded-2xl sm:rounded-3xl border border-neutral-100 shadow-sm p-4 sm:p-5 lg:p-6">
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <!-- Search -->
          <div class="flex-1 relative">
            <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              v-model="search"
              type="text"
              placeholder="Rechercher un investisseur..."
              class="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gabon-blue/20 focus:border-gabon-blue focus:bg-white transition-all text-sm sm:text-base"
            >
          </div>

          <!-- Type filter -->
          <select
            v-model="selectedType"
            class="w-full sm:w-52 px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gabon-blue/20 focus:border-gabon-blue focus:bg-white transition-all text-sm sm:text-base appearance-none cursor-pointer"
          >
            <option value="">Tous les types</option>
            <option v-for="type in investorTypes" :key="type" :value="type">{{ type }}</option>
          </select>
        </div>
      </div>

      <!-- Results count -->
      <div class="flex items-center justify-between">
        <p class="text-sm text-neutral-600">
          <span class="font-semibold text-neutral-800">{{ filteredInvestors.length }}</span> investisseur{{ filteredInvestors.length > 1 ? 's' : '' }}
        </p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        <InvestorCard
          v-for="(investor, index) in filteredInvestors"
          :key="investor.id"
          :investor="investor"
          class="animate-slide-up"
          :style="{ animationDelay: `${index * 50}ms` }"
        />
      </div>

      <!-- Empty state -->
      <div v-if="filteredInvestors.length === 0" class="text-center py-16 sm:py-20">
        <div class="w-20 h-20 bg-gabon-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-gabon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-display font-bold text-neutral-800 mb-2">Aucun investisseur trouve</h3>
        <p class="text-neutral-500 mb-6">Modifiez vos criteres de recherche</p>
        <button @click="clearFilters" class="text-gabon-blue font-medium hover:underline">
          Reinitialiser les filtres
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import InvestorCard from '@/components/features/InvestorCard.vue'
import { investors } from '@/data/mockInvestors.js'

const search = ref('')
const selectedType = ref('')

const investorTypes = [...new Set(investors.map(i => i.type))]

const filteredInvestors = computed(() => {
  return investors.filter(investor => {
    const matchesSearch = !search.value ||
      investor.name.toLowerCase().includes(search.value.toLowerCase()) ||
      investor.description?.toLowerCase().includes(search.value.toLowerCase())
    const matchesType = !selectedType.value || investor.type === selectedType.value
    return matchesSearch && matchesType
  })
})

const clearFilters = () => {
  search.value = ''
  selectedType.value = ''
}
</script>
