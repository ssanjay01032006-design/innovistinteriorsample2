/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0B0B',
          soft: '#121212',
          surface: '#181818',
        },
        espresso: {
          DEFAULT: '#4A1F17',
          deep: '#351610',
          rich: '#56251C',
        },
        terracotta: {
          DEFAULT: '#A33B23',
          dark: '#842D19',
          light: '#BA4A30',
        },
        coral: {
          DEFAULT: '#F45B3D',
          hover: '#FF6E52',
          glow: 'rgba(244, 91, 61, 0.25)',
        },
        ivory: {
          DEFAULT: '#F5F3EE',
          warm: '#F5F1EB',
          soft: '#FAF9F6',
          sand: '#E8E1D6',
          stone: '#D8D0C4',
        },
        charcoal: {
          DEFAULT: '#242321',
          pure: '#0B0B0B',
          espresso: '#302820',
          muted: '#3D3B37',
        },
        grey: {
          warm: '#AAA39D',
          muted: '#7A7570',
        },
        bronze: {
          DEFAULT: '#A38B75',
          light: '#C6B29E',
          dark: '#7D6855',
          gold: '#C5A880',
        },
        taupe: {
          DEFAULT: '#8C857B',
          light: '#A69F95',
          dark: '#5C5750',
        },
        muted: {
          text: '#AAA39D',
          border: 'rgba(245, 241, 235, 0.12)',
          darkBorder: 'rgba(245, 241, 235, 0.15)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
