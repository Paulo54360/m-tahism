import type { APIRoute } from 'astro';
import { artworksData, searchArtworks } from '../../data/artworks';
import { supabase } from '../../db/supabase';
import type { Artwork } from '../../types/artwork';

const CATEGORY_LABELS: Record<number, string> = {
  9: 'Transcriptions',
  10: 'Archétypes',
  11: 'Déploiement',
  12: 'Dessins',
  13: 'Archétypes',
  14: 'Déploiement',
  15: 'Dessins',
};

function parseFirstUrl(raw: unknown): string {
  if (!raw) return '';
  if (Array.isArray(raw)) return String(raw[0] || '');
  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? String(parsed[0] || '') : raw;
    } catch {
      return raw;
    }
  }
  return '';
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const q = (url.searchParams.get('q') ?? '').trim().toLowerCase();

  let combined: Artwork[] = [...artworksData];

  try {
    const { data: dbRows } = await supabase
      .from('artworks')
      .select('*')
      .is('deleted_at', null)
      .order('id', { ascending: true });

    if (dbRows && dbRows.length > 0) {
      const mapped: Artwork[] = dbRows.map((row) => {
        const imgUrl = parseFirstUrl(row.image_urls);
        const catName = CATEGORY_LABELS[Number(row.category_id)] || 'Métahisme';
        const year = row.created_at ? String(new Date(row.created_at).getFullYear()) : '2024';
        return {
          id: `db-${row.id}`,
          title: row.title || 'Œuvre Métahiste',
          year,
          dimensions: catName,
          technique: `${catName} — ${row.folder_path || 'Patrick Laumond'}`,
          s3Key: imgUrl,
          imageUrl: imgUrl,
          description: row.description || `${row.title} (${catName})`,
          tags: [catName.toLowerCase(), (row.title || '').toLowerCase(), 'métahisme'],
        };
      });
      combined = [...artworksData, ...mapped];
    }
  } catch {
    // Fallback sur artworksData local
  }

  const results = q
    ? combined.filter(
        (art) =>
          art.title.toLowerCase().includes(q) ||
          art.description.toLowerCase().includes(q) ||
          art.tags.some((t) => t.toLowerCase().includes(q)) ||
          (art.artistRef && art.artistRef.toLowerCase().includes(q))
      )
    : combined;

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
