<template>
  <div class="space-y-6">
    <!-- Welcome Header -->
    <div class="bg-gradient-to-r from-gabon-green to-gabon-green-dark rounded-2xl p-6 text-white">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-white/80 text-sm">Bienvenue</p>
          <h1 class="text-2xl font-bold">{{ companyName }}</h1>
          <p class="text-white/70 mt-1 flex items-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Profil verifie
          </p>
        </div>
        <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        label="Interets recus"
        :value="8"
        :change="25"
        variant="green"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </template>
      </StatCard>

      <StatCard
        label="Messages"
        :value="3"
        variant="blue"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        </template>
      </StatCard>

      <StatCard
        label="RDV a venir"
        :value="2"
        variant="yellow"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </template>
      </StatCard>
    </div>

    <!-- Quick Actions -->
    <BaseCard title="Actions rapides">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <router-link to="/my-projects/new" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-gabon-green/5 transition-colors group">
          <div class="w-12 h-12 bg-gabon-green/10 rounded-xl flex items-center justify-center group-hover:bg-gabon-green group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-gabon-green group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Nouveau projet</span>
        </router-link>

        <router-link to="/interests" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-pink-50 transition-colors group">
          <div class="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center group-hover:bg-pink-500 group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-pink-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Voir interets</span>
        </router-link>

        <router-link to="/investors" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-gabon-blue/5 transition-colors group">
          <div class="w-12 h-12 bg-gabon-blue/10 rounded-xl flex items-center justify-center group-hover:bg-gabon-blue group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-gabon-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Investisseurs</span>
        </router-link>

        <router-link to="/messages" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-purple-50 transition-colors group">
          <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Messages</span>
        </router-link>
      </div>
    </BaseCard>

    <div class="grid lg:grid-cols-2 gap-6">
      <!-- Calls for Projects -->
      <BaseCard title="Appels a projets ouverts">
        <template #actions>
          <router-link to="/calls" class="text-sm font-medium text-gabon-green hover:text-gabon-green-dark">
            Voir tous
          </router-link>
        </template>

        <div class="space-y-4">
          <div
            v-for="call in callsForProjects"
            :key="call.id"
            class="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-100"
          >
            <div class="flex items-start justify-between mb-2">
              <div>
                <h4 class="font-semibold text-neutral-800">{{ call.title }}</h4>
                <p class="text-sm text-neutral-500">{{ call.investor }}</p>
              </div>
              <BaseBadge variant="info" size="sm">{{ call.sector }}</BaseBadge>
            </div>
            <div class="flex items-center gap-4 text-xs text-neutral-500 mb-3">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ formatAmount(call.amountMin) }} - {{ formatAmount(call.amountMax) }}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                {{ call.deadline }}
              </span>
            </div>
            <BaseButton size="sm" block>Postuler</BaseButton>
          </div>
        </div>
      </BaseCard>

      <!-- Recent Notifications -->
      <BaseCard title="Alertes recentes">
        <template #actions>
          <router-link to="/notifications" class="text-sm font-medium text-gabon-green hover:text-gabon-green-dark">
            Voir toutes
          </router-link>
        </template>

        <div class="space-y-3">
          <div
            v-for="notif in notifications"
            :key="notif.id"
            class="flex items-start gap-3 p-3 rounded-xl transition-colors"
            :class="notif.unread ? 'bg-gabon-green/5 border-l-4 border-gabon-green' : 'bg-neutral-50'"
          >
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              :class="notificationIconBg(notif.type)"
            >
              <component :is="notificationIcon(notif.type)" class="w-5 h-5" :class="notificationIconColor(notif.type)" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm text-neutral-800 font-medium">{{ notif.title }}</p>
              <p class="text-xs text-neutral-500 truncate">{{ notif.message }}</p>
              <p class="text-xs text-neutral-400 mt-1">Il y a {{ notif.time }}</p>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>

    <!-- Suggested Investors -->
    <BaseCard title="Investisseurs suggeres">
      <template #actions>
        <router-link to="/investors" class="text-sm font-medium text-gabon-green hover:text-gabon-green-dark">
          Voir tous
        </router-link>
      </template>

      <div class="grid md:grid-cols-3 gap-4">
        <div
          v-for="investor in suggestedInvestors"
          :key="investor.id"
          class="p-4 bg-neutral-50 rounded-xl text-center card-hover cursor-pointer"
        >
          <div class="w-14 h-14 bg-gabon-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
            <svg class="w-7 h-7 text-gabon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h4 class="font-semibold text-neutral-800">{{ investor.name }}</h4>
          <p class="text-xs text-neutral-500 mb-3">{{ investor.type }}</p>
          <router-link :to="`/investors/${investor.id}`" class="text-sm font-medium text-gabon-green hover:text-gabon-green-dark">
            Voir profil
          </router-link>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref, h } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseBadge from '@/components/common/BaseBadge.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import StatCard from '@/components/features/StatCard.vue'
import { investors } from '@/data/mockInvestors.js'
import { callsForProjects } from '@/data/mockProjects.js'

const companyName = ref(localStorage.getItem('userName') || 'AgriGabon Tech')

const suggestedInvestors = investors.slice(0, 3)

const notifications = ref([
  { id: 1, type: 'interest', title: 'Nouvel interet', message: 'BGD Capital s\'interesse a votre projet', time: '5 min', unread: true },
  { id: 2, type: 'message', title: 'Message recu', message: 'BGFI Ventures vous a envoye un message', time: '1h', unread: true },
  { id: 3, type: 'rdv', title: 'RDV confirme', message: 'Gabon Angels - Demain a 14h00', time: '2h', unread: false },
  { id: 4, type: 'system', title: 'Verification KYC', message: 'Votre profil a ete verifie avec succes', time: 'Hier', unread: false }
])

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + ' Md'
  }
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(0) + ' M'
  }
  return amount.toLocaleString('fr-FR')
}

const notificationIconBg = (type) => {
  const colors = {
    interest: 'bg-pink-100',
    message: 'bg-blue-100',
    rdv: 'bg-green-100',
    system: 'bg-neutral-100'
  }
  return colors[type] || 'bg-neutral-100'
}

const notificationIconColor = (type) => {
  const colors = {
    interest: 'text-pink-600',
    message: 'text-blue-600',
    rdv: 'text-green-600',
    system: 'text-neutral-600'
  }
  return colors[type] || 'text-neutral-600'
}

const notificationIcon = (type) => {
  const icons = {
    interest: {
      render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })
      ])
    },
    message: {
      render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' })
      ])
    },
    rdv: {
      render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' })
      ])
    },
    system: {
      render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' })
      ])
    }
  }
  return icons[type] || icons.system
}
</script>
