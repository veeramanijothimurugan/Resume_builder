import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'pdfmake/build/pdfmake': resolve(__dirname, 'node_modules/pdfmake/build/pdfmake.js'),
      'pdfmake/build/vfs_fonts': resolve(__dirname, 'node_modules/pdfmake/build/vfs_fonts.js'),
    },
  },
});
