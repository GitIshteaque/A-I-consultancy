/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Force date-fns to version 2.30.0
    config.resolve.alias = {
      ...config.resolve.alias,
      'date-fns': require.resolve('date-fns')
    };
    
    return config;
  },
};

module.exports = nextConfig; 