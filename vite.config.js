import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })],
  esbuild: {
    loader: 'jsx',
    include: [/src\/.*\.[jt]sx?$/],
  },
  optimizeDeps: {
    esbuildOptions: { loader: { '.js': 'jsx', '.jsx': 'jsx' } },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  build: { target: 'es2020' },
});
