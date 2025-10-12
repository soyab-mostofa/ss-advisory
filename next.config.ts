import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://www.figma.com;",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "gsap"],
  },
};

export default nextConfig;
