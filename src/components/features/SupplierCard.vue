<template>
  <router-link
    :to="`/suppliers/${supplier.id}`"
    class="block bg-white rounded-xl border border-neutral-200 overflow-hidden card-hover"
  >
    <div class="p-5">
      <!-- Top row -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 rounded-xl flex items-center justify-center" :class="categoryBg">
            <component :is="categoryIcon" class="w-7 h-7" :class="categoryIconColor" />
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-semibold text-neutral-800">{{ supplier.name }}</h3>
              <svg v-if="supplier.verified" class="w-4 h-4 text-gabon-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <p class="text-sm text-neutral-500">{{ supplier.category }}</p>
          </div>
        </div>
      </div>

      <!-- Rating -->
      <div class="flex items-center gap-2 mb-4">
        <div class="flex items-center gap-1">
          <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= Math.floor(supplier.rating) ? 'text-gabon-yellow' : 'text-neutral-200'" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <span class="text-sm font-medium text-neutral-800">{{ supplier.rating }}</span>
        <span class="text-sm text-neutral-500">({{ supplier.reviews }} avis)</span>
      </div>

      <!-- Services -->
      <div class="flex flex-wrap gap-2 mb-4">
        <BaseBadge
          v-for="service in supplier.services.slice(0, 3)"
          :key="service"
          variant="default"
          size="sm"
        >
          {{ service }}
        </BaseBadge>
        <BaseBadge v-if="supplier.services.length > 3" variant="default" size="sm">
          +{{ supplier.services.length - 3 }}
        </BaseBadge>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-3 border-t border-neutral-100">
        <div class="text-sm">
          <span class="text-neutral-500">A partir de </span>
          <span class="font-semibold text-neutral-800">{{ formatPrice(supplier.price) }} FCFA</span>
        </div>
        <span class="text-sm font-medium text-gabon-green">Voir profil</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed, h } from 'vue'
import BaseBadge from '@/components/common/BaseBadge.vue'

const props = defineProps({
  supplier: {
    type: Object,
    required: true
  }
})

const formatPrice = (price) => {
  return price.toLocaleString('fr-FR')
}

const categoryBg = computed(() => {
  const colors = {
    'Juridique': 'bg-purple-100',
    'IT': 'bg-blue-100',
    'Comptabilite': 'bg-green-100',
    'Marketing': 'bg-pink-100',
    'RH': 'bg-orange-100',
    'Formation': 'bg-cyan-100'
  }
  return colors[props.supplier.category] || 'bg-gabon-yellow/20'
})

const categoryIconColor = computed(() => {
  const colors = {
    'Juridique': 'text-purple-600',
    'IT': 'text-blue-600',
    'Comptabilite': 'text-green-600',
    'Marketing': 'text-pink-600',
    'RH': 'text-orange-600',
    'Formation': 'text-cyan-600'
  }
  return colors[props.supplier.category] || 'text-gabon-yellow-dark'
})

const categoryIcon = computed(() => {
  const icons = {
    'Juridique': {
      render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' })
      ])
    },
    'IT': {
      render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
      ])
    },
    'Comptabilite': {
      render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' })
      ])
    },
    'Marketing': {
      render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' })
      ])
    }
  }
  return icons[props.supplier.category] || icons['IT']
})
</script>
