/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          black: '#231F20',
          beige: '#FAF9F5',
        }
      },
      maxWidth: {
        '8xl': '1440px',
      },
      fontSize: {
        'title': ['56px', {
          lineHeight: '59px',
          letterSpacing: '-0.01em',
        }],
        'body': ['18px', {
          lineHeight: '27px',
        }],
      },
      letterSpacing: {
        tight: '-0.01em',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      spacing: {
        '18': '4.5rem',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      opacity: {
        '15': '0.15',
      },
    },
  },
  plugins: [],
};