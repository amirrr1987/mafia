import { ref } from 'vue'

export const enum SideEnum {
  CIVIC = 'civic',
  MAFIA = 'mafia',
  NEUTRAL = 'neutral',
}

export const enum RoleEnum {
  MAFIA_BOSS = 'mafia_boss',
  MAFIA = 'mafia',
  DOCTOR = 'doctor',
  DETECTIVE = 'detective',
  CIVILIAN = 'civilian',
  SNIPER = 'sniper',
  SILENCER = 'silencer',
  JOKER = 'joker',
  BODYGUARD = 'bodyguard',
  LAWYER = 'lawyer',
  GODFATHER = 'godfather',
  NURSE = 'nurse',
  PSYCHOLOGIST = 'psychologist',
}

export interface IRole {
  avatar?: string
  label: string
  side: SideEnum
  role: RoleEnum
  description: string
}
