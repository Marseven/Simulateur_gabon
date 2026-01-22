<template>
  <div v-if="supplier" class="space-y-6">
    <div class="bg-gradient-to-r from-gabon-yellow-dark to-amber-600 rounded-2xl p-8 text-white">
      <div class="flex items-start gap-6">
        <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <h1 class="text-2xl font-bold">{{ supplier.name }}</h1>
            <svg v-if="supplier.verified" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p class="text-white/80">{{ supplier.category }}</p>
          <div class="flex items-center gap-2 mt-2">
            <div class="flex items-center gap-1">
              <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= Math.floor(supplier.rating) ? 'text-white' : 'text-white/40'" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span class="text-sm">{{ supplier.rating }} ({{ supplier.reviews }} avis)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <BaseCard title="Description">
          <p class="text-neutral-600">{{ supplier.description }}</p>
        </BaseCard>

        <BaseCard title="Services proposes">
          <div class="flex flex-wrap gap-2">
            <BaseBadge v-for="service in supplier.services" :key="service" variant="default" size="lg">
              {{ service }}
            </BaseBadge>
          </div>
        </BaseCard>
      </div>

      <div class="space-y-6">
        <BaseCard title="Tarifs">
          <p class="text-sm text-neutral-500 mb-1">A partir de</p>
          <p class="text-2xl font-bold text-neutral-800">{{ supplier.price.toLocaleString('fr-FR') }} FCFA</p>
        </BaseCard>

        <BaseCard>
          <BaseButton block size="lg">
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </template>
            Demander un devis
          </BaseButton>
        </BaseCard>

        <BaseCard title="Contact">
          <div class="space-y-3">
            <a :href="`mailto:${supplier.contact.email}`" class="flex items-center gap-3 text-sm text-neutral-600 hover:text-gabon-green">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {{ supplier.contact.email }}
            </a>
            <a :href="`tel:${supplier.contact.phone}`" class="flex items-center gap-3 text-sm text-neutral-600 hover:text-gabon-green">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {{ supplier.contact.phone }}
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
import { suppliers } from '@/data/mockSuppliers.js'

const route = useRoute()

const supplier = computed(() => {
  const id = parseInt(route.params.id)
  return suppliers.find(s => s.id === id)
})
</script>
