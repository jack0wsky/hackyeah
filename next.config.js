const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.250.166.11",
        port: "8080",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "zygmuntd.eu.pythonanywhere.com",
      },
      { protocol: "https", hostname: "api.mapbox.com" },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [{ source: "/", destination: "/events-list", permanent: false }];
  },
};

const pwaConfig = withPWA({
  dest: "public",
})(nextConfig);

module.exports = pwaConfig;
