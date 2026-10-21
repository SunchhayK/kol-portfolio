/** @type {import('next').NextConfig} */

// GitHub Pages serves project sites from a subpath, e.g. https://user.github.io/kol-portfolio
// Change this to your repo name, or set NEXT_PUBLIC_BASE_PATH when you build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/kol-portfolio';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
