import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg"
      ),
    ],
  },
};

export default nextConfig;
