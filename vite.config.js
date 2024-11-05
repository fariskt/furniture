import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow external access
    port: process.env.PORT || 3000, // Use PORT from environment variable, default to 3000
  },
  build: {
    outDir: 'dist', // Specify the output directory for production builds
  },
});
