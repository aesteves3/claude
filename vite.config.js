import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE_PATH || '/'

  return {
    base,
    logLevel: 'error',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: env.VITE_API_URL
        ? undefined
        : {
            '/api': {
              target: env.VITE_DEV_API_PROXY || 'http://localhost:3001',
              changeOrigin: true,
            },
          },
    },
  }
})
