const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const remotes = (isServer) => {
  return {
    header: isServer
      ? `header@http://header:3001/_next/static/ssr/remoteEntry.js`
      : `header@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
    services: isServer
      ? `services@http://services:3002/_next/static/ssr/remoteEntry.js`
      : `services@http://localhost:3002/_next/static/chunks/remoteEntry.js`,
  };
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "shell",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(options.isServer),
        shared: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
