<template>
  <nav class="py-6 bg-red-500">
    <div class="container mx-auto px-4">
      <ul class="flex gap-4">
        <RouterLink :to="{ name: 'PlayerView' }" class="text-white" active-class="text-yellow-500">
          PlayerView
        </RouterLink>
        <RouterLink :to="{ name: 'RoleView' }" class="text-white" active-class="text-yellow-500">
          RoleView
        </RouterLink>
        <RouterLink :to="{ name: 'GameView' }" class="text-white" active-class="text-yellow-500">
          GameView
        </RouterLink>
      </ul>
    </div>
  </nav>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
