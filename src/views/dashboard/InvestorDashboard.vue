<template>
  <div class="space-y-6">
    <!-- Welcome Header -->
    <div class="bg-gradient-to-r from-gabon-blue to-gabon-blue-dark rounded-2xl p-6 text-white">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-white/80 text-sm">Espace</p>
          <h1 class="text-2xl font-bold">{{ companyName }}</h1>
          <p class="text-white/70 mt-1">Fonds d'investissement</p>
        </div>
        <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard
        label="Projets vus"
        :value="24"
        variant="blue"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
        </template>
      </StatCard>

      <StatCard
        label="Dans le pipeline"
        :value="8"
        variant="green"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
          </svg>
        </template>
      </StatCard>

      <StatCard
        label="Due diligence"
        :value="2"
        variant="yellow"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
          </svg>
        </template>
      </StatCard>

      <StatCard
        label="Investis"
        :value="3"
        suffix="deals"
      >
        <template #icon>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </template>
      </StatCard>
    </div>

    <!-- Quick Actions -->
    <BaseCard title="Actions rapides">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <router-link to="/projects" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-gabon-blue/5 transition-colors group">
          <div class="w-12 h-12 bg-gabon-blue/10 rounded-xl flex items-center justify-center group-hover:bg-gabon-blue group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-gabon-blue group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Explorer projets</span>
        </router-link>

        <router-link to="/calls/new" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-purple-50 transition-colors group">
          <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-purple-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Appel a projets</span>
        </router-link>

        <router-link to="/pipeline" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-gabon-green/5 transition-colors group">
          <div class="w-12 h-12 bg-gabon-green/10 rounded-xl flex items-center justify-center group-hover:bg-gabon-green group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-gabon-green group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Mon pipeline</span>
        </router-link>

        <router-link to="/messages" class="flex flex-col items-center gap-3 p-4 bg-neutral-50 rounded-xl hover:bg-orange-50 transition-colors group">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all">
            <svg class="w-6 h-6 text-orange-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <span class="text-sm font-medium text-neutral-700">Messages</span>
        </router-link>
      </div>
    </BaseCard>

    <!-- Recommended Projects -->
    <BaseCard title="Projets recommandes">
      <template #actions>
        <router-link to="/projects" class="text-sm font-medium text-gabon-blue hover:text-gabon-blue-dark">
          Voir tous
        </router-link>
      </template>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          v-for="project in recommendedProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </BaseCard>

    <!-- Pipeline Overview -->
    <BaseCard title="Apercu du pipeline">
      <div class="flex gap-4 overflow-x-auto pb-2">
        <div
          v-for="stage in pipelineStages"
          :key="stage.name"
          class="min-w-[140px] bg-neutral-50 rounded-xl p-4 text-center"
        >
          <div class="w-3 h-3 rounded-full mx-auto mb-2" :class="stage.color"></div>
          <p class="text-2xl font-bold text-neutral-800">{{ stage.count }}</p>
          <p class="text-xs text-neutral-500">{{ stage.name }}</p>
        </div>
      </div>

      <div class="mt-6 space-y-4">
        <div
          v-for="project in pipelineProjects"
          :key="project.id"
          class="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl"
        >
          <div class="w-12 h-12 bg-gabon-green/10 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-gabon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-semibold text-neutral-800">{{ project.name }}</h4>
            <p class="text-sm text-neutral-500">{{ project.sector }}</p>
          </div>
          <BaseBadge :variant="stageVariant(project.stage)" size="sm">{{ project.stage }}</BaseBadge>
          <span class="text-sm font-semibold text-gabon-green">{{ formatAmount(project.fundingNeeded) }}</span>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseBadge from '@/components/common/BaseBadge.vue'
import StatCard from '@/components/features/StatCard.vue'
import ProjectCard from '@/components/features/ProjectCard.vue'
import { startups } from '@/data/mockStartups.js'

const companyName = ref(localStorage.getItem('userName') || 'BGD Capital')

const recommendedProjects = startups.slice(0, 3)

const pipelineStages = [
  { name: 'Decouverte', color: 'bg-blue-500', count: 5 },
  { name: 'Contact', color: 'bg-yellow-500', count: 3 },
  { name: 'Due diligence', color: 'bg-orange-500', count: 2 },
  { name: 'Negociation', color: 'bg-green-500', count: 1 }
]

const pipelineProjects = startups.slice(0, 4).map((p, i) => ({
  ...p,
  stage: ['Due diligence', 'Contact', 'Decouverte', 'Negociation'][i]
}))

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + ' Md'
  }
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(0) + ' M'
  }
  return amount.toLocaleString('fr-FR')
}

const stageVariant = (stage) => {
  const variants = {
    'Decouverte': 'info',
    'Contact': 'warning',
    'Due diligence': 'yellow',
    'Negociation': 'success'
  }
  return variants[stage] || 'default'
}
</script>
