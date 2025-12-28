import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  // GitHub Pages project sites are served from '/<repo-name>/'
  // Priority:
  // 1) BASE_PATH env (manual override)
  // 2) GitHub Actions env (auto-detect repo name)
  // 3) local default '/'
  const basePathOverride = process.env.BASE_PATH
  const ghRepo = process.env.GITHUB_REPOSITORY // e.g. "owner/repo"
  const ghRepoName = ghRepo ? ghRepo.split('/')[1] : undefined
  const base =
    basePathOverride ||
    (process.env.GITHUB_ACTIONS && ghRepoName ? `/${ghRepoName}/` : '/')

  return {
    base,
    plugins: [react()],
  
  build: {
    // Optimize build output
    target: 'es2015',
    minify: 'esbuild', // Using esbuild (faster and built-in)
    
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
        }
      }
    },
    
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Source maps for debugging (disable in production if needed)
    sourcemap: false,
    
    // Asset optimization
    assetsInlineLimit: 4096, // 4kb - inline smaller assets as base64
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'react-icons']
  },
  
    // For GitHub Pages under a repo subpath, set base to '/<repo-name>/'
    // base: '/your-repo-name/'
  }
})
