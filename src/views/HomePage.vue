<template>
  <div class="min-h-screen overflow-hidden">
    <!-- ============================================
         HERO SECTION - Immersive & Bold
         ============================================ -->
    <section class="relative min-h-[100svh] md:min-h-screen flex items-center bg-hero-pattern overflow-hidden">
      <!-- Animated Background with Gabon Map -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Gabon Map Image - Centered with Halo Waves -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[800px] lg:w-[900px] lg:h-[1000px] xl:w-[1000px] xl:h-[1100px] pointer-events-none flex items-center justify-center">
          <!-- Halo Wave Rings -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="absolute w-[60%] h-[60%] rounded-full border-2 animate-wave-ring" style="border-color: rgba(252, 209, 22, 0.3);"></div>
            <div class="absolute w-[75%] h-[75%] rounded-full border-2 animate-wave-ring" style="border-color: rgba(252, 209, 22, 0.2); animation-delay: 1s;"></div>
            <div class="absolute w-[90%] h-[90%] rounded-full border animate-wave-ring" style="border-color: rgba(0, 150, 57, 0.2); animation-delay: 2s;"></div>
            <div class="absolute w-[105%] h-[105%] rounded-full border animate-wave-ring" style="border-color: rgba(58, 117, 196, 0.15); animation-delay: 3s;"></div>
          </div>
          <!-- Radial Glow Halo -->
          <div class="absolute w-[80%] h-[80%] rounded-full animate-pulse-slow" style="background: radial-gradient(circle, rgba(252, 209, 22, 0.25) 0%, rgba(0, 150, 57, 0.15) 40%, transparent 70%);"></div>
          <!-- Map Image -->
          <img
            src="@/assets/images/gabon-v.png"
            alt="Carte du Gabon"
            class="w-[70%] h-[70%] object-contain gabon-map-image relative z-10"
          />
        </div>

        <!-- Floating geometric shapes -->
        <div class="absolute top-[10%] left-[5%] w-32 h-32 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div class="absolute bottom-[20%] right-[10%] w-40 h-40 md:w-80 md:h-80 bg-gabon-yellow/10 rounded-full blur-3xl animate-float delay-500"></div>
        <div class="absolute top-[40%] right-[30%] w-24 h-24 md:w-48 md:h-48 bg-gabon-blue/10 rounded-full blur-2xl animate-float delay-300"></div>

        <!-- Decorative grid pattern -->
        <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>

        <!-- Diagonal accent line -->
        <div class="hidden lg:block absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-gabon-yellow/30 to-transparent"></div>
      </div>

      <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <!-- Content -->
          <div class="text-white space-y-6 md:space-y-8">
            <!-- Badge with seal -->
            <div class="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-slide-up">
              <div class="w-7 h-7 rounded-full bg-white/20 p-1 flex items-center justify-center">
                <img src="@/assets/images/sceau_gabon.png" alt="Sceau du Gabon" class="w-full h-full object-contain"/>
              </div>
              <span class="text-sm font-medium text-white/90">Republique Gabonaise</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold leading-[1.1] animate-slide-up delay-100">
              Proxi<span class="text-gabon-yellow">Gab</span>
              <span class="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 md:mt-4 text-white/80">
                Plateforme de Mise en Relation
              </span>
            </h1>

            <!-- Description -->
            <p class="text-base sm:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed animate-slide-up delay-200">
              Connecter les startups gabonaises aux investisseurs et fournisseurs de services.
              <span class="text-white font-medium">Ensemble, construisons l'ecosysteme entrepreneurial de demain.</span>
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up delay-300">
              <BaseButton
                to="/register"
                size="lg"
                variant="outline"
                class="!bg-white !text-gabon-green-dark hover:!bg-gabon-yellow hover:!text-gabon-green-dark !border-0 font-semibold shadow-lg shadow-black/20 btn-glow"
              >
                <template #iconLeft>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                  </svg>
                </template>
                Rejoindre la plateforme
              </BaseButton>
              <BaseButton
                to="/projects"
                size="lg"
                variant="ghost"
                class="!text-white !border-white/30 hover:!bg-white/10 hover:!border-white/50"
              >
                Explorer les projets
                <template #iconRight>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </template>
              </BaseButton>
            </div>

            <!-- Trust indicators -->
            <div class="flex flex-wrap items-center gap-4 md:gap-6 pt-4 animate-slide-up delay-400">
              <div class="flex items-center gap-2">
                <div class="flex -space-x-2">
                  <div class="w-8 h-8 rounded-full bg-gabon-yellow/20 border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white">JM</div>
                  <div class="w-8 h-8 rounded-full bg-gabon-blue/30 border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white">AN</div>
                  <div class="w-8 h-8 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white">PO</div>
                </div>
                <span class="text-sm text-white/60">+{{ animatedStats.matches }} mises en relation</span>
              </div>
            </div>
          </div>

          <!-- Stats Cards Grid -->
          <div class="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
            <!-- Projects Card -->
            <div class="group relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 animate-slide-up delay-200 overflow-hidden">
              <div class="absolute top-0 right-0 w-20 h-20 bg-gabon-green/20 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div class="relative">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>
                <p class="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-1 stat-number">{{ animatedStats.projects }}+</p>
                <p class="text-xs sm:text-sm text-white/60">Projets actifs</p>
              </div>
            </div>

            <!-- Investors Card -->
            <div class="group relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 animate-slide-up delay-300 overflow-hidden">
              <div class="absolute top-0 right-0 w-20 h-20 bg-gabon-blue/20 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div class="relative">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p class="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-1 stat-number">{{ animatedStats.investors }}+</p>
                <p class="text-xs sm:text-sm text-white/60">Investisseurs</p>
              </div>
            </div>

            <!-- Raised Card -->
            <div class="group relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 animate-slide-up delay-400 overflow-hidden">
              <div class="absolute top-0 right-0 w-20 h-20 bg-gabon-yellow/20 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div class="relative">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p class="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-1 stat-number">{{ animatedStats.raised }}M+</p>
                <p class="text-xs sm:text-sm text-white/60">FCFA leves</p>
              </div>
            </div>

            <!-- Matches Card -->
            <div class="group relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 animate-slide-up delay-500 overflow-hidden">
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              <div class="relative">
                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <p class="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white mb-1 stat-number">{{ animatedStats.matches }}+</p>
                <p class="text-xs sm:text-sm text-white/60">Mises en relation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div class="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>

    <!-- ============================================
         PROFILE SELECTION - Elegant Cards
         ============================================ -->
    <section class="relative py-16 sm:py-20 lg:py-28 bg-mesh overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gabon-green/20 to-transparent"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12 lg:mb-16">
          <span class="inline-block px-4 py-1.5 bg-gabon-green/10 text-gabon-green text-sm font-semibold rounded-full mb-4">
            Commencez maintenant
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-4">
            Choisissez votre profil
          </h2>
          <p class="text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg">
            Que vous soyez entrepreneur, investisseur ou prestataire de services,
            la plateforme vous offre les outils adaptes a vos besoins.
          </p>
        </div>

        <!-- Profile Cards -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <!-- Startup Card -->
          <router-link to="/register?type=startup" class="group">
            <div class="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-neutral-100 hover:border-gabon-green/50 transition-all duration-500 card-hover overflow-hidden h-full">
              <!-- Gradient overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-br from-gabon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative">
                <!-- Icon -->
                <div class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gabon-green to-gabon-green-dark rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gabon-green/30 transition-all duration-500">
                  <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                  </svg>
                </div>

                <!-- Content -->
                <h3 class="text-xl sm:text-2xl font-display font-bold text-neutral-800 mb-2 group-hover:text-gabon-green transition-colors">
                  Startup / PME
                </h3>
                <p class="text-neutral-600 mb-5 sm:mb-6 text-sm sm:text-base">
                  Trouvez des investisseurs et partenaires pour accelerer votre croissance.
                </p>

                <!-- Features -->
                <ul class="space-y-2.5 sm:space-y-3">
                  <li class="flex items-center gap-2.5 sm:gap-3 text-sm text-neutral-600">
                    <span class="w-5 h-5 rounded-full bg-gabon-green/10 flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-gabon-green" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </span>
                    Publiez vos projets
                  </li>
                  <li class="flex items-center gap-2.5 sm:gap-3 text-sm text-neutral-600">
                    <span class="w-5 h-5 rounded-full bg-gabon-green/10 flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-gabon-green" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </span>
                    Accedez aux investisseurs
                  </li>
                  <li class="flex items-center gap-2.5 sm:gap-3 text-sm text-neutral-600">
                    <span class="w-5 h-5 rounded-full bg-gabon-green/10 flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-gabon-green" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </span>
                    Trouvez des fournisseurs
                  </li>
                </ul>

                <!-- Arrow indicator -->
                <div class="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-gabon-green group-hover:translate-x-1 transition-all duration-300">
                  <svg class="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
          </router-link>

          <!-- Investor Card -->
          <router-link to="/register?type=investor" class="group">
            <div class="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-neutral-100 hover:border-gabon-blue/50 transition-all duration-500 card-hover overflow-hidden h-full">
              <div class="absolute inset-0 bg-gradient-to-br from-gabon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative">
                <div class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gabon-blue to-gabon-blue-dark rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gabon-blue/30 transition-all duration-500">
                  <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>

                <h3 class="text-xl sm:text-2xl font-display font-bold text-neutral-800 mb-2 group-hover:text-gabon-blue transition-colors">
                  Investisseur
                </h3>
                <p class="text-neutral-600 mb-5 sm:mb-6 text-sm sm:text-base">
                  Decouvrez les meilleures opportunites d'investissement au Gabon.
                </p>

                <ul class="space-y-2.5 sm:space-y-3">
                  <li class="flex items-center gap-2.5 sm:gap-3 text-sm text-neutral-600">
                    <span class="w-5 h-5 rounded-full bg-gabon-blue/10 flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-gabon-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </span>
                    Explorez les projets
                  </li>
                  <li class="flex items-center gap-2.5 sm:gap-3 text-sm text-neutral-600">
                    <span class="w-5 h-5 rounded-full bg-gabon-blue/10 flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-gabon-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </span>
                    Gerez votre pipeline
                  </li>
                  <li class="flex items-center gap-2.5 sm:gap-3 text-sm text-neutral-600">
                    <span class="w-5 h-5 rounded-full bg-gabon-blue/10 flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-gabon-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </span>
                    Lancez des appels a projets
                  </li>
                </ul>

                <div class="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-gabon-blue group-hover:translate-x-1 transition-all duration-300">
                  <svg class="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
          </router-link>

          <!-- Supplier Card -->
          <router-link to="/register?type=supplier" class="group sm:col-span-2 lg:col-span-1">
            <div class="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-neutral-100 hover:border-gabon-yellow/50 transition-all duration-500 card-hover overflow-hidden h-full">
              <div class="absolute inset-0 bg-gradient-to-br from-gabon-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative">
                <div class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gabon-yellow to-gabon-yellow-dark rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gabon-yellow/30 transition-all duration-500">
                  <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>

                <h3 class="text-xl sm:text-2xl font-display font-bold text-neutral-800 mb-2 group-hover:text-gabon-yellow-dark transition-colors">
                  Fournisseur
                </h3>
                <p class="text-neutral-600 mb-5 sm:mb-6 text-sm sm:text-base">
                  Proposez vos services aux entreprises en croissance.
                </p>

                <ul class="space-y-2.5 sm:space-y-3">
                  <li class="flex items-center gap-2.5 sm:gap-3 text-sm text-neutral-600">
                    <span class="w-5 h-5 rounded-full bg-gabon-yellow/20 flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-gabon-yellow-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </span>
                    Creez votre catalogue
                  </li>
                  <li class="flex items-center gap-2.5 sm:gap-3 text-sm text-neutral-600">
                    <span class="w-5 h-5 rounded-full bg-gabon-yellow/20 flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-gabon-yellow-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </span>
                    Repondez aux appels d'offres
                  </li>
                  <li class="flex items-center gap-2.5 sm:gap-3 text-sm text-neutral-600">
                    <span class="w-5 h-5 rounded-full bg-gabon-yellow/20 flex items-center justify-center flex-shrink-0">
                      <svg class="w-3 h-3 text-gabon-yellow-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                    </span>
                    Developpez votre reseau
                  </li>
                </ul>

                <div class="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-gabon-yellow group-hover:translate-x-1 transition-all duration-300">
                  <svg class="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ============================================
         FEATURED PROJECTS - Modern Grid
         ============================================ -->
    <section class="py-16 sm:py-20 lg:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-14">
          <div>
            <span class="inline-block px-4 py-1.5 bg-gabon-blue/10 text-gabon-blue text-sm font-semibold rounded-full mb-4">
              Opportunites
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-2">
              Projets en vedette
            </h2>
            <p class="text-neutral-600 text-base sm:text-lg">Decouvrez les startups les plus prometteuses</p>
          </div>
          <BaseButton to="/projects" variant="outline" class="self-start sm:self-auto flex-shrink-0">
            Voir tous les projets
            <template #iconRight>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </template>
          </BaseButton>
        </div>

        <!-- Projects Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <ProjectCard
            v-for="(project, index) in featuredProjects"
            :key="project.id"
            :project="project"
            :class="[
              'animate-slide-up opacity-0',
              index === 0 ? 'delay-100' : '',
              index === 1 ? 'delay-200' : '',
              index === 2 ? 'delay-300' : ''
            ]"
          />
        </div>
      </div>
    </section>

    <!-- ============================================
         SUCCESS STORIES - Testimonials
         ============================================ -->
    <section class="py-16 sm:py-20 lg:py-28 bg-mesh relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gabon-green/20 to-transparent"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12 lg:mb-16">
          <span class="inline-block px-4 py-1.5 bg-gabon-yellow/20 text-gabon-yellow-dark text-sm font-semibold rounded-full mb-4">
            Temoignages
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-4">
            Success Stories
          </h2>
          <p class="text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg">
            Ils ont trouve leur financement grace a la plateforme
          </p>
        </div>

        <!-- Stories Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div
            v-for="(story, index) in successStories"
            :key="story.id"
            class="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-neutral-100 hover:border-gabon-green/30 hover:shadow-xl hover:shadow-gabon-green/5 transition-all duration-500"
          >
            <!-- Quote mark -->
            <div class="absolute -top-3 left-6 sm:left-8 w-8 h-8 bg-gabon-green rounded-lg flex items-center justify-center shadow-lg shadow-gabon-green/30">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Company info -->
            <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 pt-2">
              <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gabon-green/10 to-gabon-blue/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-gabon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-display font-bold text-neutral-800 text-base sm:text-lg">{{ story.company }}</h3>
                <p class="text-xs sm:text-sm text-neutral-500">Finance par {{ story.investor }}</p>
              </div>
            </div>

            <!-- Quote -->
            <p class="text-neutral-600 italic mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">"{{ story.quote }}"</p>

            <!-- Stats -->
            <div class="flex flex-wrap items-center justify-between gap-2 pt-4 sm:pt-5 border-t border-neutral-100">
              <BaseBadge variant="green" size="lg" class="!text-sm font-semibold">
                {{ formatAmount(story.amount) }} FCFA
              </BaseBadge>
              <BaseBadge variant="default" size="sm">{{ story.sector }}</BaseBadge>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         PARTNERS - Minimal & Trustworthy
         ============================================ -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white border-t border-neutral-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-xs sm:text-sm text-neutral-500 uppercase tracking-widest font-medium mb-8 sm:mb-10">
          Partenaires institutionnels
        </p>

        <div class="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-16">
          <!-- Partner 1 - Republique Gabonaise avec Armoirie -->
          <div class="group flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-105">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gabon-green/10 to-gabon-yellow/10 flex items-center justify-center p-2 shadow-sm group-hover:shadow-md transition-shadow">
              <img src="@/assets/images/logo_harmoirie.png" alt="Armoiries du Gabon" class="w-full h-full object-contain"/>
            </div>
            <div class="hidden sm:block">
              <span class="text-neutral-800 font-display font-bold text-sm sm:text-base block">Republique Gabonaise</span>
              <span class="text-neutral-500 text-xs">Gouvernement</span>
            </div>
          </div>

          <!-- Partner 2 - Ministere du Commerce -->
          <div class="group flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-105">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gabon-blue/10 to-gabon-green/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <svg class="w-7 h-7 sm:w-8 sm:h-8 text-gabon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
              </svg>
            </div>
            <div class="hidden sm:block">
              <span class="text-neutral-800 font-display font-bold text-sm sm:text-base block">Ministere du Commerce</span>
              <span class="text-neutral-500 text-xs">Partenaire officiel</span>
            </div>
          </div>

          <!-- Partner 3 - Chambre de Commerce -->
          <div class="group flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-105">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gabon-yellow/15 to-gabon-green/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <svg class="w-7 h-7 sm:w-8 sm:h-8 text-gabon-yellow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div class="hidden sm:block">
              <span class="text-neutral-800 font-display font-bold text-sm sm:text-base block">Chambre de Commerce</span>
              <span class="text-neutral-500 text-xs">Partenaire economique</span>
            </div>
          </div>

          <!-- Partner 4 - BGD -->
          <div class="group flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-105">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-gabon-green/15 to-gabon-blue/10 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <svg class="w-7 h-7 sm:w-8 sm:h-8 text-gabon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="hidden sm:block">
              <span class="text-neutral-800 font-display font-bold text-sm sm:text-base block">BGD</span>
              <span class="text-neutral-500 text-xs">Banque de Developpement</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         CTA SECTION - Bold & Inviting
         ============================================ -->
    <section class="relative py-16 sm:py-20 lg:py-28 bg-gabon-gradient overflow-hidden">
      <!-- Background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-gabon-yellow/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-gabon-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flag-stripe justify-center mb-6 sm:mb-8">
          <span class="!bg-white/80"></span>
          <span></span>
          <span class="!bg-white/80"></span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-4 sm:mb-6">
          Pret a rejoindre l'aventure ?
        </h2>

        <p class="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
          Rejoignez la communaute des entrepreneurs, investisseurs et fournisseurs qui construisent l'avenir economique du Gabon.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <BaseButton
            to="/register"
            size="lg"
            class="!bg-white !text-gabon-green-dark hover:!bg-gabon-yellow font-semibold shadow-lg shadow-black/20 btn-glow"
          >
            <template #iconLeft>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </template>
            Commencer maintenant
          </BaseButton>
          <BaseButton
            to="/projects"
            size="lg"
            variant="ghost"
            class="!text-white !border-white/30 hover:!bg-white/10"
          >
            En savoir plus
          </BaseButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseBadge from '@/components/common/BaseBadge.vue'
