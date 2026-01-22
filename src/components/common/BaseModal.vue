<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeOnBackdrop && close()"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <!-- Modal Content -->
        <div
          :class="[
            'relative bg-white rounded-2xl shadow-2xl w-full animate-scale',
            sizeClasses
          ]"
        >
          <!-- Close button -->
          <button
            v-if="showClose"
            @click="close"
            class="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors z-10"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Header -->
          <div v-if="$slots.header || title" class="px-6 pt-6 pb-4">
            <slot name="header">
              <div class="flex items-start gap-4">
                <div v-if="icon" :class="['w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0', iconBgClass]">
                  <component :is="icon" :class="['w-6 h-6', iconClass]" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-neutral-800">{{ title }}</h3>
                  <p v-if="description" class="text-sm text-neutral-500 mt-1">{{ description }}</p>
                </div>
              </div>
            </slot>
          </div>

          <!-- Body -->
          <div class="px-6 py-4">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="px-6 py-4 bg-neutral-50 rounded-b-2xl border-t border-neutral-100">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg', 'xl', 'full'].includes(v)
  },
  showClose: {
    type: Boolean,
    default: true
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  },
  icon: {
    type: Object,
    default: null
  },
  iconVariant: {
    type: String,
    default: 'success',
    validator: (v) => ['success', 'warning', 'danger', 'info'].includes(v)
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-4xl'
  }
  return sizes[props.size]
})

const iconBgClass = computed(() => {
  const classes = {
    success: 'bg-green-100',
    warning: 'bg-yellow-100',
    danger: 'bg-red-100',
    info: 'bg-blue-100'
  }
  return classes[props.iconVariant]
})

const iconClass = computed(() => {
  const classes = {
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
    info: 'text-blue-600'
  }
  return classes[props.iconVariant]
})

// Lock body scroll when modal is open
watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .animate-scale,
.modal-leave-to .animate-scale {
  transform: scale(0.95);
}

@keyframes scale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale {
  animation: scale 0.2s ease-out forwards;
}
</style>
