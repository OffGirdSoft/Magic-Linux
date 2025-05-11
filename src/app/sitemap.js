export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = 'https://magiclinux.com';

  // Define las rutas principales del sitio
  const routes = ['', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
