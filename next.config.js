const { withPlausibleProxy } = require("next-plausible");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = withPlausibleProxy({
  customDomain: "https://analytics.louisunlimited.com",
})(module.exports);
