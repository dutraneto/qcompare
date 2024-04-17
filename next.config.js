/* eslint-disable no-undef */
const withPWA = require('@imbios/next-pwa')({
  dest: 'public'
})

// eslint-disable-next-line no-undef
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'www.quarry.com', 'openweathermap.org']
  },
  pwa: {
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  }
})
