// Helpers shared by every example.

export const themeFor = (mode) => (mode === 'light' ? 'ag-default' : 'ag-default-dark');

export const baseChrome = ({ theme, animation, legend, title, subtitle }) => ({
  theme: themeFor(theme),
  background: { fill: 'transparent' },
  animation: { enabled: animation },
  legend: { enabled: legend, position: 'bottom' },
  title: title ? { text: title } : undefined,
  subtitle: subtitle ? { text: subtitle } : undefined,
});
