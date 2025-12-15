import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/Edusity-Project',
})
