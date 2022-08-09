import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/')
    }
  },
  plugins: [vue()],
  build: {
    lib: {
      entry: './packages/index.ts',
      name: 'caller-ui',
      fileName: (format) => `caller-ui.${format}.js`
      // formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
