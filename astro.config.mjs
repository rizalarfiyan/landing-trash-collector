// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://trash-collector.rizalarfiyan.com',
  output: 'static',
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
        debug: false,
      }
    }),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    esbuild: {
      legalComments: 'none',
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: '[hash].js'
        }
      },
    },
  },
  build: {
    assets: 'public',
  },
  scopedStyleStrategy: 'where'
});