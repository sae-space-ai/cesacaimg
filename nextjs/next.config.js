/** @type {import('next').NextConfig} */
const nextConfig = {
  // CESAC AI - Next.js Configuration
  // Estrategia: Strangler Fig - Coexistencia con Vite durante migración
  
  experimental: {
    // Optimizaciones para Server Components
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  
  // Imágenes - configuración para futuros assets
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cesac.ai',
      },
    ],
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects para compatibilidad con URLs antiguas (si las hubiera)
  async redirects() {
    return [];
  },
  
  // Rewrites (útil para APIs durante migración)
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
