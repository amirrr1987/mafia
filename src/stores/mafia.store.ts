import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMafiaStore = defineStore('mafia', () => {
  const players = ref<string[]>([])
  const roles = ref<string[]>([])

  return { players, roles }
})
