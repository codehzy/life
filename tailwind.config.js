/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      lg: {
        max: '1920px',
      },
      mid: {
        max: '1320px',
      },
      laptop: {
        max: '1024px',
      },
      tablet: {
        max: '834px',
      },
      mb: {
        max: '639px',
      },
    },
    extend: {
      colors: {
        dark: '#222222',
      },
    },
  },
  plugins: [],
};
