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
    s3Key: "metahism/laumomd.jpg",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/metahism/laumomd.jpg",
    description: "Chef-d'œuvre absolu du Métahisme. Une toile monumentale où s'entrecroisent des centaines de lignes de tension multicolores, figurant l'interdépendance fragile et sublime des consciences humaines à l'ère numérique.",
    tags: ["mikado", "grand mikado", "pensée humaine", "métahisme", "monumental", "signature", "toile", "lignes", "conscience"],
    artistRef: "Image.1.1",
    highlight: "Œuvre maîtresse sélectionnée pour l'exposition internationale."
  },
  {
    id: "genese-metahiste",
    title: "Le grand Mikado de la pensée humaine",
    year: "2023",
    dimensions: "140 × 100 cm",
    technique: "Huile et pigments naturels sur bois marouflé",
    s3Key: "metahism/Le+grand+Mikado+de+la+pensee+humaine+-+Transcription+.+Vue+de+dessus.jpg",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/metahism/Le+grand+Mikado+de+la+pensee+humaine+-+Transcription+.+Vue+de+dessus.jpg",
    description: "Émergence de l'œuvre. Première œuvre où s'affirme le manifeste du Métahisme. Passage de l'abstraction lyrique vers la rigueur mathématique et vibratoire des lignes directionnelles.",
    tags: ["genese", "eveil", "origine", "manifeste", "histoire", "fondation"],
    artistRef: "Image.1.2",
    highlight: "Point de départ historique du mouvement."
  },
  {
    id: "mikado-transcription-13",
    title: "Le Grand Mikado De La Pensée Humaine (Transcription)",
    year: "2023",
    dimensions: "Format monumental",
    technique: "Transcription — Définir l'œuvre dans l'espace",
    s3Key: "Transcriptions/13/09.jpg",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Transcriptions/13/09.jpg",
    description: "Vue de l'œuvre Le Grand Mikado De La Pensée Humaine (Catégorie : Transcriptions).",
    tags: ["mikado", "transcription", "pensée humaine", "espace", "métahisme"],
    artistRef: "Image.1.3",
    highlight: "Transcription spatiale de l'œuvre."
  },
  {
    id: "mikado-archetype-1",
    title: "Le Grand Mikado De La Pensée (Archétype 1)",
    year: "2024",
    dimensions: "Prototype monumental",
    technique: "Archétype — Prototype de l'œuvre finale",
    s3Key: "Archetypes/02/09.jpg",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/09.jpg",
    description: "Prototype et structuration tridimensionnelle du Grand Mikado de la pensée humaine (Catégorie : Archétypes).",
    tags: ["mikado", "archetype", "prototype", "pensée", "métahisme"],
    artistRef: "Image.1.4",
    highlight: "Premier archétype de l'œuvre."
  },
  {
    id: "mikado-archetype-2",
    title: "Le Grand Mikado De La Pensée (Archétype 2)",
    year: "2024",
    dimensions: "Prototype monumental",
    technique: "Archétype — Prototype de l'œuvre finale",
    s3Key: "Archetypes/02/10.jpg",
    imageUrl: "https://plaumondpicture.s3.eu-west-3.amazonaws.com/Archetypes/02/10.jpg",
    description: "Seconde vue de l'archétype du Grand Mikado de la pensée humaine (Catégorie : Archétypes).",
    tags: ["mikado", "archetype", "prototype", "pensée", "métahisme"],
    artistRef: "Image.1.5",
    highlight: "Second archétype de l'œuvre."
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
