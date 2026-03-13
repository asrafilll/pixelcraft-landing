import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pixelcraft.dev',
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
