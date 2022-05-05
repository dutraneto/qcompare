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
      'dark-green': '#013220',
      'palegreen': '#98fb98',
      'blue': '#008CD2',
      'purple': '#9B41AF',
      'dark-red': '#C81487',
      'pink': '#ffc0cb',
      'gray-200': 'rgb(229 231 235)',
      'gray-100': '#fafaf9',
      'gray-50': '#f7f7f7'
    },
    boxShadow: {
      'sm': '0 0 9px rgba(0,0,0, 0.11)'
    }
  }
}
