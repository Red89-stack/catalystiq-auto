/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/book', destination: '/booking', permanent: true },
    ];
  },
};
module.exports = nextConfig;

