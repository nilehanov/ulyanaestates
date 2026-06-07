/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages — no server runtime at request time.
  output: 'export',
  // GitHub Pages has no image optimizer; ship images as-is.
  images: { unoptimized: true },
  // Apex domain served at root → no basePath. trailingSlash keeps /about/ → /about/index.html.
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
