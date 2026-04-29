import React, { useEffect } from 'react';
import styles from './ControlsPanel.module.css';
import { CloseIcon } from './icons.jsx';

function Toggle({ checked, onChange, id }) {
  return (
    <button
      id={id}
      type="button"
      className={styles.toggle}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
    />
  );
}

export default function ControlsPanel({ controls, onChange, open, onClose }) {
  const set = (patch) => onChange({ ...controls, ...patch });

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
        className={`${styles.panel} ${open ? styles.open : ''}`}
        aria-label="Controles do gráfico"
      >
        <div className={styles.head}>
          <h3>Ajustes</h3>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Fechar"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Renderização</h4>
            <div className={styles.row}>
              <span className={styles.rowLabel}>
                Legenda
                <span className={styles.rowHint}>Mostrar série abaixo do gráfico</span>
              </span>
              <Toggle
                id="legend"
                checked={controls.legend}
                onChange={(v) => set({ legend: v })}
              />
            </div>
            <div className={styles.row}>
              <span className={styles.rowLabel}>
                Animação
                <span className={styles.rowHint}>Transições ao trocar de gráfico</span>
              </span>
              <Toggle
                id="animation"
                checked={controls.animation}
                onChange={(v) => set({ animation: v })}
              />
            </div>
          </div>

          <p className={styles.tip}>
            Esses toggles entram direto no objeto <code>options</code> da biblioteca.
            Abra <em>Ver options</em> sob o gráfico pra inspecionar a configuração final
            e copiar pro seu código.
          </p>
        </div>
      </aside>
    </>
  );
}
