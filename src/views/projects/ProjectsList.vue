<template>
  <div class="min-h-screen bg-mesh">
    <!-- Hero Header -->
    <div class="bg-gabon-gradient relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-96 h-96 bg-gabon-yellow/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-gabon-blue/10 rounded-full blur-3xl translate-y-1/2"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div class="text-white">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
            </div>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-2">Projets & Startups</h1>
            <p class="text-white/70 text-sm sm:text-base max-w-lg">Decouvrez les startups et PME gabonaises a la recherche de financement</p>
          </div>
          <BaseButton
            v-if="userType === 'startup'"
            to="/my-projects/new"
            size="lg"
            class="!bg-white !text-gabon-green-dark hover:!bg-gabon-yellow font-semibold shadow-lg btn-glow self-start sm:self-auto"
          >
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
            </template>
            Nouveau projet
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5 sm:space-y-6">
      <!-- Filters Card -->
      <div class="bg-white rounded-2xl sm:rounded-3xl border border-neutral-100 shadow-sm p-4 sm:p-5 lg:p-6">
        <div class="flex flex-col lg:flex-row gap-3 sm:gap-4">
          <!-- Search -->
          <div class="flex-1 relative">
            <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              v-model="search"
              type="text"
              placeholder="Rechercher un projet, secteur..."
              class="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gabon-green/20 focus:border-gabon-green focus:bg-white transition-all text-sm sm:text-base"
            >
          </div>

          <!-- Sector filter -->
          <BaseSelect
            v-model="selectedSector"
            :options="sectorOptions"
            placeholder="Tous les secteurs"
            class="w-full lg:w-52"
          />

          <!-- Stage filter -->
          <BaseSelect
            v-model="selectedStage"
            :options="stageOptions"
            placeholder="Tous les stades"
            class="w-full lg:w-48"
          />
        </div>

        <!-- Active filters -->
        <Transition
          enter-active-class="transition duration-200"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="hasActiveFilters" class="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-neutral-100">
            <span class="text-sm text-neutral-500">Filtres:</span>
            <button
              v-if="selectedSector"
              @click="selectedSector = ''"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gabon-green/10 text-gabon-green text-sm font-medium rounded-full hover:bg-gabon-green/20 transition-colors"
            >
              {{ selectedSector }}
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <button
              v-if="selectedStage"
              @click="selectedStage = ''"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gabon-blue/10 text-gabon-blue text-sm font-medium rounded-full hover:bg-gabon-blue/20 transition-colors"
            >
              {{ selectedStage }}
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <button @click="clearFilters" class="text-sm text-neutral-500 hover:text-gabon-green transition-colors ml-auto">
              Tout effacer
            </button>
          </div>
        </Transition>
      </div>

      <!-- Results Header -->
      <div class="flex items-center justify-between">
        <p class="text-sm text-neutral-600">
          <span class="font-semibold text-neutral-800">{{ filteredProjects.length }}</span> projet{{ filteredProjects.length > 1 ? 's' : '' }} trouve{{ filteredProjects.length > 1 ? 's' : '' }}
        </p>
        <div class="flex items-center gap-1 bg-white rounded-xl p-1 border border-neutral-200">
          <button
            @click="viewMode = 'grid'"
            :class="['p-2 rounded-lg transition-all', viewMode === 'grid' ? 'bg-gabon-green text-white shadow-md' : 'text-neutral-400 hover:text-neutral-600']"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
          </button>
          <button
            @click="viewMode = 'list'"
            :class="['p-2 rounded-lg transition-all', viewMode === 'list' ? 'bg-gabon-green text-white shadow-md' : 'text-neutral-400 hover:text-neutral-600']"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Grid View -->
      <div v-if="viewMode === 'grid'" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :project="project"
          class="animate-slide-up"
          :style="{ animationDelay: `${index * 50}ms` }"
        />
      </div>

      <!-- List View -->
      <div v-else class="space-y-3 sm:space-y-4">
        <router-link
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          :to="`/projects/${project.id}`"
          class="group block bg-white rounded-2xl border border-neutral-100 p-4 sm:p-5 card-hover animate-slide-up"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          <div class="flex items-center gap-3 sm:gap-4">
            <!-- Icon -->
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gabon-green/10 to-gabon-blue/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-gabon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <h3 class="font-display font-bold text-neutral-800 text-base sm:text-lg truncate group-hover:text-gabon-green transition-colors">{{ project.name }}</h3>
                <BaseBadge v-if="project.verified" variant="green" size="sm" class="hidden sm:inline-flex">Verifie</BaseBadge>
              </div>
              <p class="text-sm text-neutral-500 line-clamp-1">{{ project.description }}</p>
            </div>

            <!-- Stats (desktop) -->
            <div class="hidden md:flex items-center gap-4 lg:gap-6">
              <div class="text-center">
                <p class="text-lg lg:text-xl font-display font-bold text-gabon-green">{{ formatAmount(project.fundingNeeded) }}</p>
                <p class="text-xs text-neutral-500">FCFA</p>
              </div>
              <BaseBadge variant="default">{{ project.sector }}</BaseBadge>
              <BaseBadge :variant="getStageVariant(project.stage)">{{ project.stage }}</BaseBadge>
            </div>

            <!-- Arrow -->
            <svg class="w-5 h-5 text-neutral-300 group-hover:text-gabon-green group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>

          <!-- Mobile stats -->
          <div class="flex items-center gap-2 mt-3 md:hidden">
            <span class="text-sm font-semibold text-gabon-green">{{ formatAmount(project.fundingNeeded) }} FCFA</span>
            <span class="text-neutral-300">|</span>
            <span class="text-xs text-neutral-500">{{ project.sector }}</span>
            <span class="text-neutral-300">|</span>
            <span class="text-xs text-neutral-500">{{ project.stage }}</span>
          </div>
        </router-link>
      </div>

      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="text-center py-16 sm:py-20">
        <div class="w-20 h-20 bg-neutral-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
        <h3 class="text-xl font-display font-bold text-neutral-800 mb-2">Aucun projet trouve</h3>
        <p class="text-neutral-500 mb-6 max-w-md mx-auto">Essayez de modifier vos filtres de recherche ou explorez d'autres categories</p>
        <BaseButton @click="clearFilters" variant="outline">
          Reinitialiser les filtres
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseBadge from '@/components/common/BaseBadge.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseSelect from '@/components/common/BaseSelect.vue'
import ProjectCard from '@/components/features/ProjectCard.vue'
import { startups } from '@/data/mockStartups.js'

