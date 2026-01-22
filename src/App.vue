<template>
  <div class="min-h-screen bg-neutral-50">
    <!-- Layout with header/footer -->
    <template v-if="!hideLayout">
      <AppHeader />
      <main class="min-h-[calc(100vh-200px)]">
        <div v-if="showSidebar" class="flex">
          <AppSidebar
            :user-type="userType"
            :user-name="userName"
            :is-verified="true"
          />
          <div class="flex-1 p-6">
            <router-view />
          </div>
        </div>
        <div v-else>
          <router-view />
        </div>
      </main>
      <AppFooter />
    </template>

    <!-- Full page layout (login, register) -->
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'

const route = useRoute()

const hideLayout = computed(() => route.meta.hideLayout)

const isAuthenticated = computed(() => localStorage.getItem('isAuthenticated') === 'true')
const userType = computed(() => localStorage.getItem('userType') || 'startup')
const userName = computed(() => localStorage.getItem('userName') || 'Utilisateur')

const showSidebar = computed(() => {
  const sidebarRoutes = ['dashboard', 'my-projects', 'new-project', 'interests', 'pipeline', 'catalog', 'opportunities', 'messages', 'notifications', 'profile']
  return isAuthenticated.value && sidebarRoutes.includes(route.name)
})
</script>
