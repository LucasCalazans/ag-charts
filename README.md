# AG Charts Gallery

Galeria interativa com vários exemplos da biblioteca [AG Charts](https://www.ag-grid.com/charts/) — edição **Community** (gratuita), em **React + Vite**.

A interface tem:
- **Sidebar** à esquerda com as categorias (Cartesianos, Estatísticos, Hierárquicos, Combinados);
- **Abas** no topo para navegar entre as variantes da categoria selecionada;
- **Painel de controles** à direita com tema claro/escuro, legenda on/off e animação on/off;
- Seção *Ver options (JSON)* embaixo de cada gráfico mostrando exatamente a configuração passada para a AG Charts.

A URL guarda a categoria + exemplo no hash (`#/cartesian/line-multi`), então é só compartilhar o link.

## Rodando localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
├── App.jsx                  # layout, roteamento por hash, estado dos controles
├── components/
│   ├── Sidebar.jsx
│   ├── Tabs.jsx
│   ├── ChartView.jsx        # renderiza <AgCharts/> + bloco de código
│   └── ControlsPanel.jsx
└── examples/
    ├── registry.js          # categorias + lookup
    ├── common.js            # baseChrome (theme, legend, animation)
    ├── data.js              # datasets mock
    ├── cartesian.js         # 12 exemplos
    ├── statistical.js       # 4 exemplos
    ├── hierarchical.js      # 4 exemplos
    └── combo.js             # 2 exemplos
```

Cada exemplo é um objeto `{ id, label, description, build(controls) }` que devolve o objeto `options` da AG Charts. Para adicionar um novo gráfico, é só dropar mais um objeto desses no array da categoria.

## Deploy no Cloudflare Pages

O projeto já está pronto para Pages — output em `dist/`, build com `npm run build`. Tem dois caminhos:

### Opção A — conectar o repo (recomendado)

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Selecione `LucasCalazans/ag-charts`
3. Configurações de build:
   - **Framework preset:** *Vite*
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20` (variável `NODE_VERSION=20` em *Environment variables*)
4. Salve. Cada push no `main` dispara deploy automático.

### Opção B — deploy direto via Wrangler

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist --project-name ag-charts
```
