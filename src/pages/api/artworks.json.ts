import type { APIRoute } from 'astro';
import { artworksData, searchArtworks } from '../../data/artworks';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') ?? '';
  const results = q ? searchArtworks(q) : artworksData;

  return new Response(
    JSON.stringify({
      query: q,
      total: results.length,
      results
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600'
      }
    }
  );
};
