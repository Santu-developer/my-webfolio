import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    // Optimize build output
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },
    
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
})
