<template>
  <div class="p-4">
    <div class="flex">
      <div class="flex-1">
        <h2 class="">شهروند</h2>
        <Divider />
        <CheckboxGroup class="grid gap-4">
          <Checkbox
            v-for="(role, index) in mafiaStore.roleList.filter(
              (role) => role.side === SideEnum.CIVIC,
            )"
            :key="index"
            :value="role.role"
          >
            {{ role.label }}
          </Checkbox>
        </CheckboxGroup>
      </div>

      <div class="flex-1">
        <h2>مافیا</h2>
        <Divider />
        <CheckboxGroup class="grid gap-4">
          <Checkbox
            v-for="(role, index) in mafiaStore.roleList.filter(
              (role) => role.side === SideEnum.MAFIA,
            )"
            :key="index"
            :value="role.role"
          >
            {{ role.label }}
          </Checkbox>
        </CheckboxGroup>
      </div>
    </div>
    <!-- <CheckboxGroup class="image-checkbox" v-model:value="checked">
      <div class="grid grid-cols-2 gap-4">
        <Checkbox
          v-for="(role, index) in mafiaStore.roleList"
          :key="index"
          :value="role.role"
          class="w-full"
        >
          <RoleCard class="text-wrap" :title="role.label" :avatar="role.avatar">
            <div @click.stop="toggleExpanded(index)">
              {{ truncate(role.description, { length: isExpanded(index) ? 100000 : 100 }) }}
            </div>
          </RoleCard>
        </Checkbox>
      </div>
    </CheckboxGroup> -->
  </div>
</template>

<script setup lang="ts">
import RoleCard from '@/components/RoleCard.vue'
import { useMafiaStore } from '@/stores/mafia.store'
import { Checkbox, CheckboxGroup, Divider } from 'ant-design-vue/es'
import { SideEnum } from '@/models/mafia.models'
import { ref } from 'vue'

const mafiaStore = useMafiaStore()
const checked = ref<string[]>([])
const expandedIndexes = ref<Set<number>>(new Set())

const toggleExpanded = (index: number) => {
  if (expandedIndexes.value.has(index)) {
    expandedIndexes.value.delete(index)
  } else {
    expandedIndexes.value.add(index)
  }
}

const isExpanded = (index: number) => {
  return expandedIndexes.value.has(index)
}
</script>

<style lang="less">
.image-checkbox.ant-checkbox-group {
  .ant-checkbox-wrapper {
    @apply w-full;

    .ant-checkbox {
      @apply hidden;

      & + span {
        @apply w-full;
      }
    }

    &.ant-checkbox-wrapper-checked {
      span {
        &:nth-child(2) {
          .role-card {
            @apply bg-primary;
          }
        }
      }
    }
  }
}
</style>
