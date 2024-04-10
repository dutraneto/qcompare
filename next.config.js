/* eslint-disable no-undef */
const withPWA = require('next-pwa')({
  dest: 'public'
})

// eslint-disable-next-line no-undef
module.exports = withPWA({
  images: {
    domains: ['res.cloudinary.com', 'www.quarry.com', 'openweathermap.org']
  }
})
