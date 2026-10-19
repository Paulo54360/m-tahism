/**
 * Définition du modèle d'œuvre d'art pour la vitrine Métahisme.
 * Aligné avec le schéma de données et les clés S3.
 */
export interface Artwork {
  /** Identifiant unique (ex: 'grand-mikado-01') */
  id: string;
  /** Titre complet de l'œuvre */
  title: string;
  /** Année de réalisation (ex: '2024') */
  year: number | string;
  /** Dimensions physiques (ex: '250 × 180 cm') */
  dimensions: string;
  /** Technique et médium employés (ex: 'Technique mixte sur lin, pigments purs') */
  technique: string;
  /** Clé de stockage sur le bucket AWS S3 */
  s3Key: string;
  /** URL d'aperçu ou de haute définition */
  imageUrl?: string;
  /** Texte explicatif ou analyse esthétique de l'œuvre */
  description: string;
  /** Mots-clés pour le moteur de recherche */
  tags: string[];
  /** Repère collaboratif pour l'équipe artistique (ex: 'Image.1.4', 'Image.2.2') */
  artistRef?: string;
  /** Citation ou fait marquant pour la mise en avant */
  highlight?: string;
}

export interface SearchResponse {
  query: string;
  total: number;
  results: Artwork[];
}
