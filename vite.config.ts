import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'beansBaseActions',
      fileName: (format) => `beansBaseActions.${format}.ts`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      }
    }),
    dts({
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
      include: ['src/components/**/*'],
      exclude: ['src/**/*.spec.ts', 'src/**/*.test.ts'],
      beforeWriteFile: (filePath, content) => {
        return { filePath, content };
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});