/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Unbounded', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#111111',
        'main-bg': '#F8F8F8',
        'header-bg': '#F4F4F4',
        'light-gray': '#DADADA',
        gray: '#B7B7B7',
        'medium-gray': '#C6C6C6',
        'dark-gray': '#9C9C9C',
        orange: '#E29756',
        peach: '#CA5D31',
        banana: '#F8F1B0',
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.2' }],
        h2: ['36px', { lineHeight: '1.3' }],
        h3: ['32px', { lineHeight: '1.3' }],
        h4: ['24px', { lineHeight: '1.4' }],

        'body-l': ['32px', { lineHeight: '1.4' }],
        'body-m': ['24px', { lineHeight: '1.4' }],
        'body-s': ['18px', { lineHeight: '1.4' }],

        button: ['16px', { lineHeight: '1.3' }],
        preload: ['20px', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
};
