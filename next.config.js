/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/psb', // Ajuste conforme necessário
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true,
    }
  };
  
  module.exports = nextConfig;
  