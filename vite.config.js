import { defineConfig } from 'vite';
import glob from 'fast-glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import path from 'path';

export default defineConfig(({ command }) => {
  return {
    base: '/goit-js-hw-09/',
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        input: glob.sync(path.resolve('src/*.html')),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) return 'vendor';
          },
          entryFileNames: chunk => chunk.name === 'commonHelpers' ? 'commonHelpers.js' : '[name].js',
          assetFileNames: asset => asset.name?.endsWith('.html') ? '[name].[ext]' : 'assets/[name]-[hash][extname]'
        }
      }
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/*.html'])
    ]
  };
});