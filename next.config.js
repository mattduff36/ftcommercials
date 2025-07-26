/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static file serving
  trailingSlash: false,

  // Exclude temp directories from compilation
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Exclude temp directories from compilation
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    // Ignore temp-template directory
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/temp-template/**',
        '**/temp-files/**',
        '**/.git/**',
      ],
    };

    // Handle favicon properly
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig; 