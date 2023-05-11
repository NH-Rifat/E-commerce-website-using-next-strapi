/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

const {
  typography,
  screens,
  spacing,
  form,
  bgImages,
  colors,
  components,
  keyframes,
  animations,
  container,
} = require('./configs/tailwind');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ...screens,
    },
    extend: {
      fontFamily: {
        'josefin-sans': ['var(--font-josefin-sans)', ...fontFamily.sans],
      },
      width: {
        '100px': '100px',
        '86px': '86px',
      },
      spacing: {
        '34px': '34px',
      },
      colors: {
        ...colors,
      },
      backgroundImage: {
        ...bgImages,
      },
      keyframes: {
        ...keyframes,
      },
      animation: {
        ...animations,
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ...container,
        ...typography,
        ...form,
        ...components,
      });
    },
  ],
};
