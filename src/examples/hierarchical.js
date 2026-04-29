import { browserShare } from './data.js';
import { baseChrome } from './common.js';

export const hierarchical = [
  {
    id: 'pie-basic',
    label: 'Pizza — simples',
    description: 'Pie chart com setor por navegador.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Participação por navegador' }),
      data: browserShare,
      series: [
        {
          type: 'pie',
          angleKey: 'uso',
          legendItemKey: 'browser',
          calloutLabelKey: 'browser',
          sectorLabelKey: 'uso',
          sectorLabel: { color: 'white', fontWeight: 'bold', formatter: ({ value }) => `${value}%` },
        },
      ],
    }),
  },
  {
    id: 'pie-callouts',
    label: 'Pizza — callouts',
    description: 'Labels externos via calloutLine para destacar fatias pequenas.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Participação por navegador' }),
      data: browserShare,
      series: [
        {
          type: 'pie',
          angleKey: 'uso',
          legendItemKey: 'browser',
          calloutLabelKey: 'browser',
          calloutLabel: { enabled: true, fontSize: 12 },
          calloutLine:  { length: 18, strokeWidth: 2 },
          sectorLabel:  { enabled: false },
        },
      ],
    }),
  },
  {
    id: 'donut-basic',
    label: 'Donut — simples',
    description: 'Tipo donut com furo central.',
    build: (opts) => ({
      ...baseChrome({ ...opts, title: 'Participação por navegador' }),
      data: browserShare,
      series: [
        {
          type: 'donut',
          angleKey: 'uso',
          legendItemKey: 'browser',
          calloutLabelKey: 'browser',
          sectorLabelKey: 'uso',
          sectorLabel: { color: 'white', fontWeight: 'bold', formatter: ({ value }) => `${value}%` },
          innerRadiusRatio: 0.6,
        },
      ],
    }),
  },
  {
    id: 'donut-center',
    label: 'Donut — texto central',
    description: 'innerLabels permite empilhar texto no centro do donut.',
    build: (opts) => {
      const total = browserShare.reduce((acc, d) => acc + d.uso, 0);
      return {
        ...baseChrome({ ...opts, title: 'Participação por navegador' }),
        data: browserShare,
        series: [
          {
            type: 'donut',
            angleKey: 'uso',
            legendItemKey: 'browser',
            calloutLabelKey: 'browser',
            innerRadiusRatio: 0.65,
            innerLabels: [
              { text: `${total}%`, fontSize: 28, fontWeight: 'bold' },
              { text: 'cobertura',  fontSize: 12, color: '#9aa7c2', spacing: 6 },
            ],
          },
        ],
      };
    },
  },
];
