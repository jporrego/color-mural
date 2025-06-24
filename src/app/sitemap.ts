import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString();
  return [
    {
      url: 'https://www.colormural.cl',
      lastModified: today,
    },
  ];
}
