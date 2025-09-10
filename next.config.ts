import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Ignore 'fs' in client-side builds
      };
    }
    return config;
  },
};

export default nextConfig;
