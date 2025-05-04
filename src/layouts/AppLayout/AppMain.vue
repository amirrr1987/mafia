<template>
  <LayoutContent class="p-4 overflow-y-auto overflow-x-hidden relative h-full">
    <RouterView v-slot="{ Component }">
      <Transition :name="randomAnimation" mode="out-in">
        <component
          :is="Component"
          class="absolute inset-0 w-full h-full"
        />
      </Transition>
    </RouterView>
  </LayoutContent>
</template>


<script lang="ts" setup>
import { RouterView, useRouter } from 'vue-router'
import { LayoutContent } from 'ant-design-vue/es'
import { onMounted, reactive, ref } from 'vue'

const randomAnimation = ref('slide-x')
const animations = reactive(['slide-x', 'slide-y'])
const getRandomAnimation = () => {
  const randomIndex = Math.floor(Math.random() * animations.length)
  return animations[randomIndex]
}

onMounted(() => {
  const router = useRouter()
  router.beforeEach((to, from, next) => {
    randomAnimation.value = getRandomAnimation()
    next()
  })
})
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
