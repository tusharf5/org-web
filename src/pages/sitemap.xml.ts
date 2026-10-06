import type { APIRoute } from 'astro';
import { company } from '../data/company';

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${company.siteUrl}/</loc></url>\n  <url><loc>${company.siteUrl}/support/</loc></url>\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
