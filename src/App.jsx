import React, { useEffect, useMemo, useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Tabs from './components/Tabs.jsx';
import ChartView from './components/ChartView.jsx';
import ControlsPanel from './components/ControlsPanel.jsx';
import { categories, findExample } from './examples/registry.js';

const parseHash = () => {
  const h = window.location.hash.replace(/^#\/?/, '');
  const [cat, ex] = h.split('/');
  return { categoryId: cat || categories[0].id, exampleId: ex || categories[0].items[0].id };
};

export default function App() {
  const [{ categoryId, exampleId }, setRoute] = useState(parseHash);
  const [controls, setControls] = useState({
    theme: 'dark',
    animation: true,
    legend: true,
  });

  // Sync theme to <html> for CSS variables.
  useEffect(() => {
    document.documentElement.classList.toggle('light', controls.theme === 'light');
  }, [controls.theme]);

  // Listen to hash changes (back/forward).
  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Push hash on selection.
  useEffect(() => {
    const next = `#/${categoryId}/${exampleId}`;
    if (window.location.hash !== next) window.history.replaceState(null, '', next);
  }, [categoryId, exampleId]);

  const { category, example } = useMemo(
    () => findExample(categoryId, exampleId),
    [categoryId, exampleId]
  );

  const selectCategory = (id) => {
    const cat = categories.find((c) => c.id === id);
    setRoute({ categoryId: id, exampleId: cat.items[0].id });
  };

  const selectExample = (id) => setRoute({ categoryId, exampleId: id });

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <svg className="logo" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="6" fill="#0b1220"/>
            <rect x="6"  y="18" width="4" height="8"  fill="#3ddc97"/>
            <rect x="12" y="12" width="4" height="14" fill="#5b8def"/>
            <rect x="18" y="6"  width="4" height="20" fill="#f5a623"/>
            <rect x="24" y="14" width="4" height="12" fill="#e94e77"/>
          </svg>
          AG Charts Gallery
          <small>Exemplos com a edição Community</small>
        </div>
        <div className="links">
          <a href="https://www.ag-grid.com/charts/" target="_blank" rel="noreferrer">Docs</a>
          <a href="https://github.com/LucasCalazans/ag-charts" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      <Sidebar
        categories={categories}
        activeCategory={category.id}
        onSelect={selectCategory}
      />

      <main className="main">
        <Tabs items={category.items} activeId={example.id} onSelect={selectExample} />
        <ChartView example={example} controls={controls} />
      </main>

      <ControlsPanel controls={controls} onChange={setControls} />
    </div>
  );
}
