import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: 'https://api.notion.com/v1/databases/f943b13338d643b3b91d9df822f1ed06/query',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          Authorization: 'Bearer secret_dDkyTm301ESI6KmEYwLvZcoMrWWRqC9VRsxHftCwa6A',
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json'
        },
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log(`[Proxy] ${req.method} ${req.url}`);
            console.log(`[Proxy] Headers: `, req.headers);

            // Ambil semua header dan hapus satu per satu
            const headers = proxyReq.getHeaders();
            Object.keys(headers).forEach((name) => {
              proxyReq.removeHeader(name);
            });

            // Mengatur setiap header satu per satu
            proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');
            proxyReq.setHeader('Host', 'api.notion.com');
            proxyReq.setHeader('Authorization', 'Bearer secret_dDkyTm301ESI6KmEYwLvZcoMrWWRqC9VRsxHftCwa6A');
            proxyReq.setHeader('accept', 'application/json');
            proxyReq.setHeader('Notion-Version', '2022-06-28');
            proxyReq.setHeader('content-type', 'application/json');

            console.log(`[Proxy] proxyReq Header: `, proxyReq.getHeaders());
          });
        }
      },
    },
  },
});
