// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,                 // enables describe/it/expect without imports
    environment: 'jsdom',          // needed for React components
    setupFiles: './setupTests.ts', // runs MSW + jest-dom
    include: ['src/__tests__/**/*.test.{ts,tsx}'], // test pattern
  },
});
