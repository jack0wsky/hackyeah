/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [{ source: "/", destination: "/events-list", permanent: false }];
  },
};

module.exports = nextConfig;
