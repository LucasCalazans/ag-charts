import React, { useEffect } from 'react';
import styles from './Sidebar.module.css';
import { CategoryIcon, CloseIcon } from './icons.jsx';

const COLORS = {
  cartesian:    'var(--accent)',
  statistical:  'var(--accent-2)',
  hierarchical: 'var(--accent-3)',
  combo:        'var(--accent-4)',
};

export default function Sidebar({ categories, activeCategory, onSelect, open, onClose }) {
  // Close on escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        className={`${styles.backdrop} ${open ? styles.open : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`${styles.sidebar} ${open ? styles.open : ''}`}
        role="navigation"
        aria-label="Categorias de gráfico"
      >
        <div className={styles.head}>
          <h3>Categorias</h3>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <nav className={styles.list}>
          {categories.map((cat) => {
            const active = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                className={`${styles.item} ${active ? styles.active : ''}`}
                style={{ '--itemColor': COLORS[cat.id] || 'var(--accent)' }}
                onClick={() => onSelect(cat.id)}
                aria-current={active ? 'page' : undefined}
              >
                <span className={styles.icon}>
                  <CategoryIcon name={cat.id} size={20} />
                </span>
                <span className={styles.label}>
                  <strong>{cat.label}</strong>
                  <span>{cat.blurb}</span>
                </span>
                <span className={styles.count}>{cat.items.length}</span>
              </button>
            );
          })}
        </nav>

        <div className={styles.footer}>
          AG Charts {''}
          <a
            href="https://www.ag-grid.com/charts/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--accent)' }}
          >
            Community
          </a>
        </div>
      </aside>
    </>
  );
}
