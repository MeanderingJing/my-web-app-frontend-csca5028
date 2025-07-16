/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL || 'https://my-flask-app-csca5028-jing-ac19ad42b89b.herokuapp.com/',
  },
  // Import for Heroku deployment
  output: 'standalone',
};

export default nextConfig;
