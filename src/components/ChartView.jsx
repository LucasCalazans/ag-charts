import React, { useMemo } from 'react';
import { AgCharts } from 'ag-charts-react';

const replacer = (_key, value) => {
  if (typeof value === 'function') return `/* ${value.name || 'fn'}() */`;
  return value;
};

export default function ChartView({ example, controls }) {
  const options = useMemo(() => example.build(controls), [example, controls]);
  const code = useMemo(() => JSON.stringify(options, replacer, 2), [options]);

  return (
    <section className="chart-view">
      <header className="meta">
        <h2>{example.label}</h2>
        <p>{example.description}</p>
      </header>

      <div className="chart-card">
        <div className="chart-host">
          <AgCharts options={options} style={{ height: '100%', width: '100%' }} />
        </div>
      </div>

      <details className="code">
        <summary>Ver options (JSON)</summary>
        <pre><code>{code}</code></pre>
      </details>
    </section>
  );
}
