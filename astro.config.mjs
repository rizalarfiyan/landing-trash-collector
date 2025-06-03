// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown'
import icon from "astro-icon";

import alpinejs from '@astrojs/alpinejs';

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
    icon(),
    alpinejs({
      entrypoint: '/src/entrypoint'
    })
  ],
  scopedStyleStrategy: 'where',
  vite: {
    plugins: [tailwindcss()],
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
});