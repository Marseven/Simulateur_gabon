<template>
  <component :is="dashboardComponent" />
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'

const userType = computed(() => localStorage.getItem('userType') || 'startup')

const dashboardComponent = computed(() => {
  switch (userType.value) {
    case 'investor':
      return defineAsyncComponent(() => import('@/views/dashboard/InvestorDashboard.vue'))
    case 'supplier':
      return defineAsyncComponent(() => import('@/views/dashboard/SupplierDashboard.vue'))
    default:
      return defineAsyncComponent(() => import('@/views/dashboard/StartupDashboard.vue'))
  }
})
</script>
