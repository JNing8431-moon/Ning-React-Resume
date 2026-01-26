import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Ning-React-Resume",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
