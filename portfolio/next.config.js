/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mm.leadshook.com',
        port: '',
        pathname: '/api/**',
      },
    ],
  }
}

module.exports = nextConfig
