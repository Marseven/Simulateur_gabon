<template>
  <div class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center">
      <div class="flex items-center justify-center gap-2 mb-6">
        <div class="w-3 h-12 bg-gabon-green rounded-sm"></div>
        <div class="w-3 h-12 bg-gabon-yellow rounded-sm"></div>
        <div class="w-3 h-12 bg-gabon-blue rounded-sm"></div>
      </div>
      <h1 class="text-6xl font-bold text-neutral-800 mb-4">404</h1>
      <p class="text-xl text-neutral-600 mb-2">Page non trouvee</p>
      <p class="text-neutral-500 mb-8">La page que vous recherchez n'existe pas ou a ete deplacee.</p>
      <BaseButton to="/" size="lg">
        <template #iconLeft>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
        </template>
        Retour a l'accueil
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue'
</script>
