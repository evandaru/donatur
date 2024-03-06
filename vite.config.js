import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.notion.com/v1/databases/f943b13338d643b3b91d9df822f1ed06/query',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/apicreate': {
        target: 'https://api.notion.com/v1/pages',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apicreate/, ''),
        // Tambahkan properti `method` untuk menentukan metode permintaan
        method: 'POST',
      },
    },
  },
});
