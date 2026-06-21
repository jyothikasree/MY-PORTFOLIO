/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0b',
          800: '#111113',
          700: '#18181b',
          600: '#1f1f23',
          500: '#27272a',
          400: '#3f3f46',
        },
        gold: {
          50: '#faf7f2',
          100: '#f5f0e6',
          200: '#e8dcc4',
          300: '#d4c4a0',
          400: '#c4aa7a',
          500: '#b8965a',
          600: '#a8844a',
          700: '#8a6a3c',
          800: '#6b5230',
          900: '#4a3a22',
        },
        beige: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f0ebe0',
          300: '#e5ddd0',
          400: '#d4c8b8',
          500: '#c4b5a0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(184, 150, 90, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(184, 150, 90, 0.6)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
