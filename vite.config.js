import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // For GitHub Pages deployment at https://<username>.github.io/ use '/'
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
