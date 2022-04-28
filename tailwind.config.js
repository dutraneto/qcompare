/* eslint-disable prettier/prettier */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    colors: {
      'red': '#FF0000',
      'orange': '#FF8700',
      'yellow': '#FFD700',
      'green': '#00C85A',
      'green-dark': '#00AFAF',
      'blue': '#008CD2',
      'purple': '#9B41AF',
      'dark-red': '#C81487',
    },
  }
}
