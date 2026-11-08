import type { APIRoute } from 'astro';
import { artworksData, mapDbRowToArtwork, searchArtworks } from '../../data/artworks';
import { supabase } from '../../db/supabase';
import type { Artwork } from '../../types/artwork';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const q = (url.searchParams.get('q') ?? '').trim().toLowerCase();

  let combined: Artwork[] = [...artworksData];

  if (supabase) {
    try {
      const { data: dbRows, error } = await supabase
        .from('artworks')
        .select('*')
        .is('deleted_at', null)
        .order('id', { ascending: true });

      if (error) {
        console.error('[API artworks.json] Erreur Supabase :', error.message);
      } else if (dbRows && dbRows.length > 0) {
        const mapped: Artwork[] = dbRows.map(mapDbRowToArtwork);
        combined = [...artworksData, ...mapped];
      }
    } catch (err) {
      console.error('[API artworks.json] Échec de connexion à Supabase :', err);
    }
  }

  const results = searchArtworks(q, combined);

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
