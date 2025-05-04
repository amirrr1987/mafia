import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { RoleEnum, SideEnum, type IRole } from '@/models/mafia.models'

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
      role: RoleEnum.MAFIA_BOSS,
      side: SideEnum.MAFIA,
      description: 'رهبر اصلی مافیا که در تصمیم‌گیری‌های شبانه نقش دارد.',
    },
    {
      label: 'مافیا',
      role: RoleEnum.MAFIA,
      side: SideEnum.MAFIA,
      description: 'عضو تیم مافیا که در شب‌ها برای حذف شهروندان تصمیم‌گیری می‌کند.',
    },
    {
      label: 'دکتر',
      role: RoleEnum.DOCTOR,
      side: SideEnum.CIVIC,
      description: 'هر شب می‌تواند جان یک نفر را نجات دهد.',
      avatar: 'https://magerta.ir/wp-content/uploads/2020/04/new-doctor-card.jpg',
    },
    {
      label: 'کارآگاه',
      role: RoleEnum.DETECTIVE,
      side: SideEnum.CIVIC,
      description: 'هر شب نقش یک بازیکن را بررسی می‌کند.',
      avatar: 'https://magerta.ir/wp-content/uploads/2020/04/new-detective-card.jpg',
    },
    {
      label: 'شهروند',
      role: RoleEnum.CIVILIAN,
      side: SideEnum.CIVIC,
      description: 'نقش خاصی ندارد و باید با استدلال، مافیا را شناسایی کند.',
    },
    {
      label: 'تک‌تیرانداز',
      role: RoleEnum.SNIPER,
      side: SideEnum.CIVIC,
      description: 'یک تیر دارد که می‌تواند فقط یک بار استفاده کند.',
      avatar: 'https://magerta.ir/wp-content/uploads/2020/04/new-sniper-card.jpg',
    },
    {
      label: 'سایلنسر',
      role: RoleEnum.SILENCER,
      side: SideEnum.MAFIA,
      description: 'می‌تواند یکی از بازیکنان را برای روز بعد ساکت کند.',
    },
    {
      label: 'دلقک',
      role: RoleEnum.JOKER,
      side: SideEnum.NEUTRAL,
      description: 'اگر در رأی‌گیری روزانه حذف شود، برنده بازی است.',
    },
    {
      label: 'بادیگارد',
      role: RoleEnum.BODYGUARD,
      side: SideEnum.CIVIC,
      description: 'از یک نفر محافظت می‌کند و در صورت حمله، به‌جای او کشته می‌شود.',
    },
    {
      label: 'وکیل',
      role: RoleEnum.LAWYER,
      side: SideEnum.MAFIA,
      description: 'نقش حمایتی برای اعضای مافیاست در زمان رأی‌گیری.',
    },
    {
      label: 'پدرخوانده',
      role: RoleEnum.GODFATHER,
      side: SideEnum.MAFIA,
      description: 'رهبر مخفی مافیا که برای کارآگاه بی‌گناه به‌نظر می‌رسد.',
    },
    {
      label: 'پرستار',
      role: RoleEnum.NURSE,
      side: SideEnum.CIVIC,
      description: 'در صورت مرگ دکتر، می‌تواند نقش او را ادامه دهد.',
    },
    {
      label: 'روانشناس',
      role: RoleEnum.PSYCHOLOGIST,
      side: SideEnum.CIVIC,
      description: 'می‌تواند نقش یکی از بازیکنان را برای یک شب غیرفعال کند.',
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
