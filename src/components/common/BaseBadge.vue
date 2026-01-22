<template>
  <span :class="badgeClasses">
    <span v-if="dot" class="w-1.5 h-1.5 rounded-full mr-1.5" :class="dotColor"></span>
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'success', 'warning', 'danger', 'info', 'green', 'yellow', 'blue'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  dot: {
    type: Boolean,
    default: false
  }
})

const badgeClasses = computed(() => {
  const base = ['inline-flex items-center font-medium rounded-full']

  // Size
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm'
  }
  base.push(sizes[props.size])

  // Variant
  const variants = {
    default: 'bg-neutral-100 text-neutral-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
    green: 'bg-gabon-green/10 text-gabon-green',
    yellow: 'bg-gabon-yellow/20 text-gabon-yellow-dark',
    blue: 'bg-gabon-blue/10 text-gabon-blue'
  }
  base.push(variants[props.variant])

  return base.join(' ')
})

const dotColor = computed(() => {
  const colors = {
    default: 'bg-neutral-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
    green: 'bg-gabon-green',
    yellow: 'bg-gabon-yellow',
    blue: 'bg-gabon-blue'
  }
  return colors[props.variant]
})
</script>
