/** @type {import('next').NextConfig} */
const nextConfig = {
  // PWA Configuration
  experimental: {
    webpackBuildWorker: true,
  },
  
  // Optimize for PWA
  compress: true,
  poweredByHeader: false,
  
  // Disable ESLint during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Cloudflare Pages configuration
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Note: Headers don't work with static export
  // Cloudflare Pages will handle caching and security headers
};

module.exports = nextConfig;
