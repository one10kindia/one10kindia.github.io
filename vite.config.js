import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works when served from a GitHub Pages
  // project path (https://<user>.github.io/<repo>/) without hardcoding
  // the repo name here.
  base: './',
  plugins: [react()],
})
