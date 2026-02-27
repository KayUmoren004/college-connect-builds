import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    const backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) return [];
    return [
      {
        source: '/.well-known/apple-app-site-association',
        destination: `${backendUrl}/.well-known/apple-app-site-association`,
      },
      {
        source: '/apple-app-site-association',
        destination: `${backendUrl}/apple-app-site-association`,
      },
      {
        source: '/.well-known/assetlinks.json',
        destination: `${backendUrl}/.well-known/assetlinks.json`,
      },
    ];
  },
};

export default nextConfig;
