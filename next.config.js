/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Ensure proper resolution of date-fns for react-day-picker
    config.resolve.alias = {
      ...config.resolve.alias,
      'date-fns': require.resolve('date-fns')
    };
    
    return config;
  },
  // Add transpilePackages to ensure proper compilation
  transpilePackages: ['react-day-picker']
};

module.exports = nextConfig; 