import ProjectCard from '@/components/features/ProjectCard.vue'
import { startups } from '@/data/mockStartups.js'
import { successStories, platformStats } from '@/data/mockProjects.js'

const featuredProjects = startups.slice(0, 3)

const animatedStats = ref({
  projects: 0,
  investors: 0,
  raised: 0,
  matches: 0
})

const formatAmount = (amount) => {
  if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + ' Md'
  }
  if (amount >= 1000000) {
    return (amount / 1000000).toFixed(0) + ' M'
  }
  return amount.toLocaleString('fr-FR')
}

onMounted(() => {
  // Trigger animations for cards
  document.querySelectorAll('.animate-slide-up.opacity-0').forEach((el, i) => {
    setTimeout(() => {
      el.classList.remove('opacity-0')
    }, 100 * i)
  })

  // Animate stats with easing
  const duration = 2000
  const steps = 60
  const targets = {
    projects: platformStats.totalProjects,
    investors: platformStats.totalInvestors,
    raised: platformStats.totalRaised / 1000000,
    matches: platformStats.totalMatches
  }

  let step = 0
  const interval = setInterval(() => {
    step++
    const progress = step / steps
    // Cubic ease out
    const eased = 1 - Math.pow(1 - progress, 3)

    animatedStats.value = {
      projects: Math.floor(targets.projects * eased),
      investors: Math.floor(targets.investors * eased),
      raised: Math.floor(targets.raised * eased),
      matches: Math.floor(targets.matches * eased)
    }

    if (step >= steps) clearInterval(interval)
  }, duration / steps)
})
</script>
