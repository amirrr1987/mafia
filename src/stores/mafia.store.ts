import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { shuffle } from 'lodash'

export type TeamType = 'citizen' | 'mafia'
export interface Role {
  name: string
  team: TeamType
}

export interface GamePlayer {
  name: string
  role: Role
}

export const useMafiaStore = defineStore('mafia', () => {
  const players = ref<string[]>(['امیر','علی','سما', 'ستایش','زهرا','شهداد','شهریار','هانی','امین','فاطمه','امیر‌حسین','فرشته'])

  const roles = ref<Role[]>([
    {
      name: 'دکتر',
      team: 'citizen',
    },
    {
      name: 'ساده',
      team: 'citizen',
    },
    {
      name: 'ریيس',
      team: 'mafia',
    },
  ])

  const mafias = computed(() => {
    return roles.value.filter((item) => item.team === 'mafia')
  })

  const citizens = computed(() => {
    return roles.value.filter((item) => item.team === 'citizen')
  })

  const gamePlayers = ref<GamePlayer[]>([])

  const assignRolesToPlayers = () => {
    const shuffledPlayers = shuffle([...players.value])
    const shuffledRoles = shuffle([...roles.value])

    while (shuffledRoles.length < shuffledPlayers.length) {
      shuffledRoles.push({
        name: 'ساده',
        team: 'citizen',
      })
    }

    if (shuffledRoles.length > shuffledPlayers.length) {
      throw new Error('نقش‌ها بیشتر از بازیکن‌ها هستن! یه کم جمع کن برادر 😅')
    }

    const assigned: GamePlayer[] = shuffledPlayers.map((name, index) => ({
      name,
      role: shuffledRoles[index],
    }))

    console.log('نقش‌ها با موفقیت تقسیم شدند! 🎉', assigned)

    gamePlayers.value = assigned
  }

  return {
    players,
    roles,
    mafias,
    citizens,
    assignRolesToPlayers,
    gamePlayers,
  }
})
