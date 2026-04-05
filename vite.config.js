import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // For GitHub Pages deployment - change 'portfolio' to your repo name
  // If deploying to https://<username>.github.io/, set base to '/'
  // If deploying to https://<username>.github.io/<repo>/, set base to '/<repo>/'
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
