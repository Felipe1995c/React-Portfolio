import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      open: true
    },
    esbuild: {
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
    },
    
      test: {
        globals: true,
        enviroment: 'happy-dom'
      },
      })
