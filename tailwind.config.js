const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#bb9333',
      },
      maxWidth: {
        'breakpoint-sm': '64rem',
        'breakpoint-md': '76.8rem',
        'breakpoint-lg': '96rem',
        'breakpoint-xl': '96rem',
        'breakpoint-2xl': '96rem',
      },
      fontFamily: {
        inria: ['Inria Sans', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
