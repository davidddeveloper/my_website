/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mb: '430px',
        tb: '640px',
        dk: '1280px'
      },
      colors: {
        primary: '#22272E',
        secondary: '#58626D',
        darkBlue: '#1C2128',
        white: '#FFFFFF',
        offWhite: '#ADBAC7',
        lightBlue: '#5298F0',
        gray: '#444C56',
      },
      margin: {
        xsml: '20px',
        xsmlTwo: '25px',
        sml: '50px',
        smlTwo: '60px',
        lrg: '150px',
        lrgTwo: '175px'
      }
    },
    fontFamily: {
      inter: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      xsm: '12px',
      sm: '15px',
      base: '16px',
      md: '18px',
      lg: '25px',
      xlg: '40px',
      xxlg: '60px'
    },
  },
  plugins: [],
}

