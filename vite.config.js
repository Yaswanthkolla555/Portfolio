import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"Portfolio",
  css:{
    modules:{
      localsConvention:"camelCase"
    }
  },
  server: {
    host: true, // This will allow access from your network
    port: 5173, // Ensure the port matches what you're using
  },
})

