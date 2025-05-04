<template>
  <Card prefix-cls="role-card" class="mb-12" hoverable ref="roleCardRef">
    <template #title>{{ props.title }}</template>

    <template #cover>
      <img
        alt="example"
        src="https://images-cdn.fantasyflightgames.com/filer_public/24/7d/247d13ce-5542-43b7-82fa-0e8e317c4028/godfathercard.png"
      />
    </template>
    <template #default>
      <slot />
    </template>
  </Card>
</template>
<script setup lang="ts">
import { Card } from 'ant-design-vue/es'
import { ref } from 'vue'
const roleCardRef = ref<HTMLElement | null>(null)
interface Props {
  title?: string
  hasFullScreen?: boolean
  isLoading?: boolean
  icon?: {
    name: string
    class?: string
  }
}
const props = withDefaults(defineProps<Props>(), {})
</script>
<style lang="less">
@namespace: 'az-card';
.role-card {
  .role-card-head-title {
    @apply flex justify-between pt-4;
  }
  &.role-card-hoverable {
    &:hover {
      @apply shadow-md;
    }
  }
}
</style>
