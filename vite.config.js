import { defineConfig } from 'vite'

// Ajusta `ignored` según carpetas/archivos que tu editor o procesos generen.
export default defineConfig({
  server: {
    watch: {
      ignored: [
        '**/node_modules/**',
        '**/dist/**',
        '**/public/**',
        '**/.git/**',
        '**/*.tmp',
        '**/*.log',
        // Añade aquí rutas generadas por tu proyecto que no deberían disparar re-optimizing
      ],
    },
  },
})
