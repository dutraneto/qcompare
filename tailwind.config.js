/* eslint-disable prettier/prettier */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Monserrat', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    colors: {
      'white': '#FFFFFF',
      'red': '#FF0000',
      'orange': '#FF8700',
      'yellow': '#FFD700',
      'green': '#00C85A',
      'green-dark': '#00AFAF',
      'blue': '#008CD2',
      'purple': '#9B41AF',
      'dark-red': '#C81487',
      'gray-200': 'rgb(229 231 235)'
    },
  }
}
