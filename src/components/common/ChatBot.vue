<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Chat Button -->
    <button
      v-if="!isOpen"
      @click="openChat"
      class="group w-16 h-16 bg-gradient-to-br from-gabon-green to-gabon-green-dark rounded-full shadow-lg shadow-gabon-green/30 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-gabon-green/40 transition-all duration-300"
    >
      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
      <!-- Notification badge -->
      <span class="absolute -top-1 -right-1 w-5 h-5 bg-gabon-yellow text-gabon-green-dark text-xs font-bold rounded-full flex items-center justify-center animate-pulse">?</span>
    </button>

    <!-- Chat Window -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-4"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-4"
    >
      <div
        v-if="isOpen"
        class="w-[360px] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl shadow-neutral-900/20 flex flex-col overflow-hidden border border-neutral-100"
      >
        <!-- Header -->
        <div class="bg-gradient-to-r from-gabon-green to-gabon-green-dark p-4 flex items-center gap-3">
          <div class="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center p-1.5">
            <img src="@/assets/images/sceau_gabon.png" alt="ProxiGab" class="w-full h-full object-contain"/>
          </div>
          <div class="flex-1">
            <h3 class="text-white font-display font-bold">Assistant ProxiGab</h3>
            <p class="text-white/70 text-xs flex items-center gap-1.5">
              <span class="w-2 h-2 bg-gabon-yellow rounded-full animate-pulse"></span>
              En ligne - Reponse instantanee
            </p>
          </div>
          <button
            @click="isOpen = false"
            class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
          <div
            v-for="(message, index) in messages"
            :key="index"
            :class="[
              'flex',
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            ]"
          >
            <div
              :class="[
                'max-w-[85%] rounded-2xl px-4 py-3 shadow-sm',
                message.sender === 'user'
                  ? 'bg-gradient-to-br from-gabon-green to-gabon-green-dark text-white rounded-br-md'
                  : 'bg-white text-neutral-700 rounded-bl-md border border-neutral-100'
              ]"
            >
              <p class="text-sm leading-relaxed whitespace-pre-line">{{ message.text }}</p>
              <p :class="['text-xs mt-1.5', message.sender === 'user' ? 'text-white/60' : 'text-neutral-400']">
                {{ message.time }}
              </p>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-neutral-100">
              <div class="flex gap-1.5">
                <span class="w-2 h-2 bg-gabon-green rounded-full animate-bounce" style="animation-delay: 0ms;"></span>
                <span class="w-2 h-2 bg-gabon-green rounded-full animate-bounce" style="animation-delay: 150ms;"></span>
                <span class="w-2 h-2 bg-gabon-green rounded-full animate-bounce" style="animation-delay: 300ms;"></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Questions -->
        <div v-if="showQuickQuestions && messages.length <= 2" class="px-4 py-3 bg-white border-t border-neutral-100">
          <p class="text-xs text-neutral-500 mb-2 font-medium">Questions frequentes :</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="(question, index) in quickQuestions.slice(0, 4)"
              :key="index"
              @click="askQuestion(question)"
              class="text-xs px-3 py-1.5 bg-gabon-green/10 text-gabon-green rounded-full hover:bg-gabon-green/20 transition-colors"
            >
              {{ question }}
            </button>
          </div>
        </div>

        <!-- Input -->
        <div class="p-4 bg-white border-t border-neutral-100">
          <form @submit.prevent="sendMessage" class="flex gap-2">
            <input
              v-model="userInput"
              type="text"
              placeholder="Posez votre question..."
              class="flex-1 px-4 py-3 bg-neutral-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gabon-green/30 transition-shadow"
            />
            <button
              type="submit"
              :disabled="!userInput.trim()"
              class="w-12 h-12 bg-gradient-to-br from-gabon-green to-gabon-green-dark rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-gabon-green/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

const isOpen = ref(false)
const isTyping = ref(false)
const userInput = ref('')
const showQuickQuestions = ref(true)
const messagesContainer = ref(null)

