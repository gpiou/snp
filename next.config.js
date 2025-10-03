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
  
  // Disable image optimization for static export (Cloudflare Pages)
  images: {
    unoptimized: true,
  },
  
  // Note: Headers don't work with static export
  // Cloudflare Pages will handle caching and security headers
};

module.exports = nextConfig;
