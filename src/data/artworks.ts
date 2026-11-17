import type { Artwork } from '../types/artwork';

/**
 * Catalogue BDD des œuvres de Patrick Laumond.
 * Relié aux assets S3 réels (bucket plaumondpicture) et aux copies locales haute résolution.
 */
export const artworksData: Artwork[] = [
  {
    id: "le-grand-mikado",
    title: "Le grand Mikado de la pensée humaine",
    year: "2024",
    dimensions: "250 × 180 cm",
    technique: "Technique mixte sur lin, pigments minéraux purs et laques spectrales",
    s3Key: "metahism/laumomd.jpg",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/metahism/laumomd.jpg",
    description: "Chef-d'œuvre absolu du Métahisme. Une toile où s'entrecroisent des centaines de lignes de tension multicolores, figurant l'interdépendance fragile et sublime des consciences humaines à l'ère numérique.",
    tags: ["mikado", "grand mikado", "pensée humaine", "métahisme", "signature", "toile", "lignes", "conscience"],
    artistRef: "Image.1.1",
    highlight: "Œuvre maîtresse sélectionnée pour l'exposition internationale."
  },
  {
    id: "mikado-dessin",
    title: "Le grand Mikado de la pensée humaine (Dessin)",
    year: "2023",
    dimensions: "Format dessin sur papier d'art",
    technique: "Dessin préparatoire, encre et pigments sur papier d'art",
    s3Key: "Drawings/le-grand-mikado-de-la-pensee-humaine.webp",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Drawings/le-grand-mikado-de-la-pensee-humaine.webp",
    description: "Réflexion initiale née de l'imagination de Patrick Laumond. Première ébauche graphique structurant les axes et tensions de l'œuvre Le grand Mikado de la pensée humaine.",
    tags: ["mikado", "dessin", "pensee humaine", "metahisme", "esquisse"],
    artistRef: "Image.1.2",
    highlight: "Réflexion initiale née de l'imagination de Patrick Laumond."
  },
  {
    id: "mikado-transcription-1",
    title: "Le grand Mikado de la pensée humaine (Transcription)",
    year: "2023",
    dimensions: "Format monumental",
    technique: "Transcription — Définir l'œuvre dans l'espace",
    s3Key: "Transcriptions/le-grand-mikado-de-la-pensee-humaine.webp",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Transcriptions/le-grand-mikado-de-la-pensee-humaine.webp",
    description: "Définition de l'œuvre dans l'espace. Vue de face de la première transcription de l'œuvre Le grand Mikado de la pensée humaine.",
    tags: ["mikado", "transcription", "pensée humaine", "espace", "métahisme"],
    artistRef: "Image.1.3",
    highlight: "Définir l'œuvre dans l'espace."
  },
  {
    id: "mikado-transcription-2",
    title: "Le grand Mikado de la pensée humaine (Transcription 2)",
    year: "2023",
    dimensions: "Format monumental",
    technique: "Transcription — Définir l'œuvre dans l'espace (Vue d'ensemble)",
    s3Key: "Transcriptions/le-grand-mikado-de-la-pensee-humaine-2.webp",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Transcriptions/le-grand-mikado-de-la-pensee-humaine-2.webp",
    description: "Seconde transcription définissant l'organisation spatiale et chromatique tridimensionnelle.",
    tags: ["mikado", "transcription", "pensée humaine", "espace", "métahisme"],
    artistRef: "Image.1.4",
    highlight: "Seconde transcription spatiale."
  },
  {
    id: "mikado-archetype-1",
    title: "Le grand Mikado de la pensée humaine (Archétype 1)",
    year: "2024",
    dimensions: "Prototype",
    technique: "Archétype — Prototype de l'œuvre finale",
    s3Key: "Archetypes/le-grand-mikado-de-la-pensee.webp",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/le-grand-mikado-de-la-pensee.webp",
    description: "Prototype tridimensionnel grandeur nature matérialisant l'entrecroisement des vecteurs de pensée.",
    tags: ["mikado", "archetype", "prototype", "pensée", "métahisme"],
    artistRef: "Image.1.5",
    highlight: "Premier archétype de l'œuvre finale."
  },
  {
    id: "mikado-archetype-2",
    title: "Le grand Mikado de la pensée humaine (Archétype 2)",
    year: "2024",
    dimensions: "Prototype",
    technique: "Archétype — Prototype de l'œuvre finale",
    s3Key: "Archetypes/le-grand-mikado-de-la-pensee-2.webp",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/le-grand-mikado-de-la-pensee-2.webp",
    description: "Seconde vue de l'archétype de l'œuvre Le grand Mikado de la pensée humaine avant déploiement.",
    tags: ["mikado", "archetype", "prototype", "pensée", "métahisme"],
    artistRef: "Image.1.6",
    highlight: "Second archétype de l'œuvre finale."
  },
  {
    id: "totem-du-reel",
    title: "Totem du Réel",
    year: "2025",
    dimensions: "280 × 80 cm",
    technique: "Sculpture-toile verticale, bois laqué et pigments laumondiens",
    s3Key: "Deployments/00/02.jpg",
    imageUrl: "/images/artworks/totem-du-reel.jpg",
    description: "Élévation verticale fendant l'espace d'exposition. Le grand Mikado de la pensée humaine condensé en une colonne de pensées ascendante guidant le regard vers l'infini.",
    tags: ["totem", "vertical", "sculpture", "reel", "colonne", "ascendant"],
    artistRef: "Image.1.6",
    highlight: "Projet d'installation pour la Biennale."
  },
  {
    id: "patrick-laumond-portrait",
    title: "Patrick Laumond — Dans l'Atelier du Métahisme",
    year: "2025",
    dimensions: "Photographie argentique numérique",
    technique: "Captation d'atelier haute définition",
    s3Key: "authors/Work of Identity from ID Laumond.jpg",
    imageUrl: "/images/artworks/patrick-laumond.jpg",
    description: "Portrait officiel de l'artiste Patrick Laumond au travail lors de l'achèvement de l'œuvre Le grand Mikado de la pensée humaine.",
    tags: ["patrick laumond", "portrait", "atelier", "artiste"],
    artistRef: "Image.2.1",
    highlight: "Photographie officielle d'exposition."
  },
  {
    id: "vecteurs-de-conscience",
    title: "Vecteurs de Conscience (Diptyque)",
    year: "2024",
    dimensions: "2 × (160 × 120 cm)",
    technique: "Pigments broyés, résine optique et feuilles d'or 24 carats",
    s3Key: "Deployments/01/01.jpg",
    imageUrl: "/images/artworks/vecteurs-de-conscience.jpg",
    description: "Deux panneaux en tension spatiale constante. Les baguettes rouges et dorées semblent franchir l'intervalle vide entre les toiles, invitant le spectateur à combler mentalement l'abîme.",
    tags: ["diptyque", "vecteurs", "or", "conscience", "pigments", "espace", "rouge"],
    artistRef: "Image.2.2",
    highlight: "Présenté lors de la rétrospective de Paris."
  },
  {
    id: "labyrinthe-synaptique",
    title: "Labyrinthe Synaptique",
    year: "2025",
    dimensions: "200 × 200 cm",
    technique: "Technique mixte, laque carmin et incisions micrométriques",
    s3Key: "Transcriptions/02/01.jpg",
    imageUrl: "/images/artworks/labyrinthe-synaptique.jpg",
    description: "Cartographie enchevêtrée des connexions synaptiques. Une immersion hypnotique dans le réseau cérébral où chaque trajectoire rouge répond au rythme cardiaque de l'artiste.",
    tags: ["synapse", "labyrinthe", "carmin", "cerveau", "reseau", "neurologie"],
    artistRef: "Image.2.3",
    highlight: "Acquisition par la Fondation pour l'Art Contemporain."
  },
  {
    id: "mikado-sceau",
    title: "Sceau Métahiste & Empreinte d'Artiste",
    year: "2024",
    dimensions: "Cartouche 30 × 30 cm",
    technique: "Encre laquée rouge et gaufrage",
    s3Key: "Deployments/00/03.jpg",
    imageUrl: "/images/artworks/mikado-sceau.jpg",
    description: "Sceau officiel apposé par Patrick Laumond certifiant l'authenticité et l'unicité de l'œuvre monumentale.",
    tags: ["sceau", "signature", "authenticite", "empreinte"],
    artistRef: "Image.2.4",
    highlight: "Signature officielle."
  },
  {
    id: "vernissage-partenaires",
    title: "Présentation Inaugurale aux Partenaires",
    year: "2025",
    dimensions: "Scénographie muséale",
    technique: "Photographie d'exposition",
    s3Key: "Deployments/00/04.jpg",
    imageUrl: "/images/artworks/vernissage-partenaires.jpg",
    description: "Rencontre des partenaires culturels, mécènes et institutions autour du chef-d'œuvre de Patrick Laumond.",
    tags: ["vernissage", "partenaires", "exposition", "inauguration"],
    artistRef: "Image.3.1",
    highlight: "Événement de lancement."
  }
];