const messages = ref([])

const quickQuestions = [
  "C'est quoi ProxiGab ?",
  "Comment m'inscrire ?",
  "Types de profils ?",
  "Comment trouver un investisseur ?",
  "Frais d'inscription ?",
  "Secteurs couverts ?",
  "Contact support ?",
  "Securite des donnees ?"
]

// FAQ Database
const faqDatabase = [
  {
    keywords: ['proxigab', 'plateforme', 'c\'est quoi', 'presentation', 'objectif'],
    answer: `ProxiGab est la Plateforme Nationale de Mise en Relation du Gabon. 🇬🇦

Notre mission est de connecter :
• Les startups et PME gabonaises
• Les investisseurs nationaux et internationaux
• Les fournisseurs de services

Nous facilitons le financement et le developpement de l'ecosysteme entrepreneurial gabonais.`
  },
  {
    keywords: ['inscrire', 'inscription', 'creer compte', 'enregistrer', 'rejoindre'],
    answer: `Pour vous inscrire sur ProxiGab :

1. Cliquez sur "Rejoindre la plateforme"
2. Choisissez votre profil (Startup, Investisseur ou Fournisseur)
3. Remplissez le formulaire avec vos informations
4. Validez votre email
5. Completez votre profil

L'inscription est 100% gratuite ! 🎉`
  },
  {
    keywords: ['profil', 'type', 'categorie', 'startup', 'investisseur', 'fournisseur'],
    answer: `ProxiGab propose 3 types de profils :

🚀 Startup / PME
Publiez vos projets et trouvez des financements

💼 Investisseur
Decouvrez des opportunites d'investissement au Gabon

🏢 Fournisseur
Proposez vos services aux entreprises en croissance

Chaque profil a un tableau de bord adapte a ses besoins.`
  },
  {
    keywords: ['investisseur', 'financement', 'fonds', 'lever', 'trouver investisseur'],
    answer: `Pour trouver un investisseur sur ProxiGab :

1. Creez votre profil Startup
2. Publiez votre projet avec details complets
3. Utilisez l'outil "Matching" pour voir les investisseurs compatibles
4. Envoyez des demandes de mise en relation
5. Echangez via la messagerie integree

Notre algorithme analyse la compatibilite entre votre projet et les criteres des investisseurs. 🎯`
  },
  {
    keywords: ['frais', 'prix', 'cout', 'tarif', 'gratuit', 'payer', 'abonnement'],
    answer: `Bonne nouvelle ! 🎉

L'inscription et l'utilisation de base de ProxiGab sont GRATUITES.

✅ Gratuit :
• Creation de profil
• Publication de projets
• Recherche d'investisseurs/startups
• Messagerie de base

Des options premium pourront etre proposees ulterieurement pour des fonctionnalites avancees.`
  },
  {
    keywords: ['secteur', 'domaine', 'activite', 'industrie', 'technologie', 'agriculture'],
    answer: `ProxiGab couvre tous les secteurs economiques du Gabon :

🌿 Agriculture & Agroalimentaire
💻 Technologies & Digital
🏭 Industrie & Manufacture
🛒 Commerce & Distribution
🏥 Sante & Bien-etre
📚 Education & Formation
🌍 Tourisme & Hotellerie
⚡ Energie & Environnement
🏗️ BTP & Immobilier
🚚 Transport & Logistique

Et bien d'autres !`
  },
  {
    keywords: ['contact', 'support', 'aide', 'assistance', 'telephone', 'email', 'joindre'],
    answer: `Besoin d'aide ? Contactez-nous :

📧 Email : support@proxigab.ga
📞 Tel : +241 01 XX XX XX
🏢 Adresse : Libreville, Gabon

Horaires du support :
Lundi - Vendredi : 8h - 18h
Samedi : 9h - 13h

Vous pouvez aussi utiliser le formulaire de contact sur notre site.`
  },
  {
    keywords: ['securite', 'donnee', 'confidentialite', 'protection', 'rgpd', 'information'],
    answer: `La securite de vos donnees est notre priorite ! 🔒

✅ Chiffrement SSL/TLS
✅ Donnees hebergees au Gabon
✅ Conformite aux normes de protection des donnees
✅ Verification des profils
✅ Aucune revente de donnees

Vos informations sont confidentielles et ne sont partagees qu'avec votre consentement explicite.`
  },
  {
    keywords: ['matching', 'algorithme', 'correspondance', 'compatible'],
    answer: `Notre systeme de Matching Intelligent analyse :

🎯 Criteres analyses :
• Secteur d'activite
• Montant recherche / Ticket d'investissement
• Stade de developpement
• Localisation geographique
• Objectifs strategiques

Le score de compatibilite (Excellent, Bon, Moyen) vous aide a identifier les meilleures opportunites rapidement.`
  },
  {
    keywords: ['projet', 'publier', 'soumettre', 'creer projet'],
    answer: `Pour publier un projet sur ProxiGab :

1. Connectez-vous a votre compte Startup
2. Allez dans "Mes Projets"
3. Cliquez sur "Nouveau Projet"
4. Remplissez les informations :
   • Nom et description
   • Secteur d'activite
   • Montant recherche
   • Documents (pitch deck, business plan)
5. Soumettez pour validation

Les projets sont valides sous 24-48h. ⏱️`
  },
  {
    keywords: ['bonjour', 'salut', 'hello', 'coucou', 'bonsoir'],
    answer: `Bonjour et bienvenue sur ProxiGab ! 👋

Je suis l'assistant virtuel de la plateforme. Je peux vous aider avec :
• Des informations sur ProxiGab
• Le processus d'inscription
• La recherche d'investisseurs
• Et bien plus encore !

Comment puis-je vous aider aujourd'hui ?`
  },
  {
    keywords: ['merci', 'thank', 'remercie'],
    answer: `Avec plaisir ! 😊

N'hesitez pas si vous avez d'autres questions. Je suis la pour vous aider.

Bonne navigation sur ProxiGab ! 🇬🇦`
  }
]

