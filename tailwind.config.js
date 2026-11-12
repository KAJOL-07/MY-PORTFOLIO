/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          latte: '#FFF8E7',
          soft: '#FBF5E5',
          card: '#FFFDF9',
        },
        mocha: {
          cream: '#C8A98D',
          light: '#EADCCE',
          muted: 'rgba(200, 169, 141, 0.25)',
        },
        burgundy: {
          deep: '#581C2C',
          dark: '#35111D',
          soft: '#7A283E',
          muted: 'rgba(88, 28, 44, 0.12)',
        },
        espresso: {
          DEFAULT: '#211715',
          dark: '#160E0D',
          soft: '#332421',
        },
        muted: {
          text: '#74665F',
          subtle: '#8C7D76',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 2px 10px rgba(88, 28, 44, 0.05)',
        'warm-md': '0 8px 24px -4px rgba(88, 28, 44, 0.08), 0 2px 6px -1px rgba(200, 169, 141, 0.15)',
        'warm-lg': '0 16px 36px -8px rgba(88, 28, 44, 0.12), 0 4px 12px -2px rgba(200, 169, 141, 0.2)',
        'burgundy-glow': '0 0 20px rgba(88, 28, 44, 0.25)',
      },
      borderColor: {
        'mocha-subtle': 'rgba(200, 169, 141, 0.35)',
        'burgundy-subtle': 'rgba(88, 28, 44, 0.25)',
      },
    },
  },
  plugins: [],
};
