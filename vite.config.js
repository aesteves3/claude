import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import prerender from 'vite-plugin-prerender'

const Renderer = prerender.PuppeteerRenderer

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE_PATH || '/'

  return {
    base,
    logLevel: 'error',
    plugins: [
      react(),
      prerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
          '/',
          '/curso/arrais',
          '/curso/mestre',
          '/curso/capitao',
          '/pratica/arrais',
          '/pratica/vela',
          '/internacional/nauticed',
          '/internacional/asa',
          '/internacional/issa',
          '/referencias',
          '/livros',
          '/comandantes',
        ],
        renderer: new Renderer({
          headless: true,
          renderAfterDocumentEvent: 'render-event',
          renderAfterTime: 3000,
        }),
      }),
    ],
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
