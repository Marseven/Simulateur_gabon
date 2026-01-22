<template>
  <div class="min-h-screen bg-mesh">
    <!-- Hero Header -->
    <div class="bg-gradient-to-br from-purple-600 via-purple-700 to-gabon-blue relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 right-0 w-96 h-96 bg-gabon-yellow/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2"></div>
        <!-- Animated connection lines -->
        <svg class="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M20,50 Q35,30 50,50 T80,50" stroke="white" stroke-width="0.5" fill="none" class="animate-pulse"/>
          <path d="M10,30 Q30,50 50,30 T90,30" stroke="white" stroke-width="0.3" fill="none" class="animate-pulse" style="animation-delay: 0.5s"/>
          <path d="M15,70 Q40,50 60,70 T85,70" stroke="white" stroke-width="0.3" fill="none" class="animate-pulse" style="animation-delay: 1s"/>
        </svg>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div class="text-center text-white">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <svg class="w-5 h-5 text-gabon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <span class="text-sm font-medium">Algorithme intelligent</span>
          </div>
          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-3">Matching Startups & Investisseurs</h1>
          <p class="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Notre algorithme analyse les criteres de chaque partie pour proposer les meilleures opportunites de partenariat
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <!-- Filters -->
      <div class="bg-white rounded-2xl sm:rounded-3xl border border-neutral-100 shadow-sm p-4 sm:p-5 lg:p-6 mb-6">
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="flex-1">
            <label class="block text-sm font-medium text-neutral-700 mb-2">Secteur d'activite</label>
            <select v-model="selectedSector" class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm sm:text-base">
              <option value="">Tous les secteurs</option>
              <option v-for="sector in sectors" :key="sector" :value="sector">{{ sector }}</option>
            </select>
          </div>
          <div class="flex-1">
            <label class="block text-sm font-medium text-neutral-700 mb-2">Montant recherche</label>
            <select v-model="selectedAmount" class="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all text-sm sm:text-base">
              <option value="">Tous les montants</option>
              <option value="small">Moins de 50M FCFA</option>
              <option value="medium">50M - 200M FCFA</option>
              <option value="large">Plus de 200M FCFA</option>
            </select>
          </div>
          <div class="flex items-end">
            <button @click="runMatching" class="w-full sm:w-auto px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Lancer le matching
            </button>
          </div>
        </div>
      </div>

      <!-- Matching Results -->
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <h2 class="text-lg sm:text-xl font-display font-bold text-neutral-800">
            {{ matchingResults.length }} correspondances trouvees
          </h2>
          <div class="flex items-center gap-2">
            <span class="text-sm text-neutral-500">Trier par:</span>
            <select v-model="sortBy" class="px-3 py-1.5 bg-neutral-100 border-0 rounded-lg text-sm focus:ring-2 focus:ring-purple-500/20">
              <option value="score">Score de compatibilite</option>
              <option value="amount">Montant</option>
              <option value="recent">Plus recent</option>
            </select>
          </div>
        </div>

        <!-- Match Cards -->
        <div class="space-y-4 sm:space-y-5">
          <div
            v-for="(match, index) in matchingResults"
            :key="match.id"
            class="bg-white rounded-2xl sm:rounded-3xl border border-neutral-100 shadow-sm overflow-hidden animate-slide-up"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- Match Header with Score -->
            <div class="bg-gradient-to-r from-purple-50 to-gabon-blue/5 px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-100">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs sm:text-sm text-neutral-500">Score de compatibilite</p>
                    <p class="text-lg sm:text-xl font-display font-bold text-purple-600">{{ match.score }}%</p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <span
                    class="px-3 py-1 rounded-full text-xs font-medium"
                    :class="match.score >= 80 ? 'bg-green-100 text-green-700' : match.score >= 60 ? 'bg-yellow-100 text-yellow-700' : 'bg-orange-100 text-orange-700'"
                  >
                    {{ match.score >= 80 ? 'Excellent' : match.score >= 60 ? 'Bon' : 'Moyen' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Match Content -->
            <div class="p-4 sm:p-6">
              <div class="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <!-- Startup Side -->
                <div class="p-4 bg-gabon-green/5 rounded-xl sm:rounded-2xl border border-gabon-green/10">
                  <div class="flex items-center gap-2 mb-3">
                    <div class="w-8 h-8 bg-gabon-green/20 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-gabon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-medium text-gabon-green uppercase tracking-wider">Startup</span>
                  </div>
                  <h3 class="font-display font-bold text-neutral-800 text-base sm:text-lg mb-1">{{ match.startup.name }}</h3>
                  <p class="text-sm text-neutral-600 mb-3">{{ match.startup.description }}</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="px-2 py-1 bg-white rounded-lg text-xs font-medium text-neutral-600">{{ match.startup.sector }}</span>
                    <span class="px-2 py-1 bg-white rounded-lg text-xs font-medium text-neutral-600">{{ match.startup.stage }}</span>
                  </div>
                  <p class="text-sm">
                    <span class="text-neutral-500">Recherche:</span>
                    <span class="font-semibold text-gabon-green ml-1">{{ formatAmount(match.startup.fundingNeeded) }} FCFA</span>
                  </p>
                </div>

                <!-- Investor Side -->
                <div class="p-4 bg-gabon-blue/5 rounded-xl sm:rounded-2xl border border-gabon-blue/10">
                  <div class="flex items-center gap-2 mb-3">
                    <div class="w-8 h-8 bg-gabon-blue/20 rounded-lg flex items-center justify-center">
                      <svg class="w-4 h-4 text-gabon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <span class="text-xs font-medium text-gabon-blue uppercase tracking-wider">Investisseur</span>
                  </div>
                  <h3 class="font-display font-bold text-neutral-800 text-base sm:text-lg mb-1">{{ match.investor.name }}</h3>
                  <p class="text-sm text-neutral-600 mb-3">{{ match.investor.description }}</p>
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="px-2 py-1 bg-white rounded-lg text-xs font-medium text-neutral-600">{{ match.investor.type }}</span>
                  </div>
                  <p class="text-sm">
                    <span class="text-neutral-500">Ticket:</span>
                    <span class="font-semibold text-gabon-blue ml-1">{{ formatAmount(match.investor.ticketMin) }} - {{ formatAmount(match.investor.ticketMax) }} FCFA</span>
                  </p>
                </div>
              </div>

              <!-- Match Reasons -->
              <div class="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-neutral-100">
                <p class="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">Criteres de compatibilite</p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="reason in match.reasons" :key="reason" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {{ reason }}
                  </span>
                </div>
              </div>

              <!-- Actions -->
              <div class="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-3">
                <button class="flex-1 px-4 py-2.5 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                  Initier le contact
                </button>
                <button class="flex-1 px-4 py-2.5 bg-neutral-100 text-neutral-700 font-semibold rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                  </svg>
                  Sauvegarder
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="matchingResults.length === 0" class="text-center py-16 sm:py-20">
          <div class="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 class="text-xl font-display font-bold text-neutral-800 mb-2">Lancez le matching</h3>
          <p class="text-neutral-500 mb-6">Selectionnez vos criteres et lancez l'algorithme</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { startups } from '@/data/mockStartups.js'
import { investors } from '@/data/mockInvestors.js'

const selectedSector = ref('')
const selectedAmount = ref('')
const sortBy = ref('score')

const sectors = [...new Set(startups.map(s => s.sector))]

const matchingResults = ref([])

const runMatching = () => {
  // Simulate matching algorithm
  const results = []

  startups.forEach(startup => {
    investors.forEach(investor => {
      // Check sector match
      const sectorMatch = investor.sectors?.includes(startup.sector)

      // Check funding range match
      const fundingMatch = startup.fundingNeeded >= investor.ticketMin && startup.fundingNeeded <= investor.ticketMax

      // Apply filters
      if (selectedSector.value && startup.sector !== selectedSector.value) return
      if (selectedAmount.value) {
        if (selectedAmount.value === 'small' && startup.fundingNeeded >= 50000000) return
        if (selectedAmount.value === 'medium' && (startup.fundingNeeded < 50000000 || startup.fundingNeeded > 200000000)) return
        if (selectedAmount.value === 'large' && startup.fundingNeeded <= 200000000) return
      }

      if (sectorMatch || fundingMatch) {
        let score = 50
        const reasons = []

        if (sectorMatch) {
          score += 25
          reasons.push('Secteur compatible')
        }
        if (fundingMatch) {
          score += 20
          reasons.push('Montant dans la fourchette')
        }
        if (startup.verified) {
          score += 5
          reasons.push('Startup verifiee')
        }

        // Add some randomness for demo
        score = Math.min(98, score + Math.floor(Math.random() * 10))

        results.push({
          id: `${startup.id}-${investor.id}`,
          score,
          startup: {
            name: startup.name,
            description: startup.description,
            sector: startup.sector,
            stage: startup.stage,
            fundingNeeded: startup.fundingNeeded
          },
          investor: {
            name: investor.name,
            description: investor.description,
            type: investor.type,
            ticketMin: investor.ticketMin,
            ticketMax: investor.ticketMax
          },
          reasons
        })
      }
    })
  })

  // Sort by score
  results.sort((a, b) => b.score - a.score)

  // Take top 6 results
  matchingResults.value = results.slice(0, 6)
}

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + ' Md'
  }
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(0) + ' M'
  }
  return amount.toLocaleString('fr-FR')
}

// Run initial matching
runMatching()
</script>
