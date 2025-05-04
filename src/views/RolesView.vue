<template>
  <div class="p-4">
    <CheckboxGroup v-model:value="checked">
      <div class="grid grid-cols-2 gap-4">
        <Checkbox
          v-for="(role, index) in mafiaStore.roleList"
          :key="index"
          :value="role.role"
          class="w-full"
        >
          <RoleCard class="text-wrap" :title="role.label">
            <div @click.stop="toggleExpanded(index)">
              {{ truncate(role.description, { length: isExpanded(index) ? 100000 : 100 }) }}
            </div>
          </RoleCard>
        </Checkbox>
      </div>
    </CheckboxGroup>
  </div>
</template>

<script setup lang="ts">
import RoleCard from '@/components/RoleCard.vue'
import { useMafiaStore } from '@/stores/mafia.store'
import { Checkbox, CheckboxGroup } from 'ant-design-vue/es'
import { truncate } from 'lodash'
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
.ant-checkbox-group {
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
