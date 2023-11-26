import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { defineConfig } from 'vite'
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
        'graphics/hd-solo': resolve(__dirname, 'graphics/hd-solo.html'),
        'graphics/sd-solo': resolve(__dirname, 'graphics/sd-solo.html'),
        'graphics/gb-solo': resolve(__dirname, 'graphics/gb-solo.html'),
        'graphics/hd-race2': resolve(__dirname, 'graphics/hd-race2.html'),
        'graphics/sd-race2': resolve(__dirname, 'graphics/sd-race2.html'),
        'graphics/hd-race4': resolve(__dirname, 'graphics/hd-race4.html'),
        'graphics/sd-race4': resolve(__dirname, 'graphics/sd-race4.html'),
      },
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
})
