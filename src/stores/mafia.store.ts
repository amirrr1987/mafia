import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { CivicRoleEnum, MafiaRoleEnum, SideEnum, type IRole } from '@/models/mafia.models'

export const useMafiaStore = defineStore('mafia', () => {
  const userList = useLocalStorage<string[]>('userList', [])

  const findUserIndex = (user: string) => {
    return userList.value.findIndex((item) => {
      return item === user
    })
  }
  const addUser = (user: string) => {
    userList.value.push(user)
  }
  const removeUser = (user: string) => {
    const index = findUserIndex(user)
    if (index >= 0) {
      userList.value.splice(index, 1)
    }
  }

  const roleList = useLocalStorage<IRole[]>('roleList', [
    {
      label: 'رئیس مافیا',
      role: MafiaRoleEnum.MAFIA_BOSS,
      side: SideEnum.MAFIA,
      description: 'رهبر اصلی مافیا که در تصمیم‌گیری‌های شبانه نقش دارد.',
    },
    {
      label: 'مافیا',
      role: MafiaRoleEnum.MAFIA,
      side: SideEnum.MAFIA,
      description: 'عضو تیم مافیا که در شب‌ها برای حذف شهروندان تصمیم‌گیری می‌کند.',
    },
    {
      label: 'گروگانگیر',
      role: MafiaRoleEnum.HOSTAGE_TAKER,
      side: SideEnum.MAFIA,
      description: 'هر شب می‌تواند یک بازیکن را گروگان بگیرد تا از توانایی‌اش استفاده نکند.',
    },
    {
      label: 'مذاکره کننده',
      role: MafiaRoleEnum.NEGOTIATOR,
      side: SideEnum.MAFIA,
      description: 'با صحبت و چانه‌زنی در طول بازی، سعی در گمراه‌کردن شهروندان دارد.',
    },
    {
      label: 'دکتر',
      role: CivicRoleEnum.DOCTOR,
      side: SideEnum.CIVIC,
      description: 'هر شب می‌تواند جان یک نفر را نجات دهد.',
      avatar: 'https://magerta.ir/wp-content/uploads/2020/04/new-doctor-card.jpg',
    },
    {
      label: 'کارآگاه',
      role: CivicRoleEnum.DETECTIVE,
      side: SideEnum.CIVIC,
      description: 'هر شب نقش یک بازیکن را بررسی می‌کند.',
      avatar: 'https://magerta.ir/wp-content/uploads/2020/04/new-detective-card.jpg',
    },
    {
      label: 'شهروند',
      role: CivicRoleEnum.CIVILIAN,
      side: SideEnum.CIVIC,
      description: 'نقش خاصی ندارد و باید با استدلال، مافیا را شناسایی کند.',
    },
    {
      label: 'تک‌تیرانداز',
      role: CivicRoleEnum.SNIPER,
      side: SideEnum.CIVIC,
      description:
        'یک بار در طول بازی می‌تواند بازیکنی را هدف قرار دهد. اگر درست بزند، زنده می‌ماند.',
      avatar: 'https://magerta.ir/wp-content/uploads/2020/04/new-sniper-card.jpg',
    },
    {
      label: 'زره‌پوش',
      role: CivicRoleEnum.BULLETPROOF,
      side: SideEnum.CIVIC,
      description: 'در برابر اولین حمله مافیا مقاوم است و زنده می‌ماند.',
    },
  ])

  const findRoleIndex = (role: string) => {
    return roleList.value.findIndex((item) => {
      return item.role == role
    })
  }
  const addRole = (role: IRole['role']) => {
    // roleList.value.push(role)
  }
  const removeRole = (role: string) => {
    const index = findRoleIndex(role)
    if (index >= 0) {
      roleList.value.splice(index, 1)
    }
  }

  return { userList, addUser, removeUser, roleList, addRole, removeRole }
})
