import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Tabs from './components/Tabs.jsx';
import ChartView from './components/ChartView.jsx';
import ControlsPanel from './components/ControlsPanel.jsx';
import { categories, findExample } from './examples/registry.js';
import styles from './App.module.css';

const parseHash = () => {
  const h = window.location.hash.replace(/^#\/?/, '');
  const [cat, ex] = h.split('/');
  return {
    categoryId: cat || categories[0].id,
    exampleId:  ex  || categories[0].items[0].id,
  };
};

const isDesktop = () =>
  typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches;

export default function App() {
  const [{ categoryId, exampleId }, setRoute] = useState(parseHash);
  const [controls, setControls] = useState({
    theme: 'dark',
    animation: true,
    legend: true,
  });
  const [sidebarOpen, setSidebarOpen]   = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);

  // Sync theme to <html> for CSS variables
  useEffect(() => {
    document.documentElement.classList.toggle('light', controls.theme === 'light');
  }, [controls.theme]);

  // Listen to hash changes
  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Push hash on selection change
  useEffect(() => {
    const next = `#/${categoryId}/${exampleId}`;
    if (window.location.hash !== next) window.history.replaceState(null, '', next);
  }, [categoryId, exampleId]);

  // Body scroll lock when a mobile drawer is open
  useEffect(() => {
    const lock = (sidebarOpen || controlsOpen) && !isDesktop();
    document.body.classList.toggle('no-scroll', lock);
    return () => document.body.classList.remove('no-scroll');
  }, [sidebarOpen, controlsOpen]);

  // Auto-close drawers when growing past breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => {
      if (e.matches) {
        setSidebarOpen(false);
        setControlsOpen(false);
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const { category, example } = useMemo(
    () => findExample(categoryId, exampleId),
    [categoryId, exampleId]
  );

  const selectCategory = (id) => {
    const cat = categories.find((c) => c.id === id);
    setRoute({ categoryId: id, exampleId: cat.items[0].id });
    if (!isDesktop()) setSidebarOpen(false);
  };

  const selectExample = (id) => setRoute({ categoryId, exampleId: id });

  const toggleTheme = () =>
    setControls((c) => ({ ...c, theme: c.theme === 'dark' ? 'light' : 'dark' }));

  return (
    <div className={styles.app}>
      <Header
        onOpenSidebar={() => setSidebarOpen(true)}
        onOpenControls={() => setControlsOpen(true)}
        theme={controls.theme}
        onToggleTheme={toggleTheme}
      />

      <div className={styles.body}>
        <Sidebar
          categories={categories}
          activeCategory={category.id}
          onSelect={selectCategory}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className={styles.main}>
          <Tabs
            items={category.items}
            activeId={example.id}
            onSelect={selectExample}
          />
          <ChartView example={example} controls={controls} />
        </main>

        <ControlsPanel
          controls={controls}
          onChange={setControls}
          open={controlsOpen}
          onClose={() => setControlsOpen(false)}
        />
      </div>
    </div>
  );
}
