import { monthlyRevenue, productMix } from './data.js';
import { baseChrome } from './common.js';

export const cartesian = [
  {
    id: 'line-basic',
    label: 'Linha — simples',
    description: 'Uma única série de linha mostrando vendas mensais.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Vendas mensais', subtitle: 'Em milhares de R$' }),
      data: monthlyRevenue,
      series: [
        { type: 'line', xKey: 'month', yKey: 'vendas', yName: 'Vendas' },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number', position: 'left' },
      ],
    }),
  },
  {
    id: 'line-multi',
    label: 'Linha — múltiplas séries',
    description: 'Três métricas plotadas no mesmo eixo para comparação.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Vendas, lucro e despesas' }),
      data: monthlyRevenue,
      series: [
        { type: 'line', xKey: 'month', yKey: 'vendas',   yName: 'Vendas' },
        { type: 'line', xKey: 'month', yKey: 'lucro',    yName: 'Lucro' },
        { type: 'line', xKey: 'month', yKey: 'despesas', yName: 'Despesas' },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left'  },
      ],
    }),
  },
  {
    id: 'line-smoothed',
    label: 'Linha — suavizada',
    description: 'Interpolação suave entre os pontos com marcadores visíveis.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Linha suavizada' }),
      data: monthlyRevenue,
      series: [
        {
          type: 'line',
          xKey: 'month',
          yKey: 'vendas',
          yName: 'Vendas',
          interpolation: { type: 'smooth' },
          marker: { enabled: true, size: 8 },
        },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left'  },
      ],
    }),
  },
  {
    id: 'line-stepped',
    label: 'Linha — escalonada',
    description: 'Interpolação stepped, comum para dados discretos no tempo.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Linha escalonada' }),
      data: monthlyRevenue,
      series: [
        {
          type: 'line',
          xKey: 'month',
          yKey: 'vendas',
          yName: 'Vendas',
          interpolation: { type: 'step', position: 'middle' },
        },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left'  },
      ],
    }),
  },
  {
    id: 'column-basic',
    label: 'Coluna — simples',
    description: 'Barras verticais (column) — uma série por categoria.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Vendas mensais' }),
      data: monthlyRevenue,
      series: [
        { type: 'bar', xKey: 'month', yKey: 'vendas', yName: 'Vendas' },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left'  },
      ],
    }),
  },
  {
    id: 'column-grouped',
    label: 'Coluna — agrupada',
    description: 'Várias séries lado a lado em cada categoria.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Vendas por trimestre' }),
      data: productMix,
      series: [
        { type: 'bar', xKey: 'categoria', yKey: 'q1', yName: 'Q1' },
        { type: 'bar', xKey: 'categoria', yKey: 'q2', yName: 'Q2' },
        { type: 'bar', xKey: 'categoria', yKey: 'q3', yName: 'Q3' },
        { type: 'bar', xKey: 'categoria', yKey: 'q4', yName: 'Q4' },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left'  },
      ],
    }),
  },
  {
    id: 'column-stacked',
    label: 'Coluna — empilhada',
    description: 'Stacked: cada categoria soma todas as séries verticalmente.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Vendas trimestrais empilhadas' }),
      data: productMix,
      series: [
        { type: 'bar', xKey: 'categoria', yKey: 'q1', yName: 'Q1', stacked: true },
        { type: 'bar', xKey: 'categoria', yKey: 'q2', yName: 'Q2', stacked: true },
        { type: 'bar', xKey: 'categoria', yKey: 'q3', yName: 'Q3', stacked: true },
        { type: 'bar', xKey: 'categoria', yKey: 'q4', yName: 'Q4', stacked: true },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left'  },
      ],
    }),
  },
  {
    id: 'column-normalized',
    label: 'Coluna — 100% empilhada',
    description: 'Normalizado a 100%: cada categoria mostra a participação relativa.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Composição trimestral (100%)' }),
      data: productMix,
      series: [
        { type: 'bar', xKey: 'categoria', yKey: 'q1', yName: 'Q1', stacked: true, normalizedTo: 100 },
        { type: 'bar', xKey: 'categoria', yKey: 'q2', yName: 'Q2', stacked: true, normalizedTo: 100 },
        { type: 'bar', xKey: 'categoria', yKey: 'q3', yName: 'Q3', stacked: true, normalizedTo: 100 },
        { type: 'bar', xKey: 'categoria', yKey: 'q4', yName: 'Q4', stacked: true, normalizedTo: 100 },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left', label: { formatter: ({ value }) => `${value}%` } },
      ],
    }),
  },
  {
    id: 'bar-horizontal',
    label: 'Barras horizontais',
    description: 'Barras orientadas horizontalmente — direction: "horizontal".',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Vendas anuais por categoria' }),
      data: productMix.map((d) => ({ ...d, total: d.q1 + d.q2 + d.q3 + d.q4 })),
      series: [
        { type: 'bar', direction: 'horizontal', xKey: 'categoria', yKey: 'total', yName: 'Total anual' },
      ],
      axes: [
        { type: 'number',   position: 'bottom' },
        { type: 'category', position: 'left'   },
      ],
    }),
  },
  {
    id: 'area-basic',
    label: 'Área — simples',
    description: 'Área preenchida sob a linha; útil para destacar volume.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Vendas mensais' }),
      data: monthlyRevenue,
      series: [
        { type: 'area', xKey: 'month', yKey: 'vendas', yName: 'Vendas', fillOpacity: 0.6 },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left'  },
      ],
    }),
  },
  {
    id: 'area-stacked',
    label: 'Área — empilhada',
    description: 'Várias áreas empilhadas mostrando contribuição cumulativa.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Composição mensal' }),
      data: monthlyRevenue,
      series: [
        { type: 'area', xKey: 'month', yKey: 'vendas',   yName: 'Vendas',   stacked: true },
        { type: 'area', xKey: 'month', yKey: 'lucro',    yName: 'Lucro',    stacked: true },
        { type: 'area', xKey: 'month', yKey: 'despesas', yName: 'Despesas', stacked: true },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left'  },
      ],
    }),
  },
  {
    id: 'area-normalized',
    label: 'Área — 100%',
    description: 'Área normalizada a 100% — proporção relativa por mês.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Participação relativa mensal' }),
      data: monthlyRevenue,
      series: [
        { type: 'area', xKey: 'month', yKey: 'vendas',   yName: 'Vendas',   stacked: true, normalizedTo: 100 },
        { type: 'area', xKey: 'month', yKey: 'lucro',    yName: 'Lucro',    stacked: true, normalizedTo: 100 },
        { type: 'area', xKey: 'month', yKey: 'despesas', yName: 'Despesas', stacked: true, normalizedTo: 100 },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        { type: 'number',   position: 'left',   label: { formatter: ({ value }) => `${value}%` } },
      ],
    }),
  },
];
