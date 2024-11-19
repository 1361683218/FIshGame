import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FIshGame/',
  plugins: [vue()],
  server: {
    port: 9205
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'mediapipe': ['@mediapipe/pose'],
          'tensorflow': [
            '@tensorflow/tfjs-core',
            '@tensorflow/tfjs-backend-webgl'
          ]
        }
      }
    }
  }
})
