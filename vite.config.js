import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Optional — sets root path
  preview: {
    port: 5000, // Railway uses PORT env (already passed in package.json)
    host: true, // Expose on network
    allowedHosts: ['spn-production.up.railway.app'] // ✅ Allow Railway domain
  }
})
