import React, { useMemo, useState } from 'react';
import { AgCharts } from 'ag-charts-react';
import styles from './ChartView.module.css';

const replacer = (_key, value) => {
  if (typeof value === 'function') return `/* ${value.name || 'fn'}() */`;
  return value;
};

export default function ChartView({ example, controls }) {
  const options = useMemo(() => example.build(controls), [example, controls]);
  const code = useMemo(() => JSON.stringify(options, replacer, 2), [options]);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* ignore */
    }
  };

  return (
    <section className={styles.view}>
      <header className={styles.meta}>
        <h2>{example.label}</h2>
        <p>{example.description}</p>
      </header>

      <div className={styles.card}>
        <div className={styles.host}>
          <AgCharts options={options} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>

      <details className={styles.code}>
        <summary className={styles.codeSummary}>
          <span>Ver options (JSON) — exatamente o que vai pra AG Charts</span>
          <span className={styles.chev} aria-hidden="true">›</span>
        </summary>
        <div className={styles.codeBody}>
          <button
            type="button"
            className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
            onClick={onCopy}
            aria-label="Copiar código"
          >
            {copied ? 'Copiado' : 'Copiar'}
          </button>
          <pre><code>{code}</code></pre>
        </div>
      </details>
    </section>
  );
}
