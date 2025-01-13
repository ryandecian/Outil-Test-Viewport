import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permet d'écouter sur toutes les interfaces réseau
    port: 3000, // Ou tout autre port que vous préférez
  },
})
