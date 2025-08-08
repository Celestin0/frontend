import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
  images: {
    unoptimized: true, // if you're using <Image> component
  },
  basePath: '/frontend',
};

export default nextConfig;
