// Shared mock datasets used across chart examples.

export const monthlyRevenue = [
  { month: 'Jan', vendas: 42, lucro: 12, despesas: 28 },
  { month: 'Fev', vendas: 51, lucro: 18, despesas: 31 },
  { month: 'Mar', vendas: 47, lucro: 14, despesas: 30 },
  { month: 'Abr', vendas: 63, lucro: 24, despesas: 35 },
  { month: 'Mai', vendas: 58, lucro: 20, despesas: 36 },
  { month: 'Jun', vendas: 72, lucro: 30, despesas: 38 },
  { month: 'Jul', vendas: 80, lucro: 33, despesas: 41 },
  { month: 'Ago', vendas: 76, lucro: 28, despesas: 44 },
  { month: 'Set', vendas: 84, lucro: 35, despesas: 45 },
  { month: 'Out', vendas: 91, lucro: 39, despesas: 46 },
  { month: 'Nov', vendas: 98, lucro: 42, despesas: 49 },
  { month: 'Dez', vendas: 110, lucro: 48, despesas: 52 },
];

export const browserShare = [
  { browser: 'Chrome', uso: 65 },
  { browser: 'Safari', uso: 18 },
  { browser: 'Edge', uso: 8 },
  { browser: 'Firefox', uso: 5 },
  { browser: 'Opera', uso: 2 },
  { browser: 'Outros', uso: 2 },
];

export const productMix = [
  { categoria: 'Eletrônicos', q1: 120, q2: 140, q3: 180, q4: 220 },
  { categoria: 'Roupas',      q1: 90,  q2: 110, q3: 95,  q4: 160 },
  { categoria: 'Casa',        q1: 60,  q2: 80,  q3: 100, q4: 140 },
  { categoria: 'Esporte',     q1: 40,  q2: 70,  q3: 85,  q4: 95  },
  { categoria: 'Beleza',      q1: 30,  q2: 45,  q3: 55,  q4: 70  },
];

export const carsData = (() => {
  // Synthetic cars dataset: weight (kg), consumo (km/l), potencia (cv)
  const seed = (n) => {
    // Deterministic pseudo-random so chart looks the same each render.
    const x = Math.sin(n) * 10000;
    return x - Math.floor(x);
  };
  const out = [];
  for (let i = 0; i < 60; i++) {
    const peso = 800 + Math.round(seed(i) * 1400);
    const potencia = 70 + Math.round(seed(i + 100) * 280);
    const consumo = +(22 - peso / 130 - potencia / 80 + seed(i + 200) * 2).toFixed(2);
    out.push({ peso, potencia, consumo: Math.max(4, consumo) });
  }
  return out;
})();

export const ageDistribution = (() => {
  // Synthetic ages roughly normal around 35.
  const out = [];
  const rand = (n) => {
    const x = Math.sin(n * 7.13) * 10000;
    return x - Math.floor(x);
  };
  for (let i = 0; i < 400; i++) {
    let v = 0;
    for (let k = 0; k < 6; k++) v += rand(i * 11 + k);
    const idade = Math.round(15 + (v / 6) * 50);
    out.push({ idade });
  }
  return out;
})();

export const websiteTraffic = [
  { mes: 'Jan', visitantes: 12000, conversao: 2.4 },
  { mes: 'Fev', visitantes: 13800, conversao: 2.6 },
  { mes: 'Mar', visitantes: 15200, conversao: 2.8 },
  { mes: 'Abr', visitantes: 17000, conversao: 3.1 },
  { mes: 'Mai', visitantes: 19500, conversao: 3.0 },
  { mes: 'Jun', visitantes: 22300, conversao: 3.4 },
  { mes: 'Jul', visitantes: 24800, conversao: 3.6 },
  { mes: 'Ago', visitantes: 26100, conversao: 3.5 },
  { mes: 'Set', visitantes: 28400, conversao: 3.8 },
  { mes: 'Out', visitantes: 30700, conversao: 4.0 },
  { mes: 'Nov', visitantes: 33500, conversao: 4.3 },
  { mes: 'Dez', visitantes: 36200, conversao: 4.5 },
];