const userType = ref(localStorage.getItem('userType') || 'investor')

const search = ref('')
const selectedSector = ref('')
const selectedStage = ref('')
const viewMode = ref('grid')

const sectorOptions = [
  { value: 'Agritech', label: 'Agritech' },
  { value: 'Fintech', label: 'Fintech' },
  { value: 'Logistique', label: 'Logistique' },
  { value: 'EdTech', label: 'EdTech' },
  { value: 'Technologies', label: 'Technologies' },
  { value: 'Bois', label: 'Bois' }
]

const stageOptions = [
  { value: 'Pre-seed', label: 'Pre-seed' },
  { value: 'Seed', label: 'Seed' },
  { value: 'Serie A', label: 'Serie A' },
  { value: 'Serie B', label: 'Serie B' },
  { value: 'Croissance', label: 'Croissance' }
]

const hasActiveFilters = computed(() => selectedSector.value || selectedStage.value)

const filteredProjects = computed(() => {
  return startups.filter(project => {
    const matchesSearch = !search.value ||
      project.name.toLowerCase().includes(search.value.toLowerCase()) ||
      project.description.toLowerCase().includes(search.value.toLowerCase()) ||
      project.sector.toLowerCase().includes(search.value.toLowerCase())

    const matchesSector = !selectedSector.value || project.sector === selectedSector.value
    const matchesStage = !selectedStage.value || project.stage === selectedStage.value

    return matchesSearch && matchesSector && matchesStage
  })
})

const clearFilters = () => {
  selectedSector.value = ''
  selectedStage.value = ''
  search.value = ''
}

const formatAmount = (amount) => {
  if (amount >= 1000000000) return (amount / 1000000000).toFixed(1) + ' Md'
  if (amount >= 1000000) return (amount / 1000000).toFixed(0) + ' M'
  return amount.toLocaleString('fr-FR')
}

const getStageVariant = (stage) => {
  const variants = {
    'Pre-seed': 'default',
    'Seed': 'info',
    'Serie A': 'success',
    'Serie B': 'green',
    'Croissance': 'yellow'
  }
  return variants[stage] || 'default'
}
</script>
