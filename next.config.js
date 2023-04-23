/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = withPlausibleProxy({
  customDomain: "https://analytics.louisunlimited.com",
})(module.exports);
