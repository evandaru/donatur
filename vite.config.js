import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {

    proxy: {
      'https://url.vercel.app/api': {
        target: 'https://api.notion.com/v1/databases/f943b13338d643b3b91d9df822f1ed06/query',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // onProxyReq: (proxyReq) => {
        //   proxyReq.setHeader('Access-Control-Allow-Origin', '*');
        //   proxyReq.setHeader('Access-Control-Allow-Methods', 'POST');
        //   proxyReq.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        // },
      },
    },
  },
});
