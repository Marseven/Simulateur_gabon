<template>
  <div class="min-h-[100svh] flex flex-col lg:flex-row">
    <!-- Left side - Form -->
    <div class="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-white order-2 lg:order-1">
      <div class="w-full max-w-md mx-auto">
        <!-- Logo -->
        <router-link to="/" class="inline-flex items-center gap-3 mb-8 group">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-gabon-green/10 to-gabon-yellow/10 flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform shadow-sm">
            <img src="@/assets/images/sceau_gabon.png" alt="Sceau du Gabon" class="w-full h-full object-contain"/>
          </div>
          <div>
            <span class="text-xl font-display font-bold text-neutral-800">Proxi<span class="text-gabon-green">Gab</span></span>
          </div>
        </router-link>

        <h1 class="text-2xl sm:text-3xl font-display font-bold text-neutral-800 mb-2">Connexion</h1>
        <p class="text-neutral-600 mb-8 text-sm sm:text-base">
          Accedez a votre espace personnel
        </p>

        <!-- Form -->
        <form @submit.prevent="handleLogin" class="space-y-5">
          <BaseInput
            v-model="form.email"
            type="email"
            label="Adresse email"
            placeholder="votre@email.com"
            required
            :error="errors.email"
          >
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </template>
          </BaseInput>

          <BaseInput
            v-model="form.password"
            :type="showPassword ? 'text' : 'password'"
            label="Mot de passe"
            placeholder="Votre mot de passe"
            required
            :error="errors.password"
          >
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </template>
            <template #iconRight>
              <button type="button" @click="showPassword = !showPassword" class="focus:outline-none hover:text-gabon-green transition-colors">
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

          <div class="flex items-center justify-between flex-wrap gap-2">
            <label class="flex items-center gap-2.5 cursor-pointer group">
              <input type="checkbox" v-model="form.remember" class="w-5 h-5 rounded border-neutral-300 text-gabon-green focus:ring-gabon-green">
              <span class="text-sm text-neutral-600 group-hover:text-neutral-800 transition-colors">Se souvenir de moi</span>
            </label>
            <a href="#" class="text-sm font-medium text-gabon-green hover:text-gabon-green-dark transition-colors">
              Mot de passe oublie?
            </a>
          </div>

          <BaseButton type="submit" block size="lg" :loading="loading" class="!shadow-lg !shadow-gabon-green/20">
            Se connecter
          </BaseButton>
        </form>

        <!-- Demo accounts -->
        <div class="mt-8 p-4 sm:p-5 bg-neutral-50 rounded-2xl border border-neutral-100">
          <p class="text-xs text-neutral-500 uppercase tracking-wider font-medium mb-4">Comptes de demonstration</p>
          <div class="space-y-2.5">
            <button
              @click="loginAs('startup')"
              class="w-full flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl border-2 border-neutral-100 hover:border-gabon-green/50 hover:shadow-md transition-all text-left group"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gabon-green to-gabon-green-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm sm:text-base font-semibold text-neutral-800">Startup / PME</p>
                <p class="text-xs sm:text-sm text-neutral-500 truncate">startup@demo.ga</p>
              </div>
              <svg class="w-5 h-5 text-neutral-300 group-hover:text-gabon-green group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <button
              @click="loginAs('investor')"
              class="w-full flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl border-2 border-neutral-100 hover:border-gabon-blue/50 hover:shadow-md transition-all text-left group"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gabon-blue to-gabon-blue-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm sm:text-base font-semibold text-neutral-800">Investisseur</p>
                <p class="text-xs sm:text-sm text-neutral-500 truncate">investor@demo.ga</p>
              </div>
              <svg class="w-5 h-5 text-neutral-300 group-hover:text-gabon-blue group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <button
              @click="loginAs('supplier')"
              class="w-full flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl border-2 border-neutral-100 hover:border-gabon-yellow/50 hover:shadow-md transition-all text-left group"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gabon-yellow to-gabon-yellow-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm sm:text-base font-semibold text-neutral-800">Fournisseur</p>
                <p class="text-xs sm:text-sm text-neutral-500 truncate">supplier@demo.ga</p>
              </div>
              <svg class="w-5 h-5 text-neutral-300 group-hover:text-gabon-yellow-dark group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            <button
              @click="loginAs('admin')"
              class="w-full flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl border-2 border-neutral-100 hover:border-neutral-400 hover:shadow-md transition-all text-left group"
            >
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm sm:text-base font-semibold text-neutral-800">Administrateur</p>
                <p class="text-xs sm:text-sm text-neutral-500 truncate">admin@ministere.ga</p>
              </div>
              <svg class="w-5 h-5 text-neutral-300 group-hover:text-neutral-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        <p class="mt-8 text-center text-sm text-neutral-600">
          Pas encore de compte?
          <router-link to="/register" class="font-semibold text-gabon-green hover:text-gabon-green-dark transition-colors">
            S'inscrire gratuitement
          </router-link>
        </p>
      </div>
    </div>

    <!-- Right side - Visual -->
    <div class="relative lg:flex-1 min-h-[200px] lg:min-h-0 bg-hero-pattern flex items-center justify-center p-6 sm:p-8 lg:p-12 order-1 lg:order-2 overflow-hidden">
      <!-- Floating shapes -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-[10%] left-[10%] w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float"></div>
        <div class="absolute bottom-[20%] right-[10%] w-48 h-48 bg-gabon-yellow/10 rounded-full blur-3xl animate-float delay-300"></div>
      </div>

      <div class="relative max-w-md text-white text-center lg:text-left">
        <!-- Icon -->
        <div class="hidden lg:flex w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl items-center justify-center mb-8 border border-white/20 animate-float">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </div>

        <h2 class="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-3 lg:mb-4">
          Bienvenue sur Proxi<span class="text-gabon-yellow">Gab</span>
        </h2>
        <p class="text-white/70 text-sm sm:text-base lg:text-lg hidden sm:block">
          La plateforme qui connecte l'ecosysteme entrepreneurial gabonais.
          Startups, investisseurs et fournisseurs reunis pour construire l'avenir.
        </p>

        <!-- Stats on mobile -->
        <div class="flex justify-center gap-6 mt-4 lg:hidden">
          <div class="text-center">
            <p class="text-2xl font-display font-bold text-white">150+</p>
            <p class="text-xs text-white/60">Projets</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-display font-bold text-white">45+</p>
            <p class="text-xs text-white/60">Investisseurs</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const errors = reactive({
  email: '',
  password: ''
})

const showPassword = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  errors.email = ''
  errors.password = ''

  if (!form.email) {
    errors.email = 'L\'email est requis'
    return
  }
  if (!form.password) {
    errors.password = 'Le mot de passe est requis'
    return
  }

  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  router.push('/dashboard')
}

const loginAs = async (type) => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 500))
  localStorage.setItem('userType', type)
  localStorage.setItem('isAuthenticated', 'true')
  const names = {
    startup: 'AgriGabon Tech',
    investor: 'BGD Capital',
    supplier: 'TechServ LBV',
    admin: 'Ministere du Commerce'
  }
  localStorage.setItem('userName', names[type] || 'Utilisateur')
  router.push('/dashboard')
}
</script>
