<template>
  <Layout class="h-[100svh] overflow-y-hidden">
    <AppHeader />
    <AppMain />
    <div class="flex justify-around items-center gap-4 p-4 bg-primary-200 dark:bg-primary">
      <RouterLink
        class="text-white flex flex-col items-center gap-2"
        active-class="!text-yellow"
        to="/"
      >
        <Icon icon="tabler:users" width="2em" height="2em" />
        بازیکنان
      </RouterLink>
      <RouterLink
        class="text-white flex flex-col items-center gap-2"
        active-class="!text-yellow"
        to="/roles"
      >
        <Icon icon="game-icons:duality-mask" width="2em" height="2em" />
        نقشها
      </RouterLink>
      <RouterLink
        class="text-white flex flex-col items-center gap-2"
        active-class="!text-yellow"
        to="/games"
      >
        <Icon icon="fxemoji:videogame" width="2em" height="2em" />
        بازی
      </RouterLink>
    </div>
  </Layout>
</template>
<script lang="ts" setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import AppHeader from './AppLayout/AppHeader.vue'
import AppMain from './AppLayout/AppMain.vue'
import { Layout } from 'ant-design-vue/es'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
