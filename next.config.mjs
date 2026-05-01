/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/monrroy' : '',
  assetPrefix: isProd ? '/monrroy' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
