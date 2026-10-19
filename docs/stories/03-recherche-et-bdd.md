# User Story 03 — Moteur de Recherche Interactif & Catalogue BDD des Œuvres

## Métadonnées
- **Identifiant** : `US-03`
- **Titre** : Barre de recherche interactive, API de lookup BDD et modale d'exposition HD
- **Statut** : Terminé (Done)
- **Priorité** : Haute (P1)
- **Références** : [docs/PRD.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/PRD.md), [docs/architecture.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/architecture.md)

---

## 1. Description
**En tant que** visiteur, collectionneur ou critique d'art sur la vitrine Metahism,  
**Je veux** rechercher une œuvre par son nom, son mot-clé ou sa thématique dans la barre de recherche de la navbar,  
**Afin d'** obtenir instantanément les correspondances depuis la base de données et afficher les détails de l'œuvre (visuel HD S3, dimensions, technique, cartouche d'analyse) dans une modale d'exposition contemplative sans rechargement de page.

---

## 2. Critères d'Acceptation (Acceptance Criteria)

### AC-1 : Modèle de Données & Catalogue Typé
- [x] Création du contrat TypeScript `src/types/artwork.ts` définissant l'entité `Artwork` (`id`, `title`, `year`, `dimensions`, `technique`, `s3Key`, `imageUrl`, `description`, `tags`, `artistRef`).
- [x] Création du catalogue de données structurées `src/data/artworks.ts` recensant les œuvres phares de Patrick Laumond (notamment *Le Grand Mikado de la pensée humaine* et ses variantes métahistes).

### AC-2 : Endpoint API de Recherche
- [x] Mise en place de l'endpoint `src/pages/api/artworks.json.ts` permettant d'interroger la base d'œuvres avec recherche insensible à la casse sur les titres, tags et descriptions.

### AC-3 : Composant de Recherche Interactif dans la Navbar
- [x] Saisie réactive avec debounce et dropdown de suggestions instantanées.
- [x] Raccourcis ergonomiques (Focus via raccourci, fermeture via touche `Échap`, clic extérieur).
- [x] État "aucun résultat" soigné avec suggestion alternative.

### AC-4 : Modale d'Exposition d'Œuvre HD
- [x] Clic sur une œuvre dans les résultats ouvre une modale plein écran galerie élégante.
- [x] Affichage de l'œuvre grand format, cartouche muséal (titre, année, technique, dimensions, référence S3).
- [x] Animation d'ouverture et de fermeture fluide, isolation du scroll d'arrière-plan.

### AC-5 : Validation & Conteneurisation
- [x] Compilation sans erreur TypeScript ni warning Astro.
- [x] Tests de requêtes et validation du comportement sur le serveur local `http://localhost:4321`.
