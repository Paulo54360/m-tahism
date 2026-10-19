/**
 * Utilitaire de gestion des médias et assets AWS S3 pour la vitrine Métahisme.
 * Référence bucket : plaumondpicture (eu-west-3)
 */

export const DEFAULT_S3_BASE_URL = 'https://plaumondpicture.s3.eu-west-3.amazonaws.com';

/**
 * Récupère l'URL de base S3 configurée (via variable d'environnement ou fallback officiel)
 */
export function getS3BaseUrl(): string {
  const envUrl = typeof process !== 'undefined' && process.env?.PUBLIC_S3_BASE_URL;
  const metaEnvUrl = typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_S3_BASE_URL;

  return (metaEnvUrl || envUrl || DEFAULT_S3_BASE_URL).replace(/\/$/, '');
}

/**
 * Résout la clé S3 relative en URL publique complète
 * @param s3Key Clé d'asset S3 (ex: 'artworks/le-grand-mikado-hd.webp')
 */
export function getS3MediaUrl(s3Key: string): string {
  if (!s3Key) return '';

  // Si c'est déjà une URL absolue, on la conserve
  if (s3Key.startsWith('http://') || s3Key.startsWith('https://')) {
    return s3Key;
  }

  const cleanKey = s3Key.replace(/^\/+/, '');
  const baseUrl = getS3BaseUrl();

  return `${baseUrl}/${cleanKey}`;
}

/**
 * Formate le nom d'un fichier S3 pour l'affichage technique
 */
export function formatS3Filename(s3Key: string): string {
  if (!s3Key) return 'non-défini';
  const parts = s3Key.split('/');
  return parts[parts.length - 1];
}
