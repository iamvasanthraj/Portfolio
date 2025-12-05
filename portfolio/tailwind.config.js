/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0b1224',
          soft: '#0f182c',
          glass: 'rgba(255,255,255,0.05)',
        },
        accent: {
          blue: '#5b8def',
          purple: '#a855f7',
          aqua: '#5fe1c0',
        },
      },
      boxShadow: {
        glass: '0 20px 80px rgba(0,0,0,0.35)',
        'soft-glow': '0 0 0 1px rgba(255,255,255,0.04), 0 20px 80px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};

