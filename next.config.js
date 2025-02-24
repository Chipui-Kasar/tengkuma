/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ap-south-1.graphassets.com",
        port: "",
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

module.exports = nextConfig;
