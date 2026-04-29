import React from 'react';

export default function Tabs({ items, activeId, onSelect }) {
  return (
    <nav className="tabs" role="tablist">
      {items.map((item) => (
        <button
          key={item.id}
          role="tab"
          aria-selected={item.id === activeId}
          className={item.id === activeId ? 'active' : ''}
          onClick={() => onSelect(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
