import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
