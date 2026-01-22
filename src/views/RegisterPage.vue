<template>
  <div class="min-h-screen flex">
    <!-- Left side - Form -->
    <div class="flex-1 flex items-center justify-center p-8">
      <div class="w-full max-w-md">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 mb-8">
          <div class="flex items-center gap-1">
            <div class="w-2 h-8 bg-gabon-green rounded-sm"></div>
            <div class="w-2 h-8 bg-gabon-yellow rounded-sm"></div>
            <div class="w-2 h-8 bg-gabon-blue rounded-sm"></div>
          </div>
          <div>
            <span class="text-xl font-bold text-neutral-800">PNMR</span>
            <span class="text-xs text-neutral-500 block -mt-1">Gabon</span>
          </div>
        </router-link>

        <h1 class="text-2xl font-bold text-neutral-800 mb-2">Creer un compte</h1>
        <p class="text-neutral-600 mb-8">
          Rejoignez la plateforme en quelques etapes
        </p>

        <!-- Profile Type Selection -->
        <div v-if="step === 1" class="space-y-4">
          <p class="text-sm font-medium text-neutral-700 mb-3">Vous etes:</p>

          <button
            v-for="profile in profiles"
            :key="profile.type"
            @click="selectProfile(profile.type)"
            :class="[
              'w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left',
              form.type === profile.type
                ? `border-${profile.color} bg-${profile.color}/5`
                : 'border-neutral-200 hover:border-neutral-300'
            ]"
          >
            <div
              :class="[
                'w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                form.type === profile.type ? profile.bgActive : profile.bg
              ]"
            >
              <component
                :is="profile.icon"
                :class="[
                  'w-6 h-6 transition-colors',
                  form.type === profile.type ? 'text-white' : profile.iconColor
                ]"
              />
            </div>
            <div class="flex-1">
              <p class="font-semibold text-neutral-800">{{ profile.label }}</p>
              <p class="text-sm text-neutral-500">{{ profile.description }}</p>
            </div>
            <div
              :class="[
                'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                form.type === profile.type
                  ? `border-${profile.color} bg-${profile.color}`
                  : 'border-neutral-300'
              ]"
            >
              <svg v-if="form.type === profile.type" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
          </button>

          <BaseButton
            @click="step = 2"
            block
            size="lg"
            :disabled="!form.type"
            class="mt-6"
          >
            Continuer
          </BaseButton>
        </div>

        <!-- Registration Form -->
        <form v-else @submit.prevent="handleRegister" class="space-y-5">
          <!-- Back button -->
          <button
            type="button"
            @click="step = 1"
            class="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-800 mb-4"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Retour
          </button>

          <div class="grid grid-cols-2 gap-4">
            <BaseInput
              v-model="form.firstName"
              label="Prenom"
              placeholder="Jean"
              required
            />
            <BaseInput
              v-model="form.lastName"
              label="Nom"
              placeholder="Mba"
              required
            />
          </div>

          <BaseInput
            v-model="form.email"
            type="email"
            label="Adresse email"
            placeholder="votre@email.com"
            required
          >
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </template>
          </BaseInput>

          <BaseInput
            v-model="form.company"
            :label="companyLabel"
            :placeholder="companyPlaceholder"
            required
          >
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </template>
          </BaseInput>

          <BaseInput
            v-model="form.phone"
            type="tel"
            label="Telephone"
            placeholder="+241 07 00 00 00"
          >
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </template>
          </BaseInput>

          <BaseInput
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            label="Mot de passe"
            placeholder="Minimum 8 caracteres"
            required
            hint="Minimum 8 caracteres avec une majuscule et un chiffre"
          >
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </template>
            <template #iconRight>
              <button type="button" @click="showPassword = !showPassword" class="focus:outline-none">
                <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                </svg>
              </button>
            </template>
          </BaseInput>

          <label class="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" v-model="form.acceptTerms" class="w-4 h-4 mt-1 rounded border-neutral-300">
            <span class="text-sm text-neutral-600">
              J'accepte les <a href="#" class="text-gabon-green hover:underline">conditions d'utilisation</a>
              et la <a href="#" class="text-gabon-green hover:underline">politique de confidentialite</a>
            </span>
          </label>

          <BaseButton
            type="submit"
            block
            size="lg"
            :loading="loading"
            :disabled="!form.acceptTerms"
          >
            Creer mon compte
          </BaseButton>
        </form>

        <p class="mt-8 text-center text-sm text-neutral-600">
          Deja inscrit?
          <router-link to="/login" class="font-medium text-gabon-green hover:text-gabon-green-dark">
            Se connecter
          </router-link>
        </p>
      </div>
    </div>

    <!-- Right side - Image/Pattern -->
    <div class="hidden lg:flex flex-1 bg-gradient-to-br from-gabon-green via-gabon-green-dark to-gabon-blue items-center justify-center p-12">
      <div class="max-w-md text-white text-center">
        <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
          </svg>
        </div>
        <h2 class="text-2xl font-bold mb-4">Rejoignez l'ecosysteme</h2>
        <p class="text-white/80 mb-8">
          Plus de 500 entreprises nous font deja confiance pour developper leurs activites au Gabon.
        </p>
        <div class="flex justify-center gap-8 text-center">
          <div>
            <p class="text-3xl font-bold">527+</p>
            <p class="text-sm text-white/70">Projets</p>
          </div>
          <div>
            <p class="text-3xl font-bold">253+</p>
            <p class="text-sm text-white/70">Investisseurs</p>
          </div>
          <div>
            <p class="text-3xl font-bold">850M+</p>
            <p class="text-sm text-white/70">FCFA leves</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, h, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const router = useRouter()
