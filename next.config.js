/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Necesario para exportación estática
  },
  reactStrictMode: true,
  // La opción swcMinify ya no es necesaria especificarla en Next.js 15.x
  // swcMinify se eliminó aquí para evitar la advertencia
};

module.exports = nextConfig;
