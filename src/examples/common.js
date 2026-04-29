// Helpers shared by every example.

// Brand palette — keeps charts visually aligned with the UI tokens (global.css).
const PALETTE_FILLS = [
  '#7c5cff', // violet (--accent)
  '#2dd4bf', // teal   (--accent-2)
  '#fb923c', // coral  (--accent-3)
  '#f472b6', // pink   (--accent-4)
  '#4ade80', // lime   (--accent-5)
  '#fbbf24', // amber  (--accent-6)
  '#60a5fa', // blue
  '#a78bfa', // light violet
];

// Slightly darker strokes (mix with black ~25%).
const PALETTE_STROKES = [
  '#5d3fd1', '#1fa896', '#d97a2a', '#c95996',
  '#3aac63', '#cf9a1d', '#4a82c9', '#856ec5',
];

const lightTheme = {
  baseTheme: 'ag-default',
  palette: { fills: PALETTE_FILLS, strokes: PALETTE_STROKES },
  overrides: {
    common: {
      title:    { fontSize: 16, fontWeight: 600 },
      subtitle: { fontSize: 12 },
      padding:  { top: 8, right: 8, bottom: 8, left: 8 },
    },
  },
};

export const baseChrome = ({ animation, legend, title, subtitle }) => ({
  theme: lightTheme,
  background: { fill: 'transparent' },
  animation: { enabled: animation },
  legend: {
    enabled: legend,
    position: 'bottom',
    item: { marker: { size: 10 }, paddingX: 14, paddingY: 6 },
  },
  title:    title    ? { text: title }    : undefined,
  subtitle: subtitle ? { text: subtitle } : undefined,
});
