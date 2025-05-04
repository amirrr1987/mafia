<template>
  <LayoutHeader class="!leading-12 !p-inline-4 flex items-center justify-between !bg-primary">
    <Tooltip
      :title="settingsStore.fullscreen.isFullscreen ? t('exitFullScreen') : t('fullScreen')"
      size="small"
    >
      <AzButton
        :icon="settingsStore.fullscreen.isFullscreen ? 'subway:close-2' : 'subway:fullscreen'"
        type="text"
        class="text-white"
        @click="settingsStore.fullscreen.toggle"
      />
    </Tooltip>

    <Tooltip :title="t('panelSetting')" size="small">
      <AzButton icon="tabler:settings" type="text" class="text-white" @click="settingsModal.open" />
      <AzDrawer v-model:open="settingsModal.isOpen.value" @save="settingsModal.close" />
    </Tooltip>
  </LayoutHeader>
</template>
<script lang="ts" setup>
import { LayoutHeader, Tooltip } from 'ant-design-vue/es'
import { useSettingsStore } from '@/stores/settings.store'
import { AzButton, AzDrawer } from '@/components'
import { useI18n } from 'vue-i18n'

import { useModal } from '@/composable'

const settingsModal = useModal()
const settingsStore = useSettingsStore()

const { t } = useI18n()
</script>
