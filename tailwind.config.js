/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'family-primary': ['Unbounded', 'sans-serif'],
        'family-secondary': ['Raleway', 'sans-serif'],
      },
      maxWidth: {
        'custom-1440': '1440px',
      },
      transitionDuration: {
        default: '300ms',
      },
      colors: {
        white: '#FFFFFF',
        main: '#F9F9F9',
        header: '#F0F0F0',
        'light-grey': '#DADADA',
        'medium-grey': '#C0C0C0',
        grey: '#7A7A7A',
        'light-black': '#1E1E1E',
        black: '#111111',
        lemon: '#F6F3B9',
        orange: '#E4572E',
        red: '#CA2E00',
        'dark-red': '#B50404',
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.2' }],
        h2: ['36px', { lineHeight: '1.3' }],
        h3: ['32px', { lineHeight: '1.3' }],
        h4: ['24px', { lineHeight: '1.4' }],

        'body-l': ['32px', { lineHeight: '1.4' }],
        'body-m': ['24px', { lineHeight: '1.4' }],
        'body-s': ['18px', { lineHeight: '1.4' }],
        'body-xs': ['14px', { lineHeight: '1' }],

        button: ['16px', { lineHeight: '1.3' }],
        preload: ['20px', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
};
