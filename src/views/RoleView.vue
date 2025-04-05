<template>
  <div class="player py-10 min-h-screen bg-stale-900">
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-3xl font-bold text-center text-red-600 mb-10">🎭 نقش‌های بازی مافیا</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- مافیا -->
        <div>
          <h2 class="text-xl font-semibold text-red-500 mb-4">👹 تیم مافیا</h2>
          <div
            v-for="(role, index) in mafiaStore.mafias"
            :key="'mafia-' + index"
            class="flex justify-between items-center p-4 rounded-xl border border-red-400 shadow-sm hover:shadow-md transition mb-3"
          >
            <div class="text-red-500 text-lg">{{ role.name }}</div>
            <button
              class="text-red-500 hover:text-red-700 transition"
              @click="removeMafia(role.name)"
            >
              <IconRemove class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- شهروند -->
        <div>
          <h2 class="text-xl font-semibold text-green-600 mb-4">🧑‍🌾 تیم شهروند</h2>
          <div
            v-for="(role, index) in mafiaStore.citizens"
            :key="'citizen-' + index"
            class="flex justify-between items-center p-4 rounded-xl border border-green-400 shadow-sm hover:shadow-md transition mb-3"
          >
            <div class="text-green-500 text-lg">{{ role.name }}</div>
            <button
              class="text-green-600 hover:text-green-800 transition"
              @click="removeCitizen(role.name)"
            >
              <IconRemove class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <!-- فرم افزودن نقش جدید -->
      <div class="mt-10 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          v-model="newRole"
          placeholder="نام نقش جدید..."
          class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
        />
        <select
          class="appearance-auto border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-300 transition"
          v-model="newTeam"
        >
          <option disabled value="">انتخاب تیم</option>
          <option value="mafia" class="text-red-500">مافیا</option>
          <option value="citizen" class="text-green-500">شهروند</option>
        </select>
        <button
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md flex items-center justify-center transition"
          @click="addNewRole"
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

const newRole = ref('')
const newTeam = ref('')

const addNewRole = () => {
  const name = newRole.value.trim()
  if (!name || !newTeam.value) return
  if (mafiaStore.roles.find((item) => item.name === name)) return
  mafiaStore.roles.push({ name, team: newTeam.value })
  newRole.value = ''
  newTeam.value = ''
}

const removeMafia = (role: string) => {
  const index = mafiaStore.roles.findIndex((item) => item.name === role)
  if (index >= 0) mafiaStore.roles.splice(index, 1)
}

const removeCitizen = (role: string) => {
  const index = mafiaStore.roles.findIndex((item) => item.name === role)
  if (index >= 0) mafiaStore.roles.splice(index, 1)
}
</script>
