import { cartesian } from './cartesian.js';
import { statistical } from './statistical.js';
import { hierarchical } from './hierarchical.js';
import { combo } from './combo.js';

export const categories = [
  {
    id: 'cartesian',
    label: 'Cartesianos',
    blurb: 'Linha, coluna, barra, área — eixos x/y.',
    items: cartesian,
  },
  {
    id: 'statistical',
    label: 'Estatísticos',
    blurb: 'Scatter, bubble, histograma — distribuições e correlações.',
    items: statistical,
  },
  {
    id: 'hierarchical',
    label: 'Hierárquicos',
    blurb: 'Pizza e donut — proporções de um todo.',
    items: hierarchical,
  },
  {
    id: 'combo',
    label: 'Combinados',
    blurb: 'Múltiplos tipos no mesmo gráfico, eixos duplos.',
    items: combo,
  },
];

export const findExample = (categoryId, exampleId) => {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return null;
  const example = cat.items.find((i) => i.id === exampleId) || cat.items[0];
  return { category: cat, example };
};
