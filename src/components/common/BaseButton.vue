<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :type="!to ? type : undefined"
    :disabled="disabled || loading"
    :class="buttonClasses"
    class="inline-flex items-center justify-center font-medium transition-all duration-200 btn-press focus:outline-none focus:ring-2 focus:ring-offset-2"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>

    <!-- Icon left -->
    <span v-if="$slots.iconLeft && !loading" class="mr-2">
      <slot name="iconLeft" />
    </span>

    <!-- Content -->
    <slot />

    <!-- Icon right -->
    <span v-if="$slots.iconRight" class="ml-2">
      <slot name="iconRight" />
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  to: {
    type: [String, Object],
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})

const buttonClasses = computed(() => {
  const base = []

  // Size classes
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-lg gap-1.5',
    md: 'px-4 py-2.5 text-sm rounded-lg gap-2',
    lg: 'px-6 py-3 text-base rounded-xl gap-2'
  }
  base.push(sizes[props.size])

  // Variant classes
  const variants = {
    primary: 'bg-gabon-green text-white hover:bg-gabon-green-dark shadow-button focus:ring-gabon-green',
    secondary: 'bg-gabon-blue text-white hover:bg-gabon-blue-dark focus:ring-gabon-blue',
    outline: 'border-2 border-gabon-green text-gabon-green hover:bg-gabon-green hover:text-white focus:ring-gabon-green',
    ghost: 'text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  }
  base.push(variants[props.variant])

  // State classes
  if (props.disabled || props.loading) {
    base.push('opacity-50 cursor-not-allowed')
  }

  // Block
  if (props.block) {
    base.push('w-full')
  }

  return base.join(' ')
})
</script>
