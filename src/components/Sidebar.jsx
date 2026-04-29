import React from 'react';

export default function Sidebar({ categories, activeCategory, onSelect }) {
  return (
    <aside className="sidebar">
      <h4>Categorias</h4>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={cat.id === activeCategory ? 'active' : ''}
          onClick={() => onSelect(cat.id)}
          title={cat.blurb}
        >
          <span>{cat.label}</span>
          <span className="count">{cat.items.length}</span>
        </button>
      ))}
    </aside>
  );
}
