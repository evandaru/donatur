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
        headers: {
          Authorization: 'secret_dDkyTm301ESI6KmEYwLvZcoMrWWRqC9VRsxHftCwa6Asad',
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json'
        },
        method: 'POST',
        allowMethods: ['POST']
      },
    },
  },
});
