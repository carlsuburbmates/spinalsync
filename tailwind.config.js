/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          300: '#CBD5E1',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
        },
        primary: {
          DEFAULT: '#14B8A6',
          dark: '#0F766E',
          light: '#99F6E4'
        },
        accent: {
          DEFAULT: '#6366F1',
          dark: '#4338CA',
          light: '#E0E7FF'
        },
        success: '#059669',
        warning: '#F59E0B',
        critical: '#DC2626'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px'
      },
      boxShadow: {
        card: '0 1px 2px rgba(2, 6, 23, 0.06), 0 6px 16px rgba(2, 6, 23, 0.06)'
      },
      backgroundImage: {
        'teal-mist': 'linear-gradient(135deg, rgba(20,184,166,0.12), rgba(99,102,241,0.08))',
        'indigo-haze': 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(203,213,225,0.08))',
        'card-glow': 'radial-gradient(circle, rgba(20,184,166,0.10) 0%, rgba(20,184,166,0) 100%)'
      }
    }
  },
  plugins: []
};
