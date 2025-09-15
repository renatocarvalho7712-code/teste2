import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',   // 👈 isso é o que faz funcionar no Netlify


  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
