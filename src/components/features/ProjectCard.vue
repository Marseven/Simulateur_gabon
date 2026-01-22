<template>
  <router-link
    :to="`/projects/${project.id}`"
    class="group block bg-white rounded-2xl sm:rounded-3xl border border-neutral-100 overflow-hidden card-hover"
  >
    <!-- Header gradient bar -->
    <div class="h-1.5 sm:h-2" :class="sectorGradient"></div>

    <div class="p-4 sm:p-5 lg:p-6">
      <!-- Top row: Icon + Name + Badge -->
      <div class="flex items-start justify-between gap-3 mb-3 sm:mb-4">
        <div class="flex items-center gap-3 min-w-0">
          <!-- Sector Icon -->
          <div
            class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
            :class="[sectorBg, sectorShadow]"
          >
            <component :is="sectorIcon" class="w-5 h-5 sm:w-6 sm:h-6" :class="sectorIconColor" />
          </div>
          <!-- Name & Sector -->
          <div class="min-w-0">
            <h3 class="font-display font-bold text-neutral-800 text-base sm:text-lg truncate group-hover:text-gabon-green transition-colors">
              {{ project.name }}
            </h3>
            <p class="text-xs sm:text-sm text-neutral-500 truncate">{{ project.sector }}</p>
          </div>
        </div>
        <!-- Verified Badge -->
        <BaseBadge v-if="project.verified" variant="green" size="sm" class="flex-shrink-0">
          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span class="hidden sm:inline">Verifie</span>
        </BaseBadge>
      </div>

      <!-- Description -->
      <p class="text-sm text-neutral-600 line-clamp-2 mb-4 leading-relaxed">{{ project.description }}</p>

      <!-- Stats Grid -->
      <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
        <!-- Funding -->
        <div class="text-center p-2.5 sm:p-3 bg-gradient-to-br from-gabon-green/5 to-gabon-green/10 rounded-xl sm:rounded-2xl">
          <p class="text-base sm:text-lg lg:text-xl font-display font-bold text-gabon-green">{{ formatAmount(project.fundingNeeded) }}</p>
          <p class="text-[10px] sm:text-xs text-neutral-500 mt-0.5">Recherche</p>
        </div>
        <!-- Team -->
        <div class="text-center p-2.5 sm:p-3 bg-gradient-to-br from-gabon-blue/5 to-gabon-blue/10 rounded-xl sm:rounded-2xl">
          <p class="text-base sm:text-lg lg:text-xl font-display font-bold text-gabon-blue">{{ project.team }}</p>
          <p class="text-[10px] sm:text-xs text-neutral-500 mt-0.5">Equipe</p>
        </div>
        <!-- Interests -->
        <div class="text-center p-2.5 sm:p-3 bg-gradient-to-br from-gabon-yellow/10 to-gabon-yellow/20 rounded-xl sm:rounded-2xl">
          <p class="text-base sm:text-lg lg:text-xl font-display font-bold text-gabon-yellow-dark">{{ project.interests || 0 }}</p>
          <p class="text-[10px] sm:text-xs text-neutral-500 mt-0.5">Interets</p>
        </div>
      </div>

      <!-- Footer: Location + Stage -->
      <div class="flex items-center justify-between pt-3 sm:pt-4 border-t border-neutral-100">
        <div class="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-500">
          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span class="truncate">{{ project.location }}</span>
        </div>
        <BaseBadge :variant="stageVariant" size="sm">{{ project.stage }}</BaseBadge>
      </div>
    </div>

    <!-- Hover overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-gabon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
  </router-link>
</template>

<script setup>
import { computed, h } from 'vue'
import BaseBadge from '@/components/common/BaseBadge.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + 'Md'
  }
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(0) + 'M'
  }
  if (amount >= 1000) {
    return (amount / 1000).toFixed(0) + 'K'
  }
  return amount.toLocaleString('fr-FR')
}

// Sector styling mappings
const sectorConfig = {
  'Technologies': {
    gradient: 'bg-gradient-to-r from-blue-500 to-blue-600',
    bg: 'bg-blue-100',
    shadow: 'group-hover:shadow-blue-500/30',
    iconColor: 'text-blue-600'
  },
  'Agriculture': {
    gradient: 'bg-gradient-to-r from-green-500 to-green-600',
    bg: 'bg-green-100',
    shadow: 'group-hover:shadow-green-500/30',
    iconColor: 'text-green-600'
  },
  'Agritech': {
    gradient: 'bg-gradient-to-r from-emerald-500 to-green-600',
    bg: 'bg-emerald-100',
    shadow: 'group-hover:shadow-emerald-500/30',
    iconColor: 'text-emerald-600'
  },
  'Fintech': {
    gradient: 'bg-gradient-to-r from-purple-500 to-purple-600',
    bg: 'bg-purple-100',
    shadow: 'group-hover:shadow-purple-500/30',
    iconColor: 'text-purple-600'
  },
  'Logistique': {
    gradient: 'bg-gradient-to-r from-orange-500 to-orange-600',
    bg: 'bg-orange-100',
    shadow: 'group-hover:shadow-orange-500/30',
    iconColor: 'text-orange-600'
  },
  'EdTech': {
    gradient: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
    bg: 'bg-cyan-100',
    shadow: 'group-hover:shadow-cyan-500/30',
    iconColor: 'text-cyan-600'
  },
  'Industrie': {
    gradient: 'bg-gradient-to-r from-gray-500 to-gray-600',
    bg: 'bg-gray-100',
    shadow: 'group-hover:shadow-gray-500/30',
    iconColor: 'text-gray-600'
  },
  'Bois': {
    gradient: 'bg-gradient-to-r from-amber-600 to-amber-700',
    bg: 'bg-amber-100',
    shadow: 'group-hover:shadow-amber-500/30',
    iconColor: 'text-amber-700'
  },
  'GreenTech': {
    gradient: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    bg: 'bg-emerald-100',
    shadow: 'group-hover:shadow-emerald-500/30',
    iconColor: 'text-emerald-600'
  }
}

const defaultConfig = {
  gradient: 'bg-gradient-to-r from-gabon-green to-gabon-green-dark',
  bg: 'bg-gabon-green/10',
  shadow: 'group-hover:shadow-gabon-green/30',
  iconColor: 'text-gabon-green'
}

const currentSectorConfig = computed(() => sectorConfig[props.project.sector] || defaultConfig)

const sectorGradient = computed(() => currentSectorConfig.value.gradient)
const sectorBg = computed(() => currentSectorConfig.value.bg)
const sectorShadow = computed(() => currentSectorConfig.value.shadow)
const sectorIconColor = computed(() => currentSectorConfig.value.iconColor)

// Sector icons
const sectorIcons = {
  'Technologies': {
    render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
    ])
  },
  'Agriculture': {
    render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  },
  'Agritech': {
    render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
    ])
  },
  'Fintech': {
    render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' })
    ])
  },
  'Logistique': {
    render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' })
    ])
  },
  'EdTech': {
    render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' })
    ])
  },
  'default': {
    render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
    ])
  }
}

const sectorIcon = computed(() => sectorIcons[props.project.sector] || sectorIcons['default'])

const stageVariant = computed(() => {
  const variants = {
    'Pre-seed': 'default',
    'Seed': 'info',
    'Serie A': 'success',
    'Serie B': 'green',
    'Croissance': 'yellow'
  }
  return variants[props.project.stage] || 'default'
})
</script>
