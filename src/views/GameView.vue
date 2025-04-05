<template>
  <div class="game py-10 px-4 max-w-md mx-auto">
    <h1 class="text-2xl font-bold text-center mb-6">🎮 بازی مافیا</h1>

    <div class="flex justify-center mb-12 space-x-4">
      <button
        @click="mafiaStore.assignRolesToPlayers"
        class="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
      >
        🎲 تقسیم نقش‌ها
      </button>

      <button
        @click="toggleAllRolesVisibility"
        class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
      >
        👁️ نمایش/مخفی همه نقش‌ها
      </button>
    </div>

    <div class="space-y-4">
      <div
        class="border border-red-500 p-4 rounded-lg shadow-sm"
        v-for="(gamePlayer, index) in mafiaStore.gamePlayers"
        :key="index"
      >
        <div class="flex justify-between items-center">
          <div class="font-semibold text-lg">{{ gamePlayer.name }}</div>
          <button @click="toggleRole(index)" class="text-sm text-red-600 hover:underline">
            <IconShow v-if="shownRoles[index]" class="text-2xl" />
            <IconHide v-else class="text-2xl" />
          </button>
        </div>

        <div v-if="shownRoles[index]" class="mt-2 text-sm">
          نقش:
          <span
            class="font-medium pr-2"
            :class="gamePlayer.role.team === 'mafia' ? 'text-red-600' : 'text-green-600'"
          >
          {{ gamePlayer.role.team === 'citizen' ? 'شهروند' : 'مافیا' }} -
            {{ gamePlayer.role.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMafiaStore } from '@/stores/mafia.store'
import IconShow from '@/components/icons/IconShow.vue'
import IconHide from '@/components/icons/IconHide.vue'

const mafiaStore = useMafiaStore()

// وضعیت نمایش نقش‌ها برای همه بازیکنان
const shownRoles = ref<boolean[]>([])

// نمایش یا مخفی کردن همه نقش‌ها
const toggleAllRolesVisibility = () => {
  const allVisible = shownRoles.value.every((shown) => shown)
  if (allVisible) {
    // اگر همه نمایش داده شده‌اند، مخفی کنیم
    shownRoles.value = shownRoles.value.map(() => false)
  } else {
    // اگر یکی یا بیشتر مخفی هستند، همه رو نشون بدیم
    shownRoles.value = shownRoles.value.map(() => true)
  }
}

const toggleRole = (index: number) => {
  // وقتی یک نقش رو باز می‌کنیم، بقیه رو مخفی می‌کنیم
  if (shownRoles.value[index]) {
    // اگه همین نقش باز بود، همون رو می‌بندیم
    shownRoles.value[index] = false
  } else {
    // بقیه نقش‌ها رو مخفی می‌کنیم
    shownRoles.value = shownRoles.value.map(() => false)
    // فقط این یکی رو نمایش می‌دیم
    shownRoles.value[index] = true
  }
}

// بعد از تقسیم نقش‌ها، وضعیت نمایش نقش‌ها رو ریست می‌کنیم
const originalAssign = mafiaStore.assignRolesToPlayers
mafiaStore.assignRolesToPlayers = () => {
  originalAssign()
  shownRoles.value = mafiaStore.gamePlayers.map(() => false)
}
</script>
