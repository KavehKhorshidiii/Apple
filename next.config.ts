import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   experimental: {
      optimizePackageImports: ['lucide-react'],
   },
   images: {
      qualities: [75, 100],
   },

};

export default nextConfig;
