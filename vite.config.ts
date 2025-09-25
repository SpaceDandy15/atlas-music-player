import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',            // for React
    setupFiles: './setupTests.ts',   // MSW setup
    coverage: {
      provider: 'v8',                // use V8 coverage provider
      reporter: ['text', 'html'],    // CLI + HTML report
      all: true,                     // include all files, not just tested
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/__tests__/**', 'node_modules/**'],
      reportsDirectory: 'coverage', // output directory
    }
  },
});
