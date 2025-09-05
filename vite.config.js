import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // ✅ Proxy TMDB API
      '/api/tmdb': {
        target: 'https://api.themoviedb.org/3',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/tmdb/, ''),
      },

      // ✅ Proxy YouTube API (for fetching video info, not embedding)
      '/api/youtube': {
        target: 'https://www.googleapis.com/youtube/v3',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/youtube/, ''),
      },
    },
  },
})
