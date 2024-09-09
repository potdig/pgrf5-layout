import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const inputDir = 'src/browser/graphics/input'
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
  base: '/bundles/pgrf5-layout/',
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'graphics/setup': resolve(__dirname, `${inputDir}/setup.html`),
        'graphics/thanks': resolve(__dirname, `${inputDir}/thanks.html`),
        'graphics/hd-solo': resolve(__dirname, `${inputDir}/hd-solo.html`),
        'graphics/sd-solo': resolve(__dirname, `${inputDir}/sd-solo.html`),
        'graphics/gb-solo': resolve(__dirname, `${inputDir}/gb-solo.html`),
        'graphics/hd-race2': resolve(__dirname, `${inputDir}/hd-race2.html`),
        'graphics/sd-race2': resolve(__dirname, `${inputDir}/sd-race2.html`),
        'graphics/hd-race4': resolve(__dirname, `${inputDir}/hd-race4.html`),
        'graphics/sd-race4': resolve(__dirname, `${inputDir}/sd-race4.html`),
      },
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
})
