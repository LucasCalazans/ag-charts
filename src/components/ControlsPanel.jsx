import React from 'react';

function Toggle({ checked, onChange, label, id }) {
  return (
    <div className="control-row">
      <label htmlFor={id}>{label}</label>
      <button
        id={id}
        className="toggle"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
      />
    </div>
  );
}

export default function ControlsPanel({ controls, onChange }) {
  const set = (patch) => onChange({ ...controls, ...patch });

  return (
    <aside className="controls">
      <h4>Tema</h4>
      <div className="control-row">
        <label htmlFor="theme-select">Modo</label>
        <select
          id="theme-select"
          className="select"
          value={controls.theme}
          onChange={(e) => set({ theme: e.target.value })}
        >
          <option value="dark">Escuro</option>
          <option value="light">Claro</option>
        </select>
      </div>

      <h4 style={{ marginTop: 18 }}>Renderização</h4>
      <Toggle
        id="legend-toggle"
        label="Legenda"
        checked={controls.legend}
        onChange={(v) => set({ legend: v })}
      />
      <Toggle
        id="anim-toggle"
        label="Animação"
        checked={controls.animation}
        onChange={(v) => set({ animation: v })}
      />

      <h4 style={{ marginTop: 18 }}>Dica</h4>
      <p style={{ color: 'var(--text-dim)', fontSize: 12.5, lineHeight: 1.5, margin: 0 }}>
        Esses toggles afetam <code>options</code> em tempo real. Abra <em>Ver options (JSON)</em>
        abaixo do gráfico para inspecionar a configuração final.
      </p>
    </aside>
  );
}
