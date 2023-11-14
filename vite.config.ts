import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'package.json',
          dest: '.',
        },
      ],
    }),
  ],
  base: '/bundles/pgrf4-layout/',
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'graphics/setup': resolve(__dirname, 'graphics/setup.html'),
      },
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
})