export const CATEGORY_LABELS: Record<number, string> = {
  9: 'Transcriptions',
  10: 'Archétypes',
  11: 'Déploiement',
  12: 'Dessins',
  13: 'Archétypes',
  14: 'Déploiement',
  15: 'Dessins',
};

/**
 * Extrait un tableau d'URLs d'images à partir de la valeur brute issue de Supabase (JSON ou chaîne)
 */
export function parseImageUrls(raw: unknown): string[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw.filter(Boolean).map(String);
  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(Boolean).map(String) : [raw];
    } catch {
      return [raw];
    }
  }
  return [];
}

/**
 * Extrait la première URL d'image à partir de la valeur brute issue de Supabase
 */
export function parseFirstUrl(raw: unknown): string {
  return parseImageUrls(raw)[0] || '';
}

export interface SupabaseArtworkRow {
  id: number | string;
  title?: string | null;
  description?: string | null;
  category_id?: number | string | null;
  folder_path?: string | null;
  image_urls?: unknown;
  created_at?: string | null;
}

/**
 * Convertit une ligne de la table `artworks` Supabase en objet `Artwork` normalisé
 */
export function mapDbRowToArtwork(row: SupabaseArtworkRow): Artwork {
  const imgUrl = parseFirstUrl(row.image_urls);
  const catName = CATEGORY_LABELS[Number(row.category_id)] || 'Métahisme';
  const year = row.created_at ? String(new Date(row.created_at).getFullYear()) : '2024';
  const title = row.title || 'Œuvre Métahiste';

  return {
    id: `db-${row.id}`,
    title,
    year,
    dimensions: catName,
    technique: `${catName} — ${row.folder_path || 'Patrick Laumond'}`,
    s3Key: imgUrl,
    imageUrl: imgUrl,
    description: row.description || `${title} (${catName})`,
    tags: [catName.toLowerCase(), title.toLowerCase(), 'métahisme'],
  };
}

/**
 * Fonction de recherche dans un catalogue d'œuvres (avec filtrage multi-critères)
 */
export function searchArtworks(query: string, collection: Artwork[] = artworksData): Artwork[] {
  if (!query || query.trim() === '') {
    return collection;
  }

  const cleanQuery = query.toLowerCase().trim();

  return collection.filter((artwork) => {
    const matchTitle = artwork.title.toLowerCase().includes(cleanQuery);
    const matchTags = artwork.tags.some((t) => t.toLowerCase().includes(cleanQuery));
    const matchDesc = artwork.description.toLowerCase().includes(cleanQuery);
    const matchTechnique = artwork.technique.toLowerCase().includes(cleanQuery);
    const matchRef = artwork.artistRef ? artwork.artistRef.toLowerCase().includes(cleanQuery) : false;

    return matchTitle || matchTags || matchDesc || matchTechnique || matchRef;
  });
}
