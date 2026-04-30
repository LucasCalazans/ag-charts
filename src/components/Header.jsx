import React from 'react';
import styles from './Header.module.css';
import { MenuIcon, SlidersIcon, SparkleIcon } from './icons.jsx';
import { AG_CHARTS_VERSION } from '../version.js';

export default function Header({ onOpenSidebar, onOpenControls }) {
  return (
    <header className={styles.header}>
      <button
        type="button"
        className={`${styles.iconBtn} ${styles.menuBtn}`}
        onClick={onOpenSidebar}
        aria-label="Abrir categorias"
      >
        <MenuIcon />
      </button>

      <div className={styles.brand}>
        <span className={styles.logoBadge} aria-hidden="true">
          <SparkleIcon size={18} />
        </span>
        <span className={styles.brandText}>
          <span className={styles.title}>AG Charts Gallery</span>
          <span
            className={styles.versionBadge}
            title={`ag-charts-community ${AG_CHARTS_VERSION}`}
          >
            v{AG_CHARTS_VERSION}
          </span>
          <span className={styles.subtitle}>Community edition</span>
        </span>
      </div>

      <div className={styles.actions}>
        <a
          href="https://www.ag-grid.com/charts/"
          target="_blank"
          rel="noreferrer"
          className={styles.linkBtn}
        >
          Docs
        </a>
        <a
          href="https://github.com/LucasCalazans/ag-charts"
          target="_blank"
          rel="noreferrer"
          className={styles.linkBtn}
        >
          GitHub
        </a>
        <button
          type="button"
          className={`${styles.iconBtn} ${styles.controlsBtn}`}
          onClick={onOpenControls}
          aria-label="Abrir controles"
        >
          <SlidersIcon />
        </button>
      </div>
    </header>
  );
}
