/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production';

const { withPlugins } = require('next-compose-plugins');
const runtimeCaching = require('next-pwa/cache');
//PWA
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  // disable: prod ? false : true,
  disable: true,
});

const nextConfig = withPlugins([withPWA], {
  //next config
  reactStrictMode: true,
  // swcMinify: true,
});
module.exports = nextConfig;
