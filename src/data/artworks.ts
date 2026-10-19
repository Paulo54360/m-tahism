import type { Artwork } from '../types/artwork';

/**
 * Catalogue BDD des œuvres de Patrick Laumond.
 * Relié aux assets S3 réels (bucket plaumondpicture) et aux copies locales haute résolution.
 */
export const artworksData: Artwork[] = [
  {
    id: "le-grand-mikado",
    title: "Le Grand Mikado de la pensée humaine",
    year: "2024",
    dimensions: "250 × 180 cm",
    technique: "Technique mixte sur lin, pigments minéraux purs et laques spectrales",
    s3Key: "Deployments/00/01.jpg",
    imageUrl: "/images/artworks/le-grand-mikado.jpg",
    description: "Chef-d'œuvre absolu du Métahisme. Une toile monumentale où s'entrecroisent des centaines de lignes de tension multicolores, figurant l'interdépendance fragile et sublime des consciences humaines à l'ère numérique.",
    tags: ["mikado", "grand mikado", "pensée humaine", "métahisme", "monumental", "signature", "toile", "lignes", "conscience"],
    artistRef: "Image.1.1",
    highlight: "Œuvre maîtresse sélectionnée pour l'exposition internationale."
  },
  {
    id: "genese-metahiste",
    title: "Genèse Métahiste (L'Éveil)",
    year: "2019",
    dimensions: "140 × 100 cm",
    technique: "Huile et pigments naturels sur bois marouflé",
    s3Key: "Archetypes/02/01.jpg",
    imageUrl: "/images/artworks/genese-metahiste.jpg",
    description: "Première œuvre où s'affirme le manifeste du Métahisme. Passage de l'abstraction lyrique vers la rigueur mathématique et vibratoire des lignes directionnelles.",
    tags: ["genese", "eveil", "origine", "manifeste", "histoire", "fondation"],
    artistRef: "Image.1.2",
    highlight: "Point de départ historique du mouvement."
  },
  {
    id: "interferences-fractales",
    title: "Interférences Fractales n°4",
    year: "2023",
    dimensions: "195 × 130 cm",
    technique: "Acrylique et encres métalliques sur châssis aluminium",
    s3Key: "Transcriptions/01/01.jpg",
    imageUrl: "/images/artworks/interferences-fractales.jpg",
    description: "Étude préparatoire aux dynamiques du Grand Mikado. Analyse de la réfraction lumineuse au travers de motifs fractals répétitifs explorant les lois du chaos ordonné.",
    tags: ["fractales", "interférences", "aluminium", "géométrie", "refraction", "chaos"],
    artistRef: "Image.1.3",
    highlight: "Médaille d'honneur du Salon des Réalités Nouvelles."
  },
  {
    id: "le-grand-mikado-detail",
    title: "Le Grand Mikado (Détail Central)",
    year: "2024",
    dimensions: "250 × 180 cm",
    technique: "Technique mixte sur lin, pigments minéraux purs",
    s3Key: "Deployments/00/01.jpg",
    imageUrl: "/images/artworks/le-grand-mikado.jpg",
    description: "Vue focalisée sur le point de convergence des faisceaux de pensée. Les empâtements pigmentaires dialoguent avec les laques transparentes.",
    tags: ["mikado", "detail", "lignes", "convergence", "faisceaux"],
    artistRef: "Image.1.4",
    highlight: "Cœur névralgique de la composition."
  },
  {
    id: "equilibre-precaire",
    title: "Équilibre Précaire n°7",
    year: "2024",
    dimensions: "120 × 90 cm",
    technique: "Encre de Chine, gouache et collage métahiste",
    s3Key: "Archetypes/03/01.jpg",
    imageUrl: "/images/artworks/equilibre-precaire.jpg",
    description: "Variation intimiste sur le thème de la baguette solitaire en suspens. L'isolement d'un élément fragile qui conditionne la survie de la composition entière.",
    tags: ["equilibre", "precaire", "encre", "minimalisme", "suspension"],
    artistRef: "Image.1.5",
    highlight: "Collection privée, Genève."
  },
  {
    id: "totem-du-reel",
    title: "Totem du Réel",
    year: "2025",
    dimensions: "280 × 80 cm",
    technique: "Sculpture-toile verticale, bois laqué et pigments laumondiens",
    s3Key: "Deployments/00/02.jpg",
    imageUrl: "/images/artworks/totem-du-reel.jpg",
    description: "Élévation verticale fendant l'espace d'exposition. Le Grand Mikado condensé en une colonne de pensées ascendante guidant le regard vers l'infini.",
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
    description: "Portrait officiel de l'artiste Patrick Laumond au travail lors de l'achèvement du Grand Mikado de la pensée humaine.",
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

/**
 * Fonction de recherche dans le catalogue BDD (avec filtrage multi-critères)
 */
export function searchArtworks(query: string): Artwork[] {
  if (!query || query.trim() === '') {
    return artworksData;
  }

  const cleanQuery = query.toLowerCase().trim();

  return artworksData.filter((artwork) => {
    const matchTitle = artwork.title.toLowerCase().includes(cleanQuery);
    const matchTags = artwork.tags.some((t) => t.toLowerCase().includes(cleanQuery));
    const matchDesc = artwork.description.toLowerCase().includes(cleanQuery);
    const matchTechnique = artwork.technique.toLowerCase().includes(cleanQuery);
    const matchRef = artwork.artistRef ? artwork.artistRef.toLowerCase().includes(cleanQuery) : false;

    return matchTitle || matchTags || matchDesc || matchTechnique || matchRef;
  });
}
