<template>
  <div
    :class="[
      'bg-white rounded-2xl sm:rounded-3xl border border-neutral-100 shadow-sm',
      hover && 'card-hover cursor-pointer',
      padding && 'p-4 sm:p-5 lg:p-6',
      className
    ]"
  >
    <!-- Header -->
    <div v-if="$slots.header || title" class="flex items-center justify-between gap-4" :class="{ 'mb-4 sm:mb-5': $slots.default }">
      <div v-if="$slots.header">
        <slot name="header" />
      </div>
      <div v-else-if="title">
        <h3 class="text-base sm:text-lg font-display font-bold text-neutral-800">{{ title }}</h3>
        <p v-if="subtitle" class="text-xs sm:text-sm text-neutral-500 mt-0.5">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.actions" class="flex-shrink-0">
        <slot name="actions" />
      </div>
    </div>

    <!-- Content -->
    <slot />

    <!-- Footer -->
    <div v-if="$slots.footer" class="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-neutral-100">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  hover: {
    type: Boolean,
    default: false
  },
  padding: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  }
})
</script>
