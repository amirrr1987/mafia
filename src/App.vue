<template>
  <div
    class="min-h-screen grid grid-rows-[max-content_1fr_max-content] bg-slate-900 text-white font-sans"
  >
    <!-- Navbar -->
    <nav class="bg-red-600 shadow-md">
      <div class="container mx-auto px-4">
        <ul class="flex gap-6 py-4 justify-center">
          <RouterLink
            :to="{ name: 'PlayerView' }"
            class="px-4 py-2 rounded-md text-lg transition hover:bg-red-700 hover:text-yellow-300"
            active-class="font-bold shadow-md text-yellow-300"
          >
            👤 بازیکنان
          </RouterLink>
          <RouterLink
            :to="{ name: 'RoleView' }"
            class="px-4 py-2 rounded-md text-lg transition hover:bg-red-700 hover:text-yellow-300"
            active-class="font-bold shadow-md text-yellow-300"
          >
            🎭 نقش‌ها
          </RouterLink>
          <RouterLink
            :to="{ name: 'GameView' }"
            class="px-4 py-2 rounded-md text-lg transition hover:bg-red-700 hover:text-yellow-300"
            active-class="font-bold shadow-md text-yellow-300"
          >
            🕹️ شروع بازی
          </RouterLink>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="py-6">
      <RouterView />
    </main>
    <footer class="text-center py-6">طراحی شده توسط امیر مقامی</footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
