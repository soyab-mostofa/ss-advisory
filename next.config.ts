import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['trae-api-sg.mchost.guru'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap'],
  },
};

export default nextConfig;
