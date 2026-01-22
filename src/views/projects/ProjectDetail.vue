<template>
  <div v-if="project" class="space-y-6">
    <!-- Header -->
    <div class="bg-gradient-to-r from-gabon-green to-gabon-blue rounded-2xl p-8 text-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>

      <div class="relative flex items-start gap-6">
        <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
          </svg>
        </div>

        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h1 class="text-2xl font-bold">{{ project.name }}</h1>
            <span v-if="project.verified" class="px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Verifie
            </span>
          </div>
          <p class="text-white/80 mb-4">{{ project.sector }} - {{ project.stage }}</p>
          <div class="flex flex-wrap gap-4 text-sm text-white/70">
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {{ project.location }}
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
              {{ project.team }} employes
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Fonde en {{ project.founded }}
            </span>
          </div>
        </div>

        <div class="text-right">
          <p class="text-sm text-white/70">Financement recherche</p>
          <p class="text-3xl font-bold">{{ formatAmount(project.fundingNeeded) }}</p>
          <p class="text-sm text-white/70">FCFA</p>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Description -->
        <BaseCard title="A propos">
          <p class="text-neutral-600 mb-4">{{ project.description }}</p>
          <p class="text-neutral-600 italic">"{{ project.pitch }}"</p>
        </BaseCard>

        <!-- Metrics -->
        <BaseCard title="Metriques cles">
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center p-4 bg-neutral-50 rounded-xl">
              <p class="text-2xl font-bold text-gabon-green">{{ formatAmount(project.metrics.revenue) }}</p>
              <p class="text-sm text-neutral-500">Chiffre d'affaires</p>
            </div>
            <div class="text-center p-4 bg-neutral-50 rounded-xl">
              <p class="text-2xl font-bold text-gabon-blue">+{{ project.metrics.growth }}%</p>
              <p class="text-sm text-neutral-500">Croissance</p>
            </div>
            <div class="text-center p-4 bg-neutral-50 rounded-xl">
              <p class="text-2xl font-bold text-gabon-yellow-dark">{{ project.metrics.users.toLocaleString() }}</p>
              <p class="text-sm text-neutral-500">Utilisateurs</p>
            </div>
          </div>
        </BaseCard>

        <!-- Team -->
        <BaseCard title="Equipe">
          <div class="space-y-3">
            <div
              v-for="member in project.teamMembers"
              :key="member.name"
              class="flex items-center gap-4 p-3 bg-neutral-50 rounded-xl"
            >
              <div class="w-12 h-12 bg-gradient-to-br from-gabon-green to-gabon-blue rounded-full flex items-center justify-center text-white font-bold">
                {{ member.avatar }}
              </div>
              <div>
                <p class="font-semibold text-neutral-800">{{ member.name }}</p>
                <p class="text-sm text-neutral-500">{{ member.role }}</p>
              </div>
            </div>
          </div>
        </BaseCard>

        <!-- Documents -->
        <BaseCard title="Documents">
          <div class="space-y-2">
            <div
              v-for="doc in documents"
              :key="doc.name"
              class="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 cursor-pointer transition-colors"
            >
              <div class="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-neutral-200">
                <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-neutral-800">{{ doc.name }}</p>
                <p class="text-xs text-neutral-500">{{ doc.size }}</p>
              </div>
              <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
          </div>
        </BaseCard>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Actions -->
        <BaseCard>
          <div class="space-y-3">
            <BaseButton block size="lg" @click="showInterestModal = true">
              <template #iconLeft>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </template>
              Marquer mon interet
            </BaseButton>
            <BaseButton block variant="outline">
              <template #iconLeft>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </template>
              Envoyer un message
            </BaseButton>
          </div>
        </BaseCard>

        <!-- Contact -->
        <BaseCard title="Contact">
          <div class="space-y-3">
            <a :href="`mailto:${project.email}`" class="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
              <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span class="text-sm text-neutral-600">{{ project.email }}</span>
            </a>
            <a :href="project.website" target="_blank" class="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors">
              <svg class="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
              <span class="text-sm text-neutral-600">{{ project.website }}</span>
            </a>
          </div>
        </BaseCard>

        <!-- Stats -->
        <BaseCard title="Statistiques">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-neutral-500">Interets recus</span>
              <span class="font-semibold text-neutral-800">{{ project.interests }}</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-neutral-500">Vues du profil</span>
              <span class="font-semibold text-neutral-800">156</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-neutral-500">Taux de reponse</span>
              <span class="font-semibold text-neutral-800">95%</span>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>

    <!-- Interest Modal -->
    <BaseModal
      v-model="showInterestModal"
      title="Interet marque !"
      description="L'entreprise a ete notifiee de votre interet."
      icon-variant="success"
    >
      <div class="text-center py-4">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <p class="text-neutral-600">
          {{ project.name }} recevra une notification de votre interet.
          Vous pouvez maintenant leur envoyer un message.
        </p>
      </div>
      <template #footer>
        <div class="flex gap-3">
          <BaseButton variant="ghost" @click="showInterestModal = false" class="flex-1">
            Fermer
          </BaseButton>
          <BaseButton @click="showInterestModal = false" class="flex-1">
            Envoyer un message
          </BaseButton>
        </div>
      </template>
    </BaseModal>
  </div>

  <!-- Not found -->
  <div v-else class="text-center py-12">
    <div class="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg class="w-8 h-8 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
    <h3 class="text-lg font-semibold text-neutral-800 mb-2">Projet non trouve</h3>
    <p class="text-neutral-500 mb-4">Ce projet n'existe pas ou a ete supprime</p>
    <BaseButton to="/projects">Retour aux projets</BaseButton>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseModal from '@/components/common/BaseModal.vue'
import { startups } from '@/data/mockStartups.js'

const route = useRoute()

const project = computed(() => {
  const id = parseInt(route.params.id)
  return startups.find(p => p.id === id)
})

const showInterestModal = ref(false)

const documents = [
  { name: 'Pitch Deck 2024.pdf', size: '2.4 MB' },
  { name: 'Business Plan.pdf', size: '1.8 MB' },
  { name: 'Projections financieres.xlsx', size: '524 KB' }
]

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + ' Md'
  }
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(0) + ' M'
  }
  return amount.toLocaleString('fr-FR')
}
</script>
