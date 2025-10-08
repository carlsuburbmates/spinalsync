// Design tokens for SpinalSync
export const colors = {
  primary: '#2563eb', // blue-600
  secondary: '#f59e42', // orange-400
  accent: '#10b981', // emerald-500
  background: '#f8fafc', // gray-50
  surface: '#ffffff',
  error: '#ef4444', // red-500
  warning: '#fbbf24', // yellow-400
  info: '#38bdf8', // sky-400
  success: '#22c55e', // green-500
  text: '#1e293b', // gray-800
  muted: '#64748b', // gray-500
  gradient: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
};

export const typography = {
  fontFamily: 'Inter, Arial, sans-serif',
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
};

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
};

export const radius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  pill: '9999px',
};

export const motion = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const accessibility = {
  focusRing: '2px solid #2563eb',
  contrastRatio: '4.5:1',
};
