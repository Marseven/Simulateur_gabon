<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold text-neutral-800">Notifications</h1>

    <div class="space-y-3">
      <div
        v-for="notif in notifications"
        :key="notif.id"
        class="bg-white rounded-xl border p-4 flex items-start gap-4"
        :class="notif.unread ? 'border-l-4 border-l-gabon-green border-neutral-200' : 'border-neutral-200'"
      >
        <div
          class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          :class="getNotifStyle(notif.type).bg"
        >
          <svg class="w-6 h-6" :class="getNotifStyle(notif.type).icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getNotifStyle(notif.type).path"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-semibold text-neutral-800">{{ notif.title }}</p>
          <p class="text-sm text-neutral-500">{{ notif.message }}</p>
          <p class="text-xs text-neutral-400 mt-1">Il y a {{ notif.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const notifications = ref([
  { id: 1, type: 'interest', title: 'Nouvel interet', message: 'BGD Capital s\'interesse a votre projet AgriGabon Tech', time: '5 min', unread: true },
  { id: 2, type: 'message', title: 'Message recu', message: 'BGFI Ventures vous a envoye un message', time: '1h', unread: true },
  { id: 3, type: 'rdv', title: 'RDV confirme', message: 'Gabon Angels - Demain a 14h00', time: '2h', unread: false },
  { id: 4, type: 'system', title: 'Verification KYC', message: 'Votre profil a ete verifie avec succes', time: 'Hier', unread: false },
  { id: 5, type: 'interest', title: 'Nouvel interet', message: 'Africa Green Fund s\'interesse a GreenWood', time: '2 jours', unread: false }
])

const getNotifStyle = (type) => {
  const styles = {
    interest: { bg: 'bg-pink-100', icon: 'text-pink-600', path: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    message: { bg: 'bg-blue-100', icon: 'text-blue-600', path: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    rdv: { bg: 'bg-green-100', icon: 'text-green-600', path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    system: { bg: 'bg-neutral-100', icon: 'text-neutral-600', path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
  }
  return styles[type] || styles.system
}
</script>
