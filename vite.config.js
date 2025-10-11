import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  
  plugins: [react()], 
  
  
  base: '/', 
  
  server: {
    open: true, 
    
    watch: {
      usePolling: true,
    },
  },
  
  build: {
    outDir: 'dist', 
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('react-router-dom')) {
              return 'router-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});