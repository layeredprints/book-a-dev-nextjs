const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#bb9333',
        'bx-blue': '#2FADD6',
        'bx-purple': '#5D2784',
      },
      maxWidth: {
        'breakpoint-sm': '64rem',
        'breakpoint-md': '76.8rem',
        'breakpoint-lg': '96rem',
        'breakpoint-xl': '96rem',
        'breakpoint-2xl': '96rem',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        openSans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        rainbow: ['Over the Rainbow', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
