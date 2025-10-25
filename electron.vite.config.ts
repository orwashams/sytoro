import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import { tanstackRouter } from '@tanstack/router-plugin/vite';

const paths = {
  '@core': resolve('src/core'),
  '@features': resolve('src/features'),
  '@renderer': resolve('src/core/renderer/src'),
  '@preload': resolve('src/core/preload'),
  '@main': resolve('src/core/main'),
};

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: 'src/core/main/index.ts',
      },
    },
    resolve: {
      alias: paths,
    },
  },

  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      lib: {
        entry: 'src/core/preload/index.ts',
      },
    },
    resolve: {
      alias: paths,
    },
  },

  renderer: {
    root: 'src/core/renderer',
    build: {
      rollupOptions: {
        input: 'src/core/renderer/index.html',
      },
    },
    resolve: {
      alias: paths,
    },
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
        routesDirectory: './src/core/renderer/src/routes',
        generatedRouteTree: './src/core/renderer/src/routeTree.gen.ts',
      }),
      tailwindcss(),
      react(),
    ],
  },
});