const defaultAnswer = `Je n'ai pas trouve de reponse precise a votre question. 🤔

Voici ce que je peux vous aider avec :
• Presentation de ProxiGab
• Processus d'inscription
• Types de profils
• Recherche d'investisseurs
• Frais et tarifs
• Securite des donnees

Ou contactez notre support : support@proxigab.ga`

const getCurrentTime = () => {
  return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

const openChat = () => {
  isOpen.value = true
  if (messages.value.length === 0) {
    messages.value.push({
      sender: 'bot',
      text: `Bienvenue sur ProxiGab ! 👋

Je suis votre assistant virtuel. Je peux repondre a vos questions sur :
• La plateforme et ses fonctionnalites
• L'inscription et les profils
• La mise en relation avec les investisseurs

Comment puis-je vous aider ?`,
      time: getCurrentTime()
    })
  }
}

const findAnswer = (question) => {
  const lowerQuestion = question.toLowerCase()

  for (const faq of faqDatabase) {
    for (const keyword of faq.keywords) {
      if (lowerQuestion.includes(keyword.toLowerCase())) {
        return faq.answer
      }
    }
  }

  return defaultAnswer
}

const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  const question = userInput.value.trim()

  // Add user message
  messages.value.push({
    sender: 'user',
    text: question,
    time: getCurrentTime()
  })

  userInput.value = ''
  showQuickQuestions.value = false
  await scrollToBottom()

  // Show typing indicator
  isTyping.value = true
  await scrollToBottom()

  // Simulate response delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000))

  isTyping.value = false

  // Add bot response
  const answer = findAnswer(question)
  messages.value.push({
    sender: 'bot',
    text: answer,
    time: getCurrentTime()
  })

  await scrollToBottom()
}

const askQuestion = (question) => {
  userInput.value = question
  sendMessage()
}
</script>
