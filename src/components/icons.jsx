import React from 'react';

const Svg = ({ children, size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const MenuIcon  = (p) => <Svg {...p}><path d="M3 6h18M3 12h18M3 18h18"/></Svg>;
export const CloseIcon = (p) => <Svg {...p}><path d="M6 6l12 12M18 6L6 18"/></Svg>;
export const SlidersIcon = (p) => (
  <Svg {...p}>
    <path d="M4 6h10M18 6h2"/>
    <circle cx="16" cy="6" r="2"/>
    <path d="M4 12h4M12 12h8"/>
    <circle cx="10" cy="12" r="2"/>
    <path d="M4 18h12M20 18h0"/>
    <circle cx="18" cy="18" r="2"/>
  </Svg>
);
export const SparkleIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3l1.7 4.4L18 9l-4.3 1.6L12 15l-1.7-4.4L6 9l4.3-1.6z"/>
    <path d="M19 15l.7 1.8L21.5 17l-1.8.7L19 19.5l-.7-1.8L16.5 17l1.8-.7z"/>
  </Svg>
);

export const CategoryIcon = ({ name, ...p }) => {
  switch (name) {
    case 'cartesian':
      return <Svg {...p}><path d="M4 4v16h16"/><path d="M7 16l4-6 3 4 5-8"/></Svg>;
    case 'statistical':
      return <Svg {...p}><circle cx="6" cy="17" r="1.5"/><circle cx="11" cy="11" r="1.5"/><circle cx="16" cy="14" r="1.5"/><circle cx="19" cy="7" r="1.5"/><circle cx="9" cy="6" r="1.5"/></Svg>;
    case 'hierarchical':
      return <Svg {...p}><path d="M12 3a9 9 0 1 0 9 9h-9z"/><path d="M12 3v9"/></Svg>;
    case 'combo':
      return <Svg {...p}><path d="M4 20h16"/><rect x="6" y="12" width="3" height="8"/><rect x="11" y="8" width="3" height="12"/><path d="M5 6l5 4 4-3 5 5"/></Svg>;
    default:
      return <Svg {...p}><circle cx="12" cy="12" r="9"/></Svg>;
  }
};
