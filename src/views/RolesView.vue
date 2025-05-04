<template>
  <div class="p-4">
    <div class="grid grid-cols-2 gap-4">
      <CheckboxGroup v-for="role in mafiaStore.roleList" :key="role.role">
        <Checkbox class="">
          <Card class="text-wrap" :title="role.label">
            <template #extra>
              <Avatar :src="role.avatar" />
            </template>
            {{ role.description }}
          </Card>
        </Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMafiaStore } from '@/stores/mafia.store'
import { Checkbox, CheckboxGroup, Avatar } from 'ant-design-vue/es'
import { Card } from 'ant-design-vue/es'
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
          .ant-card-body {
            @apply rounded bg-primary;
          }
        }
      }
    }
  }
}
</style>
