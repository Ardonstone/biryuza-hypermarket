import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Подключение плагина

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Включение плагина Tailwind
  ],
})
