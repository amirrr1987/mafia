import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'بازی مافیا',
        short_name: 'مافیا',
        description: 'یک بازی گروهی هیجان‌انگیز برای شبیه‌سازی جنگ مافیا',
        theme_color: '#ff0000', // رنگ تم (مثلا قرمز)
        background_color: '#ffffff', // رنگ پس‌زمینه
        start_url: '/',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png', // آیکن 192x192 برای موبایل
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/apple-touch-icon.png', // آیکن مخصوص iOS
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/favicon-32x32.png', // آیکن 32x32
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/favicon-16x16.png', // آیکن 16x16
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/favicon.ico', // آیکن favicon.ico
            sizes: '16x16',
            type: 'image/x-icon',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
