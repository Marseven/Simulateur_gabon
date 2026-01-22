<template>
  <router-link
    :to="`/investors/${investor.id}`"
    class="block bg-white rounded-xl border border-neutral-200 overflow-hidden card-hover"
  >
    <div class="p-5">
      <!-- Top row -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 rounded-xl bg-gabon-blue/10 flex items-center justify-center">
            <svg class="w-7 h-7 text-gabon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-neutral-800">{{ investor.name }}</h3>
            <p class="text-sm text-neutral-500">{{ investor.type }}</p>
          </div>
        </div>
      </div>

      <!-- Description -->
      <p class="text-sm text-neutral-600 line-clamp-2 mb-4">{{ investor.description }}</p>

      <!-- Sectors -->
      <div class="flex flex-wrap gap-2 mb-4">
        <BaseBadge
          v-for="sector in investor.sectors.slice(0, 3)"
          :key="sector"
          variant="blue"
          size="sm"
        >
          {{ sector }}
        </BaseBadge>
        <BaseBadge v-if="investor.sectors.length > 3" variant="default" size="sm">
          +{{ investor.sectors.length - 3 }}
        </BaseBadge>
      </div>

      <!-- Ticket info -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="p-3 bg-neutral-50 rounded-lg">
          <p class="text-xs text-neutral-500 mb-1">Ticket min.</p>
          <p class="font-semibold text-neutral-800">{{ formatAmount(investor.ticketMin) }} FCFA</p>
        </div>
        <div class="p-3 bg-neutral-50 rounded-lg">
          <p class="text-xs text-neutral-500 mb-1">Ticket max.</p>
          <p class="font-semibold text-neutral-800">{{ formatAmount(investor.ticketMax) }} FCFA</p>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between pt-3 border-t border-neutral-100">
        <div class="flex items-center gap-2 text-sm text-neutral-500">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          {{ investor.activeDeals }} deals actifs
        </div>
        <span class="text-sm font-medium text-gabon-blue">Voir profil</span>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import BaseBadge from '@/components/common/BaseBadge.vue'

defineProps({
  investor: {
    type: Object,
    required: true
  }
})

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + ' Md'
  }
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(0) + ' M'
  }
  return amount.toLocaleString('fr-FR')
}
</script>
