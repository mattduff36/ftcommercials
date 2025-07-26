/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // F.T. Commercials brand colors
        'brand': {
          light: '#F5F5F5',    // Light grey
          DEFAULT: '#E0E0E0',  // Default grey
          dark: '#757575',     // Dark grey
          'accent-light': '#F2A75C',  // New orange color
          accent: '#F2A75C',   // New orange color
          'accent-dark': '#E6955A',   // Slightly darker version of new orange
        },
        'brand-black': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',  // Primary black
        },
        'brand-grey': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',  // Primary grey
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      boxShadow: {
        'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
      },
      minHeight: {
        '40': '10rem',
      },
      gap: {
        '11': '2.75rem',
        '13': '3.25rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'bounce-entrance': 'bounce-entrance 1s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'bounce-entrance': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.brand-grey.700'),
            a: {
              color: theme('colors.brand.accent'),
              '&:hover': {
                color: theme('colors.brand.accent-dark'),
              },
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ['Inter var', 'system-ui', 'sans-serif'],
      display: ['Roboto', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}; 