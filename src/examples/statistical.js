import { carsData, ageDistribution } from './data.js';
import { baseChrome } from './common.js';

export const statistical = [
  {
    id: 'scatter-basic',
    label: 'Scatter — simples',
    description: 'Dispersão entre peso e consumo de combustível.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Peso × Consumo' }),
      data: carsData,
      series: [
        {
          type: 'scatter',
          xKey: 'peso',
          yKey: 'consumo',
          xName: 'Peso (kg)',
          yName: 'Consumo (km/L)',
        },
      ],
      axes: [
        { type: 'number', position: 'bottom', title: { text: 'Peso (kg)' } },
        { type: 'number', position: 'left',   title: { text: 'Consumo (km/L)' } },
      ],
    }),
  },
  {
    id: 'bubble-basic',
    label: 'Bolha (bubble)',
    description: 'Scatter com 3ª dimensão: tamanho do ponto = potência (cv).',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Peso × Consumo × Potência' }),
      data: carsData,
      series: [
        {
          type: 'bubble',
          xKey: 'peso',
          yKey: 'consumo',
          sizeKey: 'potencia',
          xName: 'Peso (kg)',
          yName: 'Consumo (km/L)',
          sizeName: 'Potência (cv)',
        },
      ],
      axes: [
        { type: 'number', position: 'bottom', title: { text: 'Peso (kg)' } },
        { type: 'number', position: 'left',   title: { text: 'Consumo (km/L)' } },
      ],
    }),
  },
  {
    id: 'histogram-basic',
    label: 'Histograma',
    description: 'Distribuição de frequência de idades em 400 amostras sintéticas.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Distribuição de idades' }),
      data: ageDistribution,
      series: [
        {
          type: 'histogram',
          xKey: 'idade',
          xName: 'Idade',
          yName: 'Frequência',
        },
      ],
      axes: [
        { type: 'number', position: 'bottom', title: { text: 'Idade' } },
        { type: 'number', position: 'left',   title: { text: 'Frequência' } },
      ],
    }),
  },
  {
    id: 'histogram-bins',
    label: 'Histograma — 30 bins',
    description: 'Mesmos dados com binCount maior — granularidade mais fina.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Distribuição de idades (30 bins)' }),
      data: ageDistribution,
      series: [
        {
          type: 'histogram',
          xKey: 'idade',
          xName: 'Idade',
          yName: 'Frequência',
          binCount: 30,
        },
      ],
      axes: [
        { type: 'number', position: 'bottom', title: { text: 'Idade' } },
        { type: 'number', position: 'left',   title: { text: 'Frequência' } },
      ],
    }),
  },
];
