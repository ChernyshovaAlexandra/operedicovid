const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const PWA = require('next-pwa')

const nextConfig = {
  basePath: process.env.BASE_PATH || '',
  assetPrefix: (process.env.ASSETS_PATH || '') + '/',
  env: {
    ENV: process.env.NODE_ENV || 'production',
    BASE_PATH: (process.env.BASE_PATH || '') + '/',
    ASSETS_PATH: (process.env.ASSETS_PATH || '') + '/',
    API_URL: process.env.API_URL || '',
    DOMAIN: process.env.DOMAIN || '',
  },
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    unoptimized: true
  }
}

module.exports = withPlugins([
  [optimizedImages, {
    inlineImageLimit: 8192,
    optimizeImagesInDev: true,
    responsive: {
      adapter: require("responsive-loader/sharp"),
    },
  }],
  [PWA, {
    pwa: {
      dest: 'public'
    }
  }]
], nextConfig)
