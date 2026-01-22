<template>
  <div :class="['rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6', bgClass]">
    <div class="flex items-start justify-between gap-3">
      <div class="min-w-0 flex-1">
        <p class="text-xs sm:text-sm font-medium truncate" :class="labelClass">{{ label }}</p>
        <p class="text-2xl sm:text-3xl font-display font-bold mt-1 sm:mt-2" :class="valueClass">
          {{ formattedValue }}
          <span v-if="suffix" class="text-base sm:text-lg font-normal" :class="labelClass">{{ suffix }}</span>
        </p>
        <p v-if="change" class="text-xs sm:text-sm mt-1.5 sm:mt-2 flex items-center gap-1" :class="changeClass">
          <svg v-if="change > 0" class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 14l5-5 5 5H7z"/>
          </svg>
          <svg v-else class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5H7z"/>
          </svg>
          <span class="hidden sm:inline">{{ Math.abs(change) }}% vs mois dernier</span>
          <span class="sm:hidden">{{ Math.abs(change) }}%</span>
        </p>
      </div>
      <div :class="['w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0', iconBgClass]">
        <slot name="icon">
          <svg class="w-5 h-5 sm:w-6 sm:h-6" :class="iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
          </svg>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [Number, String],
    required: true
  },
  suffix: {
    type: String,
    default: ''
  },
  change: {
    type: Number,
    default: null
  },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'green', 'blue', 'yellow'].includes(v)
  }
})

const formattedValue = computed(() => {
  if (typeof props.value === 'number') {
    return props.value.toLocaleString('fr-FR')
  }
  return props.value
})

const bgClass = computed(() => {
  const classes = {
    default: 'bg-white border border-neutral-200',
    green: 'bg-gabon-green/5 border border-gabon-green/20',
    blue: 'bg-gabon-blue/5 border border-gabon-blue/20',
    yellow: 'bg-gabon-yellow/10 border border-gabon-yellow/30'
  }
  return classes[props.variant]
})

const labelClass = computed(() => {
  const classes = {
    default: 'text-neutral-500',
    green: 'text-gabon-green/70',
    blue: 'text-gabon-blue/70',
    yellow: 'text-gabon-yellow-dark/70'
  }
  return classes[props.variant]
})

const valueClass = computed(() => {
  const classes = {
    default: 'text-neutral-800',
    green: 'text-gabon-green',
    blue: 'text-gabon-blue',
    yellow: 'text-gabon-yellow-dark'
  }
  return classes[props.variant]
})

const iconBgClass = computed(() => {
  const classes = {
    default: 'bg-neutral-100',
    green: 'bg-gabon-green/10',
    blue: 'bg-gabon-blue/10',
    yellow: 'bg-gabon-yellow/20'
  }
  return classes[props.variant]
})

const iconClass = computed(() => {
  const classes = {
    default: 'text-neutral-600',
    green: 'text-gabon-green',
    blue: 'text-gabon-blue',
    yellow: 'text-gabon-yellow-dark'
  }
  return classes[props.variant]
})

const changeClass = computed(() => {
  if (props.change > 0) return 'text-green-600'
  if (props.change < 0) return 'text-red-600'
  return 'text-neutral-500'
})
</script>
