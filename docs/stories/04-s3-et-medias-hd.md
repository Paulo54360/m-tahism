# User Story 04 — Intégration AWS S3, Médias HD & Visualiseur d'Exposition

## Métadonnées
- **Identifiant** : `US-04`
- **Titre** : Résolution des assets AWS S3, gestion adaptative des médias HD et zoom interactif
- **Statut** : Terminé (Done)
- **Priorité** : Haute (P1)
- **Références** : [docs/PRD.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/PRD.md), [docs/architecture.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/architecture.md), dépôt source [Paulo54360/laumondv2](https://github.com/Paulo54360/laumondv2)

---

## 1. Description
**En tant que** visiteur, commissaire d'exposition ou collaborateur artiste,  
**Je veux** que la vitrine soit connectée au bucket AWS S3 (`plaumondpicture` / `eu-west-3`) pour charger les photographies HD authentiques des œuvres, avec un zoom interactif dans la modale d'exposition,  
**Tout en préservant** un repli automatique gracieux sur les mires de cadrage artiste (`Image.X.X`) lorsque l'asset S3 est en cours de téléversement ou de numérisation.

---

## 2. Critères d'Acceptation (Acceptance Criteria)

### AC-1 : Configuration d'Environnement AWS S3
- [x] Création du fichier `.env.example` et `.env` documentant `PUBLIC_S3_BASE_URL` (`https://plaumondpicture.s3.eu-west-3.amazonaws.com`), `S3_BUCKET` et `AWS_REGION`.
- [x] Prise en compte dans `docker-compose.yml` des variables d'environnement.

### AC-2 : Module Utilitaire de Résolution S3
- [x] Création de `src/utils/s3.ts` fournissant la fonction `getS3MediaUrl(s3Key: string): string` et la validation d'URLs sécurisées.
- [x] Synchronisation des clés S3 réelles du catalogue d'œuvres (`src/data/artworks.ts`).

### AC-3 : Affichage Adaptatif dans ImagePlaceholder
- [x] `ImagePlaceholder.astro` charge l'image réelle si disponible avec chargement optimisé (`loading="lazy"`, `decoding="async"`).
- [x] En cas d'erreur ou d'absence de l'image sur le bucket, repli instantané et sans saut d'affichage (CLS = 0) sur le cadre de cadrage avec l'étiquette artiste (`Image.X.X`).

### AC-4 : Zoom Haute Définition & Plein Écran dans la Modale
- [x] La modale d'exposition (`ArtworkModal.astro`) intègre un visualiseur avec loupe / zoom HD interactif au survol et un bouton plein écran.
- [x] Affichage de la clé S3 et de la résolution pour validation par l'équipe technique et les artistes.

### AC-5 : Validation Fonctionnelle
- [x] Compilation sans erreur TypeScript ni régression sur les 3 pages.
- [x] Validation du rendu local sous Docker sur `http://localhost:4321`.
