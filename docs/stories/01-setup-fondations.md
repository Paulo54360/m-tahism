# User Story 01 — Mise en place du socle technique et de l'environnement de développement

## Métadonnées
- **Identifiant** : `US-01`
- **Titre** : Initialisation du socle Astro, configuration SCSS & Conteneurisation Docker Dev
- **Statut** : Terminé (Done)
- **Priorité** : Bloquante (P0)
- **Références** : [docs/PRD.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/PRD.md), [docs/architecture.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/architecture.md)

---

## 1. Description
**En tant que** développeur sur le projet Metahism,  
**Je veux** initialiser un projet Astro avec TypeScript strict, compiler le SCSS et disposer d'un environnement Docker Compose avec rechargement à chaud (Hot Module Replacement),  
**Afin de** développer sereinement les fonctionnalités de la vitrine artistique sans installer de dépendances polluantes sur mon système d'exploitation hôte.

---

## 2. Critères d'Acceptation (Acceptance Criteria)

### AC-1 : Socle Astro & TypeScript Strict
- [x] Le projet Astro est initialisé à la racine du dépôt avec une structure de base propre.
- [x] Le fichier `tsconfig.json` étend `astro/tsconfigs/strict` et garantit un typage sans compromis (`strict: true`).

### AC-2 : Compilation SCSS & Structure DA
- [x] Le compilateur `sass` est présent dans les dépendances (`devDependencies` ou `dependencies`).
- [x] Les fichiers SCSS fondateurs sont créés :
  - `src/styles/_variables.scss` (palette, typographie, espacements).
  - `src/styles/_mixins.scss` (breakpoints, helpers flex/grid, transitions).
  - `src/styles/global.scss` (reset minimal, styling du body, imports partiels).
- [x] Le layout principal (`src/layouts/Layout.astro`) importe `src/styles/global.scss`.

### AC-3 : Isolation Docker & Hot Reload
- [x] Un fichier `Dockerfile.dev` basé sur `node:22-alpine` est présent, configure `HOST=0.0.0.0` et expose le port 4321.
- [x] Un fichier `docker-compose.yml` orchestre le conteneur avec :
  - Bind-mount `.:/app` pour le rafraîchissement automatique des fichiers édités.
  - Volume anonyme `/app/node_modules` pour isoler les dépendances conteneurisées.
  - Mappage des ports `4321:4321`.
- [x] Un fichier `.dockerignore` prévient l'injection de `node_modules`, `.git`, `dist`, `.env` dans l'image de build.

### AC-4 : Validation Fonctionnelle
- [x] La commande `docker compose up --build` démarre sans erreur.
- [x] L'application répond avec succès sur `http://localhost:4321`.
- [x] Une modification dans un fichier `.astro` ou `.scss` est répercutée en direct dans le navigateur sans redémarrer le conteneur.

---

## 3. Plan de Réalisation Technique
1. [x] Rédaction et validation des documents de cadrage BMAD (`PRD.md`, `architecture.md`, `US-01`).
2. [x] Génération du projet Astro (template minimal) à la racine.
3. [x] Installation de `sass` et vérification de `tsconfig.json`.
4. [x] Création de l'arborescence `src/styles/` et liaison dans `Layout.astro`.
5. [x] Création de `Dockerfile.dev`, `docker-compose.yml` et `.dockerignore`.
6. [x] Validation du build et du démarrage du conteneur.

---

## 4. Définition of Done (DoD)
- Tous les critères d'acceptation sont cochés.
- Le code source compile sans erreur TypeScript (`astro check` ou build).
- Le conteneur Docker démarre au premier essai avec un simple `docker compose up`.
