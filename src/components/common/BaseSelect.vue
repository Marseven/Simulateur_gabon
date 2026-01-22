<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-sm font-medium text-neutral-700 mb-1.5">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div class="relative">
      <select
        :id="id"
        :value="modelValue"
        :disabled="disabled"
        @change="$emit('update:modelValue', $event.target.value)"
        :class="[
          'w-full rounded-lg border transition-colors duration-200 appearance-none',
          'focus:outline-none focus:ring-2 focus:ring-gabon-green/20 focus:border-gabon-green',
          error ? 'border-red-300 bg-red-50' : 'border-neutral-300 bg-white',
          disabled && 'bg-neutral-100 cursor-not-allowed',
          'pl-4 pr-10 py-2.5',
          'text-sm text-neutral-800',
          !modelValue && 'text-neutral-400'
        ]"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <!-- Chevron icon -->
      <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>

    <!-- Helper text / Error -->
    <p v-if="error" class="mt-1.5 text-sm text-red-600 flex items-center gap-1">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
      </svg>
      {{ error }}
    </p>
    <p v-else-if="hint" class="mt-1.5 text-sm text-neutral-500">{{ hint }}</p>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Selectionnez...'
  },
  options: {
    type: Array,
    default: () => []
    // [{ value: 'val', label: 'Label' }]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: () => `select-${Math.random().toString(36).substr(2, 9)}`
  }
})

defineEmits(['update:modelValue'])
</script>
