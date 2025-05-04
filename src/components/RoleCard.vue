<template>
  <Card prefix-cls="role-card" class="mb-12" hoverable ref="roleCardRef">
    <template #title>{{ props.title }}</template>

    <template #cover>
      <img
        alt="example"
        src="https://images-cdn.fantasyflightgames.com/filer_public/24/7d/247d13ce-5542-43b7-82fa-0e8e317c4028/godfathercard.png"
      />
    </template>
    <template #customTab>customTab</template>
    <template #default>
      <slot  />
    </template>
    <template #extra>
      <Button @click="toggle" size="small" type="link">
        <template #icon> <Icon icon="lets-icons:full" /> </template>
      </Button>
    </template>
  </Card>

  <!-- <Card prefix-cls="az-card" ref="azCardRef" :loading="props.isLoading" bordered hoverable>
    <template #title v-if="props.title">
      <div :class="{ 'flex items-center gap-x-2 ': props.icon?.name }">
        <Icon v-if="props.icon?.name" :icon="props.icon?.name" :class="props.icon?.class" />
        {{ props.title }}
      </div>
      <Button @click="toggle" size="small" type="link" v-if="hasFullScreen">
        <template #icon> <Icon icon="lets-icons:full" /> </template>
      </Button>
    </template>

    <slot />
  </Card> -->
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Card, Button } from 'ant-design-vue/es'
import { ref } from 'vue'
import { useFullscreen } from '@vueuse/core'
const roleCardRef = ref<HTMLElement | null>(null)
const { toggle } = useFullscreen(roleCardRef)
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
