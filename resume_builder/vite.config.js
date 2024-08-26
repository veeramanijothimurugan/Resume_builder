import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Ensure `pdfmake` is included properly in the build
      external: ['pdfmake/build/pdfmake', 'pdfmake/build/vfs_fonts'],
    },
  },
});
