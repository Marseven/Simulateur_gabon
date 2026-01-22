<template>
  <div class="min-h-screen bg-mesh">
    <!-- Hero Header -->
    <div class="bg-gradient-to-br from-gabon-yellow-dark via-gabon-yellow to-gabon-green relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-gabon-green/20 rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div class="text-white">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
            </div>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-2 text-gabon-green-dark">Fournisseurs</h1>
            <p class="text-gabon-green-dark/70 text-sm sm:text-base max-w-lg">Trouvez les meilleurs prestataires pour accompagner votre entreprise</p>
          </div>

          <!-- Stats -->
          <div class="flex gap-4 sm:gap-6">
            <div class="text-center">
              <p class="text-2xl sm:text-3xl font-display font-bold text-gabon-green-dark">{{ suppliers.length }}</p>
              <p class="text-xs sm:text-sm text-gabon-green-dark/60">Fournisseurs</p>
            </div>
            <div class="text-center">
              <p class="text-2xl sm:text-3xl font-display font-bold text-white">5</p>
              <p class="text-xs sm:text-sm text-gabon-green-dark/60">Categories</p>
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
              placeholder="Rechercher un fournisseur, service..."
              class="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gabon-yellow/30 focus:border-gabon-yellow-dark focus:bg-white transition-all text-sm sm:text-base"
            >
          </div>

          <!-- Category filter -->
          <select
            v-model="selectedCategory"
            class="w-full sm:w-52 px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gabon-yellow/30 focus:border-gabon-yellow-dark focus:bg-white transition-all text-sm sm:text-base appearance-none cursor-pointer"
          >
            <option value="">Toutes les categories</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
      </div>

      <!-- Results count -->
      <div class="flex items-center justify-between">
        <p class="text-sm text-neutral-600">
          <span class="font-semibold text-neutral-800">{{ filteredSuppliers.length }}</span> fournisseur{{ filteredSuppliers.length > 1 ? 's' : '' }}
        </p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        <SupplierCard
          v-for="(supplier, index) in filteredSuppliers"
          :key="supplier.id"
          :supplier="supplier"
          class="animate-slide-up"
          :style="{ animationDelay: `${index * 50}ms` }"
        />
      </div>

      <!-- Empty state -->
      <div v-if="filteredSuppliers.length === 0" class="text-center py-16 sm:py-20">
        <div class="w-20 h-20 bg-gabon-yellow/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-gabon-yellow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-display font-bold text-neutral-800 mb-2">Aucun fournisseur trouve</h3>
        <p class="text-neutral-500 mb-6">Modifiez vos criteres de recherche</p>
        <button @click="clearFilters" class="text-gabon-yellow-dark font-medium hover:underline">
          Reinitialiser les filtres
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SupplierCard from '@/components/features/SupplierCard.vue'
import { suppliers } from '@/data/mockSuppliers.js'

const search = ref('')
const selectedCategory = ref('')

const categories = [...new Set(suppliers.map(s => s.category))]

const filteredSuppliers = computed(() => {
  return suppliers.filter(supplier => {
    const matchesSearch = !search.value ||
      supplier.name.toLowerCase().includes(search.value.toLowerCase()) ||
      supplier.description?.toLowerCase().includes(search.value.toLowerCase()) ||
      supplier.services?.some(s => s.toLowerCase().includes(search.value.toLowerCase()))
    const matchesCategory = !selectedCategory.value || supplier.category === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const clearFilters = () => {
  search.value = ''
  selectedCategory.value = ''
}
</script>
