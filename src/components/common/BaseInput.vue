<template>
  <div class="w-full">
    <label v-if="label" :for="id" class="block text-sm font-medium text-neutral-700 mb-1.5">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div class="relative">
      <!-- Icon left -->
      <div v-if="$slots.iconLeft" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
        <slot name="iconLeft" />
      </div>

      <component
        :is="type === 'textarea' ? 'textarea' : 'input'"
        :id="id"
        :type="type !== 'textarea' ? type : undefined"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :rows="type === 'textarea' ? rows : undefined"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
        :class="[
          'w-full rounded-lg border transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-gabon-green/20 focus:border-gabon-green',
          error ? 'border-red-300 bg-red-50' : 'border-neutral-300 bg-white',
          disabled && 'bg-neutral-100 cursor-not-allowed',
          $slots.iconLeft ? 'pl-10' : 'pl-4',
          $slots.iconRight ? 'pr-10' : 'pr-4',
          type === 'textarea' ? 'py-3 resize-none' : 'py-2.5',
          'text-sm text-neutral-800 placeholder:text-neutral-400'
        ]"
      />

      <!-- Icon right -->
      <div v-if="$slots.iconRight" class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
        <slot name="iconRight" />
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
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
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
  rows: {
    type: Number,
    default: 4
  },
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`
  }
})

defineEmits(['update:modelValue', 'blur', 'focus'])
</script>
