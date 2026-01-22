<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold text-neutral-800 mb-2">Nouveau projet</h1>
    <p class="text-neutral-500 mb-8">Publiez votre projet pour attirer des investisseurs</p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <BaseCard>
        <div class="space-y-5">
          <BaseInput
            v-model="form.name"
            label="Nom du projet"
            placeholder="Ex: Expansion regionale"
            required
          />

          <BaseSelect
            v-model="form.sector"
            label="Secteur"
            :options="sectorOptions"
            required
          />

          <BaseInput
            v-model="form.funding"
            label="Montant recherche (FCFA)"
            placeholder="Ex: 50 000 000"
            required
          />

          <div>
            <label class="block text-sm font-medium text-neutral-700 mb-2">Stade de developpement</label>
            <div class="grid grid-cols-3 gap-3">
              <button
                v-for="stage in stages"
                :key="stage"
                type="button"
                @click="form.stage = stage"
                :class="[
                  'py-3 border-2 rounded-xl text-sm font-medium transition-colors',
                  form.stage === stage
                    ? 'border-gabon-green bg-gabon-green/5 text-gabon-green'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                ]"
              >
                {{ stage }}
              </button>
            </div>
          </div>

          <BaseInput
            v-model="form.description"
            type="textarea"
            label="Description du projet"
            placeholder="Decrivez votre projet, vos objectifs..."
            :rows="5"
            required
          />

          <div>
            <label class="block text-sm font-medium text-neutral-700 mb-2">Documents</label>
            <div class="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center hover:border-gabon-green transition-colors cursor-pointer">
              <svg class="w-12 h-12 text-neutral-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <p class="text-sm text-neutral-500 mb-2">Pitch deck, Business plan...</p>
              <button type="button" class="text-sm font-medium text-gabon-green">+ Ajouter des fichiers</button>
            </div>
          </div>
        </div>
      </BaseCard>

      <div class="flex gap-4">
        <BaseButton type="button" variant="ghost" @click="$router.back()">
          Annuler
        </BaseButton>
        <BaseButton type="submit" class="flex-1" :loading="loading">
          <template #iconLeft>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </template>
          Publier le projet
        </BaseButton>
      </div>
    </form>

    <BaseModal v-model="showSuccessModal" title="Projet publie !">
      <div class="text-center py-4">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <p class="text-neutral-600">Votre projet est maintenant visible par les investisseurs.</p>
      </div>
      <template #footer>
        <BaseButton block @click="$router.push('/dashboard')">
          Retour au tableau de bord
        </BaseButton>
      </template>
    </BaseModal>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseSelect from '@/components/common/BaseSelect.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseModal from '@/components/common/BaseModal.vue'

const loading = ref(false)
const showSuccessModal = ref(false)

const form = reactive({
  name: '',
  sector: '',
  funding: '',
  stage: 'Seed',
  description: ''
})

const sectorOptions = [
  { value: 'Agritech', label: 'Agritech' },
  { value: 'Fintech', label: 'Fintech' },
  { value: 'Logistique', label: 'Logistique' },
  { value: 'EdTech', label: 'EdTech' },
  { value: 'Technologies', label: 'Technologies' },
  { value: 'GreenTech', label: 'GreenTech' },
  { value: 'Bois', label: 'Bois' }
]

const stages = ['Pre-seed', 'Seed', 'Serie A']

const handleSubmit = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false
  showSuccessModal.value = true
}
</script>
