<template>
  <RadioGroup class="radio-group-icon">
    <Tooltip :title="t(`${item.label}`)" v-for="item in props.items" :key="item.value">
      <Radio :value="item.value" class="bg-red">
        <Icon :class="props.iconClass" :icon="item.icon" width="32" />
      </Radio>
    </Tooltip>
  </RadioGroup>
  {{ checked }}
</template>
<script setup lang="ts">
import { Radio, RadioGroup, Tooltip } from 'ant-design-vue/es'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
interface Item {
  label: string
  icon: string
  value: string | number
}
interface Props {
  items: Item[]
  iconClass?: string
  shadowColor?: string
}
const { t } = useI18n()
const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  iconClass: '',
  shadowColor: 'red',
})

const checked = ref()
</script>
<style lang="less">
.radio-group-icon {
  @apply flex flex-wrap gap-2;
  .ant-radio-wrapper {
    margin-inline-end: 0;
    .ant-radio {
      @apply hidden;
    }
    span {
      &:nth-child(2) {
        padding: 0;
        @apply p-0 rounded;
        border: 1px solid transparent;
      }
    }
    &.ant-radio-wrapper-checked {
      span {
        &:nth-child(2) {
          // svg {
          // filter: drop-shadow(0px 0px 3px v-bind('props.shadowColor'));
          background-color: red;
          // }
        }
      }
    }
  }
}
</style>
