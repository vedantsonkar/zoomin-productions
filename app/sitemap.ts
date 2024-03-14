import { BASE_DOMAIN } from '@/constants';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_DOMAIN}`,
      lastModified: new Date().toISOString(), // Use ISOString format for URL
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_DOMAIN}/about-us`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_DOMAIN}/our-team`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly', // Adjust as needed
      priority: 0.7,
    },
    {
      url: `${BASE_DOMAIN}/our-projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly', // Adjust as needed
      priority: 0.8,
    },
    {
      url: `${BASE_DOMAIN}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly', // Adjust as needed
      priority: 0.5,
    },
    // Add additional pages as needed
  ];
}
