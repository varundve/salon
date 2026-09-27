/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFAF6',
          100: '#F8F5F0', // Primary Warm Ivory
          200: '#F2ECE4',
          300: '#EAE1D5',
        },
        beige: {
          100: '#F5EFE9',
          200: '#E9DED2', // Soft Beige
          300: '#DCCFC1',
          400: '#C8B7A5',
        },
        rose: {
          300: '#D5A49D',
          400: '#C7938B',
          500: '#B9827A', // Muted Rose Accent
          600: '#A36F67',
          700: '#8A5851',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E6E6',
          200: '#D0CECE',
          400: '#8A8787',
          600: '#585555',
          700: '#3D3A3A',
          800: '#2E2B2B',
          900: '#242222', // Deep Charcoal
          950: '#171515',
        },
        gold: {
          300: '#D6C088',
          400: '#C7AE71',
          500: '#B89B5E', // Gold Accent
          600: '#9E8348',
          700: '#826934',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 34, 34, 0.05)',
        'elevated': '0 12px 30px -4px rgba(36, 34, 34, 0.08)',
        'luxury': '0 20px 40px -10px rgba(36, 34, 34, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.92' },
        },
      },
    },
  },
  plugins: [],
}
