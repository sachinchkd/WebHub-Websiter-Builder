/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  experimental: {
    optimizeCss: false
  },
  env: {
    MONGO_URI: "mongodb://localhost:27017",
  },
};
