import { MetadataRoute } from 'next'

/**
 * Auto-generates /sitemap.xml for Google Search Console.
 *
 * Generated XML will look like:
 * <?xml version="1.0" encoding="UTF-8"?>
 * <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 *   <url>
 *     <loc>https://spark-e-solutions.com</loc>
 *     <lastmod>2026-05-19</lastmod>
 *     <changefreq>weekly</changefreq>
 *     <priority>1</priority>
 *   </url>
 *   <url>
 *     <loc>https://spark-e-solutions.com/book</loc>
 *     <lastmod>2026-05-19</lastmod>
 *     <changefreq>monthly</changefreq>
 *     <priority>0.8</priority>
 *   </url>
 * </urlset>
 *
 * NOTE: /admin is intentionally excluded (blocked in robots.ts too).
 * Add new public routes here as the site grows.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spark-e-solutions.com'

  // Update these dates when you make significant content changes
  const lastUpdated = new Date('2026-05-19')

  return [
    {
      url: `${baseUrl}`,
      lastModified: lastUpdated,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: lastUpdated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
