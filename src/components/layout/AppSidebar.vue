<template>
  <aside class="w-64 bg-white border-r border-neutral-200 min-h-screen flex flex-col">
    <!-- User Info -->
    <div class="p-4 border-b border-neutral-100">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full flex items-center justify-center" :class="userTypeColor">
          <component :is="userTypeIcon" class="w-5 h-5 text-white" />
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-semibold text-neutral-800 truncate">{{ userName }}</p>
          <p class="text-xs text-neutral-500">{{ userTypeLabel }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4">
      <ul class="space-y-1">
        <li v-for="item in menuItems" :key="item.path">
          <router-link
            :to="item.path"
            class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors"
            :class="isActive(item.path) ? 'bg-gabon-green/10 text-gabon-green' : 'text-neutral-600 hover:bg-neutral-100'"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
            <span
              v-if="item.badge"
              class="ml-auto px-2 py-0.5 text-xs font-semibold rounded-full"
              :class="item.badgeType === 'warning' ? 'bg-gabon-yellow text-neutral-800' : 'bg-gabon-green text-white'"
            >
              {{ item.badge }}
            </span>
          </router-link>
        </li>
      </ul>

      <!-- Section secondaire -->
      <div class="mt-8">
        <p class="px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Support</p>
        <ul class="space-y-1">
          <li>
            <a href="#" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Aide</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Parametres</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Verification Status -->
    <div class="p-4 border-t border-neutral-100">
      <div class="p-3 rounded-lg" :class="isVerified ? 'bg-gabon-green/10' : 'bg-gabon-yellow/20'">
        <div class="flex items-center gap-2 mb-1">
          <svg v-if="isVerified" class="w-4 h-4 text-gabon-green" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <svg v-else class="w-4 h-4 text-gabon-yellow-dark" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
          </svg>
          <span class="text-xs font-semibold" :class="isVerified ? 'text-gabon-green' : 'text-gabon-yellow-dark'">
            {{ isVerified ? 'Profil verifie' : 'Verification en attente' }}
          </span>
        </div>
        <p class="text-xs text-neutral-500">
          {{ isVerified ? 'Votre compte est verifie et actif.' : 'Completez votre profil pour la verification.' }}
        </p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed, h } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  userType: {
    type: String,
    default: 'startup' // startup, investor, supplier
  },
  userName: {
    type: String,
    default: 'Utilisateur'
  },
  isVerified: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()

const isActive = (path) => route.path === path || route.path.startsWith(path + '/')

// Icones pour les types d'utilisateurs
const RocketIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' })
  ])
}

const BriefcaseIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
  ])
}

const BuildingIcon = {
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })
  ])
}

const userTypeIcon = computed(() => {
  switch (props.userType) {
    case 'investor': return BriefcaseIcon
    case 'supplier': return BuildingIcon
    default: return RocketIcon
  }
})

const userTypeColor = computed(() => {
  switch (props.userType) {
    case 'investor': return 'bg-gabon-blue'
    case 'supplier': return 'bg-gabon-yellow-dark'
    default: return 'bg-gabon-green'
  }
})

const userTypeLabel = computed(() => {
  switch (props.userType) {
    case 'investor': return 'Investisseur'
    case 'supplier': return 'Fournisseur'
    default: return 'Startup / PME'
  }
})

// Menu items basés sur le type d'utilisateur
const menuItems = computed(() => {
  const baseItems = [
    {
      name: 'Tableau de bord',
      path: '/dashboard',
      icon: {
        render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' })
        ])
      }
    },
    {
      name: 'Messages',
      path: '/messages',
      badge: 3,
      icon: {
        render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' })
        ])
      }
    }
  ]

  if (props.userType === 'startup') {
    return [
      ...baseItems.slice(0, 1),
      {
        name: 'Mes projets',
        path: '/my-projects',
        icon: {
          render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z' })
          ])
        }
      },
      {
        name: 'Interets recus',
        path: '/interests',
        badge: 5,
        badgeType: 'success',
        icon: {
          render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' })
          ])
        }
      },
      {
        name: 'Explorer investisseurs',
        path: '/investors',
        icon: {
          render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
          ])
        }
      },
      ...baseItems.slice(1)
    ]
  }

  if (props.userType === 'investor') {
    return [
      ...baseItems.slice(0, 1),
      {
        name: 'Explorer projets',
        path: '/projects',
        icon: {
          render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
          ])
        }
      },
      {
        name: 'Mon pipeline',
        path: '/pipeline',
        badge: 8,
        badgeType: 'warning',
        icon: {
          render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' })
          ])
        }
      },
      {
        name: 'Appels a projets',
        path: '/calls',
        icon: {
          render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' })
          ])
        }
      },
      ...baseItems.slice(1)
    ]
  }

  // Supplier
  return [
    ...baseItems.slice(0, 1),
    {
      name: 'Mon catalogue',
      path: '/catalog',
      icon: {
        render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' })
        ])
      }
    },
    {
      name: 'Opportunites',
      path: '/opportunities',
      badge: 12,
      badgeType: 'success',
      icon: {
        render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
        ])
      }
    },
    {
      name: 'Mes missions',
      path: '/missions',
      icon: {
        render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' })
        ])
      }
    },
    ...baseItems.slice(1)
  ]
})
</script>
