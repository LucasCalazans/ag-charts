import { websiteTraffic } from './data.js';
import { baseChrome } from './common.js';

export const combo = [
  {
    id: 'combo-column-line',
    label: 'Combo — coluna + linha',
    description: 'Coluna para o volume e linha para a taxa, em eixos separados.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Tráfego × Conversão' }),
      data: websiteTraffic,
      series: [
        { type: 'bar',  xKey: 'mes', yKey: 'visitantes', yName: 'Visitantes' },
        { type: 'line', xKey: 'mes', yKey: 'conversao',  yName: 'Conversão (%)', marker: { enabled: true } },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left',  keys: ['visitantes'], title: { text: 'Visitantes' } },
        { type: 'number',   position: 'right', keys: ['conversao'],  title: { text: 'Conversão (%)' } },
      ],
    }),
  },
  {
    id: 'combo-area-line',
    label: 'Combo — área + linha',
    description: 'Área de fundo para volume + linha de taxa por cima.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Tráfego × Conversão' }),
      data: websiteTraffic,
      series: [
        { type: 'area', xKey: 'mes', yKey: 'visitantes', yName: 'Visitantes', fillOpacity: 0.45 },
        { type: 'line', xKey: 'mes', yKey: 'conversao',  yName: 'Conversão (%)', marker: { enabled: true, size: 8 } },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left',  keys: ['visitantes'], title: { text: 'Visitantes' } },
        { type: 'number',   position: 'right', keys: ['conversao'],  title: { text: 'Conversão (%)' } },
      ],
    }),
  },
];
