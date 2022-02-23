/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60,
  },
  experimental: {
    outputStandalone: true,
  },
};

export default nextConfig;
