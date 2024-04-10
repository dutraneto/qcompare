/* eslint-disable no-undef */
const withPWA = require("@imbios/next-pwa")({
  dest: "public",
});
const runtimeCaching = require('@imbios/next-pwa')
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line no-undef
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'www.quarry.com', 'openweathermap.org']
  },
  pwa: {
    dest: 'public',
    disable: !isProd,
    runtimeCaching
  }
})
