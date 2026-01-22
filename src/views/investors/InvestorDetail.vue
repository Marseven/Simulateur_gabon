<template>
  <div v-if="investor" class="space-y-6">
    <div class="bg-gradient-to-r from-gabon-blue to-gabon-blue-dark rounded-2xl p-8 text-white">
      <div class="flex items-start gap-6">
        <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        <div class="flex-1">
          <h1 class="text-2xl font-bold mb-1">{{ investor.name }}</h1>
          <p class="text-white/80">{{ investor.type }}</p>
          <div class="flex items-center gap-2 mt-2 text-sm text-white/70">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            </svg>
            {{ investor.location }}
          </div>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <BaseCard title="A propos">
          <p class="text-neutral-600">{{ investor.description }}</p>
        </BaseCard>

        <BaseCard title="Secteurs d'investissement">
          <div class="flex flex-wrap gap-2">
            <BaseBadge v-for="sector in investor.sectors" :key="sector" variant="blue" size="lg">
              {{ sector }}
            </BaseBadge>
          </div>
        </BaseCard>

        <BaseCard title="Portfolio">
          <div class="space-y-3">
            <div v-for="company in investor.portfolio" :key="company.name" class="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
              <span class="font-medium text-neutral-800">{{ company.name }}</span>
              <span class="text-gabon-green font-semibold">{{ formatAmount(company.amount) }} FCFA</span>
            </div>
            <p v-if="investor.portfolio.length === 0" class="text-neutral-500 text-center py-4">Aucune information publique</p>
          </div>
        </BaseCard>
      </div>

      <div class="space-y-6">
        <BaseCard title="Ticket d'investissement">
          <div class="space-y-4">
            <div>
              <p class="text-sm text-neutral-500">Minimum</p>
              <p class="text-xl font-bold text-neutral-800">{{ formatAmount(investor.ticketMin) }} FCFA</p>
            </div>
            <div>
              <p class="text-sm text-neutral-500">Maximum</p>
              <p class="text-xl font-bold text-neutral-800">{{ formatAmount(investor.ticketMax) }} FCFA</p>
            </div>
          </div>
        </BaseCard>

        <BaseCard>
          <BaseButton block size="lg">
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </template>
            Contacter
          </BaseButton>
        </BaseCard>

        <BaseCard title="Contact">
          <div class="space-y-3">
            <a :href="`mailto:${investor.contact.email}`" class="flex items-center gap-3 text-sm text-neutral-600 hover:text-gabon-blue">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {{ investor.contact.email }}
            </a>
            <a :href="`tel:${investor.contact.phone}`" class="flex items-center gap-3 text-sm text-neutral-600 hover:text-gabon-blue">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {{ investor.contact.phone }}
            </a>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseBadge from '@/components/common/BaseBadge.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { investors } from '@/data/mockInvestors.js'

const route = useRoute()

const investor = computed(() => {
  const id = parseInt(route.params.id)
  return investors.find(i => i.id === id)
})

const formatAmount = (amount) => {
  if (amount >= 1000000000) return (amount / 1000000000).toFixed(1) + ' Md'
  if (amount >= 1000000) return (amount / 1000000).toFixed(0) + ' M'
  return amount.toLocaleString('fr-FR')
}
</script>
