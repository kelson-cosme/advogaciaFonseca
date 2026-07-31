import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "192.168.15.5",
    "localhost:3000"
  ],
};

export default nextConfig;
