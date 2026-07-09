import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
  // Vercel deployment compatible
}

export default nextConfig
