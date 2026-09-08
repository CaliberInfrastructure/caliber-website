import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode, isSsrBuild }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      // Multi-page site, not an SPA. Without this, dev/preview fall back to
      // index.html for any extensionless path, which masks broken routes
      // locally and does not match how Vercel serves the built output.
      appType: 'mpa' as const,
      build: {
        // Multi-page build. The homepage is the React app; Terms, Privacy and
        // the pillar guide are static HTML so their content is in the served
        // HTML for crawlers and AI retrieval without executing JavaScript.
        // The SSR pass (`vite build --ssr entry-server.tsx`) prerenders the
        // homepage into dist/index.html and must keep its own single entry.
        rollupOptions: isSsrBuild ? {} : {
          input: {
            main:    path.resolve(__dirname, 'index.html'),
            terms:   path.resolve(__dirname, 'terms.html'),
            privacy: path.resolve(__dirname, 'privacy.html'),
            guide:   path.resolve(__dirname, 'guide/med-spa-ai-automation.html'),
          },
        },
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
