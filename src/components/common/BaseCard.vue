<template>
  <div
    :class="[
      'bg-white rounded-xl border border-neutral-200',
      hover && 'card-hover cursor-pointer',
      padding && 'p-6',
      className
    ]"
  >
    <!-- Header -->
    <div v-if="$slots.header || title" class="flex items-center justify-between" :class="{ 'mb-4': $slots.default }">
      <div v-if="$slots.header">
        <slot name="header" />
      </div>
      <div v-else-if="title">
        <h3 class="text-lg font-semibold text-neutral-800">{{ title }}</h3>
        <p v-if="subtitle" class="text-sm text-neutral-500 mt-0.5">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.actions">
        <slot name="actions" />
      </div>
    </div>

    <!-- Content -->
    <slot />

    <!-- Footer -->
    <div v-if="$slots.footer" class="mt-4 pt-4 border-t border-neutral-100">
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
