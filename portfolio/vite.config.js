import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('/react/')) return 'vendor'
            if (id.includes('swiper')) return 'swiper'
          }
        },
      },
    },
  },
})
