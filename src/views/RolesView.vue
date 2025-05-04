<template>
  <div class="p-4">
    <div class="grid grid-cols-2 gap-4">
      <CheckboxGroup v-for="role in mafiaStore.roleList" :key="role.role">
        <Checkbox class="">
          <RoleCard class="text-wrap" :title="role.label">
            {{ truncate(role.description, { length: 100 }) }}
          </RoleCard>
        </Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>
<script setup lang="ts">
import RoleCard from '@/components/RoleCard.vue'
import { useMafiaStore } from '@/stores/mafia.store'
import { Checkbox, CheckboxGroup } from 'ant-design-vue/es'
import { truncate } from 'lodash'
const mafiaStore = useMafiaStore()
</script>
<style lang="less">
.ant-checkbox-group {
  .ant-checkbox-wrapper {
    width: 100%;
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
            background-color: red;
          }
        }
      }
    }
  }
}
</style>
