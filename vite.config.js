import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';

// Lê a versão do ag-charts-community direto do node_modules para evitar
// drift entre o que está instalado e o que aparece na UI.
const agChartsVersion = JSON.parse(
  readFileSync(
    new URL('./node_modules/ag-charts-community/package.json', import.meta.url),
    'utf8'
  )
).version;

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, host: true },
  build: { outDir: 'dist', sourcemap: false },
  define: {
    __AG_CHARTS_VERSION__: JSON.stringify(agChartsVersion),
  },
});
