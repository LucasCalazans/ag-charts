# AG Charts Gallery

Galeria interativa com vários exemplos da biblioteca [AG Charts](https://www.ag-grid.com/charts/) — edição **Community** (gratuita), em **React + Vite**.

🌐 **No ar:** https://agcharts.lcprojects.com.br

A interface tem:
- **Sidebar** à esquerda com as categorias (Cartesianos, Estatísticos, Hierárquicos, Combinados);
- **Abas** no topo para navegar entre as variantes da categoria selecionada;
- **Painel de controles** à direita com legenda on/off e animação on/off;
- Seção *Ver options (JSON)* embaixo de cada gráfico mostrando exatamente a configuração passada para a AG Charts (com botão de copiar).

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
├── App.jsx + App.module.css         # layout, roteamento por hash, drawers
├── styles/
│   └── global.css                    # tokens (cores, sombras, gradientes), reset
├── components/                       # cada componente é dono do seu CSS Module
│   ├── Header.{jsx,module.css}
│   ├── Sidebar.{jsx,module.css}
│   ├── Tabs.{jsx,module.css}
│   ├── ChartView.{jsx,module.css}
│   ├── ControlsPanel.{jsx,module.css}
│   └── icons.jsx                     # SVGs inline
└── examples/
    ├── registry.js                   # categorias + lookup por id
    ├── common.js                     # baseChrome (legend, animation, paleta)
    ├── data.js                       # datasets mock
    ├── cartesian.js                  # 12 exemplos
    ├── statistical.js                # 4 exemplos
    ├── hierarchical.js               # 4 exemplos
    └── combo.js                      # 2 exemplos
```

Cada exemplo é um objeto `{ id, label, description, build(controls) }` que devolve o objeto `options` da AG Charts. Para adicionar um novo gráfico, basta acrescentar mais um objeto desses no array da categoria correspondente.

### Mobile-first

O layout começa pequeno e cresce com `min-width`:
- **< 1024px**: sidebar e painel de controles viram **drawers off-canvas** acionados por hambúrguer (esquerda) e botão de ajustes (direita) no header. Backdrop dim, ESC fecha, scroll do body trava enquanto aberto.
- **≥ 1024px**: viram colunas fixas no layout, sem hambúrguer.

As abas são pills com **scroll horizontal + snap** no mobile e a aba ativa centraliza automaticamente quando trocada.

## Deploy no Cloudflare Pages

O site é uma **SPA estática** (Vite + React + roteamento por hash) servida no Cloudflare Pages. Cada `git push origin main` dispara redeploy automático.

### Setup inicial

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → selecione `LucasCalazans/ag-charts`.
2. Configurações de build:
   - **Framework preset:** **None** _(não escolha "Vite" — esse preset agora exige Vite ≥ 6 e cria um Worker; aqui é Pages estático puro)_
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Em **Variables and Secrets** (build variables) adicione:
   - `NODE_VERSION` = `20`
4. **Save and Deploy**.

### Custom domain

Em **Custom domains** → **Set up a custom domain** → digite o subdomínio. Como `lcprojects.com.br` está com nameservers da Cloudflare, o CNAME é criado automaticamente na zona e o SSL é provisionado via Universal SSL.

### Por que hash routing?

O app usa `window.location.hash` para navegação (`#/cartesian/line-multi`). Isso significa que **toda URL servida pelo CDN é `/`**, então não precisa de SPA fallback (`/_redirects`) — deep links nunca dão 404.

## Stack

| | |
|---|---|
| Framework | React 18 |
| Bundler | Vite 5 |
| Charts | `ag-charts-react` 11 (Community) |
| Styling | CSS Modules + tokens em CSS variables |
| Hospedagem | Cloudflare Pages |
