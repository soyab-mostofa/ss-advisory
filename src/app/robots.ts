import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://ss-advisory.com' // Replace with your actual domain
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}