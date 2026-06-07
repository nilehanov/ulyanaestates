import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

// Exported to static sitemap.xml at build (output: 'export').
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/about/`, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
