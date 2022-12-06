/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = nextConfig

module.exports = withPWA({
  // next.js config
})