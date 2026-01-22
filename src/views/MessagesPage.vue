<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold text-neutral-800">Messages</h1>

    <div class="space-y-3">
      <div
        v-for="message in messages"
        :key="message.id"
        class="bg-white rounded-xl border border-neutral-200 p-4 flex items-center gap-4 cursor-pointer card-hover"
      >
        <div class="w-14 h-14 bg-gabon-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
          <svg class="w-7 h-7 text-gabon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between mb-1">
            <h3 class="font-semibold text-neutral-800">{{ message.from }}</h3>
            <span class="text-xs text-neutral-400">{{ message.time }}</span>
          </div>
          <p class="text-sm text-neutral-500 truncate">{{ message.preview }}</p>
        </div>
        <span
          v-if="message.unread > 0"
          class="w-6 h-6 bg-gabon-green text-white text-xs rounded-full flex items-center justify-center font-bold flex-shrink-0"
        >
          {{ message.unread }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([
  { id: 1, from: 'BGD Capital', preview: 'Nous aimerions organiser un call pour discuter...', time: '14:30', unread: 2 },
  { id: 2, from: 'JuriConsult Gabon', preview: 'Les documents de creation sont prets.', time: '12:15', unread: 0 },
  { id: 3, from: 'BGFI Ventures', preview: 'Merci pour votre pitch deck, tres interessant.', time: 'Hier', unread: 0 }
])
</script>
