import { ref } from 'vue'

export const enum SideEnum {
  CIVIC = 'civic',
  MAFIA = 'mafia',
}

export const enum MafiaRoleEnum {
  MAFIA_BOSS = 'mafia boss',
  HOSTAGE_TAKER = 'hostage taker',
  NEGOTIATOR = 'negotiator',
  MAFIA = 'simple mafia',
}

export const enum CivicRoleEnum {
  DOCTOR = 'doctor',
  DETECTIVE = 'detective',
  CIVILIAN = 'civilian',
  SNIPER = 'sniper',
  BULLETPROOF = 'bulletproof',
}

export interface IRole {
  avatar?: string
  label: string
  side: SideEnum
  role: MafiaRoleEnum | CivicRoleEnum
  description: string
}
