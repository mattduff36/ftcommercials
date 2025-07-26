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
        brand: {
          light: '#F5F5F5', // Light grey
          DEFAULT: '#E0E0E0', // Primary grey
          dark: '#757575', // Dark grey
          accent: {
            light: '#FF9800', // Light orange
            DEFAULT: '#F57C00', // Primary orange
            dark: '#E65100', // Dark orange
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '4rem', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            maxWidth: '65ch',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            a: {
              color: '#F57C00',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#E65100',
              },
            },
            'h1, h2, h3, h4': {
              color: '#333333',
              fontWeight: '700',
              fontFamily: 'var(--font-roboto)',
            },
            h1: {
              fontSize: '2.25rem',
              lineHeight: '2.5rem',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            h2: {
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '1.5rem',
              lineHeight: '2rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            pre: {
              backgroundColor: '#F5F5F5',
              borderRadius: '0.375rem',
              padding: '1rem',
              overflowX: 'auto',
            },
            code: {
              color: '#F57C00',
              fontWeight: '500',
            },
            'ul, ol': {
              marginTop: '1.5em',
              marginBottom: '1.5em',
              paddingLeft: '1.625em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.375em',
              '&::before': {
                content: '""',
                width: '0.375em',
                height: '0.375em',
                position: 'absolute',
                borderRadius: '50%',
                backgroundColor: '#F57C00',
                left: '0.25em',
                top: '0.6875em',
              },
            },
            strong: {
              fontWeight: '600',
              color: '#333333',
            },
            blockquote: {
              fontStyle: 'italic',
              color: '#666666',
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#F57C00',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.375rem',
            },
            hr: {
              borderColor: '#E0E0E0',
              marginTop: '3em',
              marginBottom: '3em',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.25rem',
            h1: {
              fontSize: '2.5rem',
            },
            h2: {
              fontSize: '2rem',
            },
            h3: {
              fontSize: '1.75rem',
            },
            h4: {
              fontSize: '1.5rem',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}; 