const route = useRoute()

const step = ref(1)
const showPassword = ref(false)
const loading = ref(false)

const form = reactive({
  type: '',
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  password: '',
  acceptTerms: false
})

// Icons as render functions
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

const profiles = [
  {
    type: 'startup',
    label: 'Startup / PME',
    description: 'Je cherche des financements et partenaires',
    icon: RocketIcon,
    color: 'gabon-green',
    bg: 'bg-gabon-green/10',
    bgActive: 'bg-gabon-green',
    iconColor: 'text-gabon-green'
  },
  {
    type: 'investor',
    label: 'Investisseur',
    description: 'Je recherche des opportunites d\'investissement',
    icon: BriefcaseIcon,
    color: 'gabon-blue',
    bg: 'bg-gabon-blue/10',
    bgActive: 'bg-gabon-blue',
    iconColor: 'text-gabon-blue'
  },
  {
    type: 'supplier',
    label: 'Fournisseur',
    description: 'Je propose des services aux entreprises',
    icon: BuildingIcon,
    color: 'gabon-yellow-dark',
    bg: 'bg-gabon-yellow/20',
    bgActive: 'bg-gabon-yellow-dark',
    iconColor: 'text-gabon-yellow-dark'
  }
]

const companyLabel = computed(() => {
  switch (form.type) {
    case 'startup': return 'Nom de votre entreprise'
    case 'investor': return 'Organisation'
    case 'supplier': return 'Nom de votre societe'
    default: return 'Entreprise'
  }
})

const companyPlaceholder = computed(() => {
  switch (form.type) {
    case 'startup': return 'Ma Startup SARL'
    case 'investor': return 'BGD Capital'
    case 'supplier': return 'TechServ Gabon'
    default: return 'Nom de l\'entreprise'
  }
})

const selectProfile = (type) => {
  form.type = type
}

const handleRegister = async () => {
  loading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Store user info for demo
  localStorage.setItem('userType', form.type)
  localStorage.setItem('isAuthenticated', 'true')
  localStorage.setItem('userName', `${form.firstName} ${form.lastName}`)

  router.push('/dashboard')
}

onMounted(() => {
  // Check if type was passed in URL
  const urlType = route.query.type
  if (urlType && ['startup', 'investor', 'supplier'].includes(urlType)) {
    form.type = urlType
  }
})
</script>
