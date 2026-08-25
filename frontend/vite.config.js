import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', 
    port: 5173,
    // 🛠️ Proxy setup: /api requests will automatically go to Express Backend
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Apne backend ka port yahan set karein (e.g. 5000 / 8000)
        changeOrigin: true,
        secure: false,
      },
    },
  },
})