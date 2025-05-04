<template>
  <div class="p-4">
    <div class="grid grid-cols-2 gap-4">
      <CheckboxGroup
        v-model:value="checked"
        v-for="(role, index) in mafiaStore.roleList"
        :key="index"
      >
        <Checkbox>
          <RoleCard class="text-wrap" :title="role.label">
            <div class="" @click="toggleLength(index)">
              {{ truncate(role.description, { length: length }) }}
            </div>
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
import { ref } from 'vue'
const mafiaStore = useMafiaStore()
const checked = ref()
const length = ref(10)
const toggleLength = (index) => {
  if (length.value === 100 && index == checked.value) {
    length.value = 100000
  } else {
    length.value = 100
  }
}
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
