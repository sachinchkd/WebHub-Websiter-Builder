/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    MONGO_URI: "mongodb://localhost:27017",
  },
};
