import React, { useEffect, useRef } from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ items, activeId, onSelect }) {
  const listRef = useRef(null);

  // When the active tab changes (e.g. after switching category), scroll it into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-id="${activeId}"]`);
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeId]);

  return (
    <div className={styles.tabs} role="tablist" ref={listRef}>
      {items.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            data-id={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            className={`${styles.tab} ${active ? styles.active : ''}`}
            onClick={() => onSelect(item.id)}
          >
            <span className={styles.dot} aria-hidden="true" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
