<template>
  <div class="player py-10">
    <div class="container mx-auto px-4 max-w-xl">
      <h1 class="text-3xl font-bold text-center text-red-600 mb-8">🎭 بازیکنان بازی مافیا</h1>

      <div
        v-for="(player, index) in mafiaStore.players"
        :key="index"
        class="mb-4 rounded-xl border border-red-400 flex justify-between items-center p-4 hover:shadow-lg transition"
      >
        <div class="text-lg font-medium text-red-500">{{ player }}</div>
        <button
          class="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition"
          @click="removePlayer(index)"
        >
          <IconRemove class="w-5 h-5" />
        </button>
      </div>

      <div class="flex gap-2 mt-6">
        <input
          type="text"
          v-model="newPlayer"
          placeholder="نام بازیکن جدید..."
          class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
          @keydown.enter="addNewPlayer"
        />
        <button
          class="bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md transition"
          @click="addNewPlayer"
        >
          <IconAdd class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconAdd from '@/components/icons/IconAdd.vue'
import IconRemove from '@/components/icons/IconRemove.vue'
import { useMafiaStore } from '@/stores/mafia.store'
import { ref } from 'vue'

const mafiaStore = useMafiaStore()

const newPlayer = ref('')
const addNewPlayer = () => {
  if (newPlayer.value.trim().length === 0 || mafiaStore.players.includes(newPlayer.value.trim()))
    return
  mafiaStore.players.push(newPlayer.value.trim())
  newPlayer.value = ''
}
const removePlayer = (index: number) => {
  mafiaStore.players.splice(index, 1)
}
</script>
