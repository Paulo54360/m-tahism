# Guide de Fonctionnement & Manuel Développeur — Metahism

Ce document détaille le fonctionnement opérationnel du projet **Metahism**, le cycle de vie des requêtes, le comportement des composants interactifs, le pipeline des médias AWS S3 et les procédures pas-à-pas pour enrichir ou maintenir l'application.

---

## 1. Démarrage Rapide & Commandes Essentielles

Le projet est entièrement conteneurisé sous Docker afin d'isoler l'environnement sous **Node 22** et d'éviter toute pollution ou incompatibilité sur la machine hôte.

### 1.1. Commandes Quotidiennes (Docker)

```bash
# Démarrer l'environnement de développement en arrière-plan
docker compose up -d

# Consulter les logs du serveur Astro en temps réel
docker compose logs -f web

# Exécuter une compilation de validation TypeScript & SSG
docker compose exec web npm run build

# Accéder au shell interactif du conteneur si nécessaire
docker compose exec web sh

# Redémarrer proprement le conteneur après modification de dépendances
docker compose down && docker compose up --build -d
```

L'application est immédiatement accessible dans le navigateur sur : **[http://localhost:4321](http://localhost:4321)**.

### 1.2. Variables d'Environnement (`.env`)

Le fichier `.env` à la racine définit les paramètres de raccordement cloud :

```env
NODE_ENV=development
HOST=0.0.0.0
PORT=4321

# Configuration AWS S3 pour le chargement des médias HD
PUBLIC_S3_BASE_URL=https://plaumondpicture.s3.eu-west-3.amazonaws.com
S3_BUCKET=plaumondpicture
AWS_REGION=eu-west-3
```

---

## 2. Parcours & Fonctionnement des 3 Pages

L'application comporte 3 pages principales partageant le même gabarit racine ([src/layouts/Layout.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/layouts/Layout.astro)) :

### 2.1. Page d'Accueil : La Frise Chronologique (`/`)
- **Fichier** : [src/pages/index.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/pages/index.astro)
- **Objectif** : Retracer les grandes étapes de la création de Patrick Laumond et du Métahisme.
- **Composants clés** :
  - **Hero Section** : Titre épuré "PATRICK LAUMOND", manifeste d'intention et citation philosophique.
  - **Timeline Verticale** : Liste de jalons temporels (`timelineSteps`) alternant à gauche et à droite.
  - **Repères Artistes** :
    - `Titre.1.1` à `Titre.1.6` pour les titres de sections et d'étapes.
    - `Texte.1.1` à `Texte.1.5` pour les paragraphes d'analyse.
    - `Image.1.1` à `Image.1.5` pour les visuels d'œuvres associées.

### 2.2. Page Entretien : Le Grand Mikado (`/interview`)
- **Fichier** : [src/pages/interview.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/pages/interview.astro)
- **Objectif** : Dialogue philosophique et artistique fictif avec Patrick Laumond expliquant la genèse et la symbolique de l'œuvre monumentale *Le Grand Mikado de la pensée humaine*.
- **Structure du contenu** :
  - Alternance entre les interrogations du critique (`Question.2.X`) et les réponses approfondies de l'artiste (`Reponse.2.X`).
  - Insertion de cartouches de citations marquantes et de gros plans visuels (`Image.2.1`, `Image.2.2`).

### 2.3. Page Partenaires & Remerciements (`/partenaires`)
- **Fichier** : [src/pages/partenaires.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/pages/partenaires.astro)
- **Objectif** : Remercier les mécènes, galeries, institutions culturelles et soutiens techniques.
- **Structure** :
  - Grille architecturale avec logos institutionnels (`Partenaire.Image.3.X`) et raisons sociales (`Partenaire.Nom.3.X`).
  - Appel à mécénat et bouton de contact direct.

---

## 3. Fonctionnement des Composants Cœurs

### 3.1. Le Moteur de Recherche ([src/components/SearchBar.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/components/SearchBar.astro))

La barre de recherche est intégrée au centre de la barre de navigation :

```
[Visiteur tape "mikado"]
          │
          ▼
Debounce (150ms) ──> Filtre sur titre, tags, description, artistRef
          │
          ▼
Affichage du menu déroulant (dropdown à 90° sans arrondi)
          │
     ┌────┴──────────────────────────┐
     ▼                               ▼
[Clic souris]                [Touche Entrée]
     │                               │
     └───────────────┬───────────────┘
                     ▼
window.dispatchEvent("open-artwork-modal", { detail: artwork })
```

#### Raccourcis Clavier Disponibles :
- **`⌘K` (Mac) ou `Ctrl+K` (Windows/Linux)** : Donne instantanément le focus au champ de recherche depuis n'importe où sur la page.
- **`Flèche Bas` / `Flèche Haut`** : Navigue parmi les résultats proposés dans la liste déroulante avec surlignage visuel.
- **`Entrée`** : Valide le résultat sélectionné et ouvre la modale d'exposition.
- **`Échap`** : Ferme la liste de résultats et retire le focus.

### 3.2. La Modale d'Exposition HD ([src/components/ArtworkModal.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/components/ArtworkModal.astro))

La modale est montée au niveau de `Layout.astro` et reste inactive tant qu'aucun événement n'est capté.

#### Fonctionnalités Intégrées :
1. **Écouteur d'événement global** :
   ```typescript
   window.addEventListener('open-artwork-modal', (e: CustomEvent) => {
     const artwork = e.detail;
     // Injection dynamique des métadonnées dans les éléments du DOM
   });
   ```
2. **Isolation du Scroll** : Dès l'ouverture, `document.body.style.overflow = 'hidden'` est activé pour empêcher la page sous-jacente de défiler.
3. **Moteur de Zoom et Déplacement (Pan)** :
   - Bouton **`+`** : Agrandit l'image jusqu'à 300%.
   - Bouton **`−`** : Réduit l'image jusqu'à 100%.
   - Bouton **`100%`** : Réinitialise l'échelle et le centrage.
   - Bouton **`⛶`** : Bascule en mode plein écran natif (`requestFullscreen`).
   - **Glisser-déposer (Pan)** : Lorsque le zoom est supérieur à 100%, l'utilisateur peut cliquer et faire glisser l'image pour explorer les détails minutieux de la toile.
4. **Fermeture** : Clic sur le bouton de fermeture `✕`, clic sur le fond semi-transparent, ou appui sur la touche `Échap`.

### 3.3. Le Chargeur d'Images Résilient ([src/components/ImagePlaceholder.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/components/ImagePlaceholder.astro))

Ce composant gère l'affichage de chaque reproduction d'art sur le site avec une triple sécurité :

```
                  Propriétés passées au composant
           (id, artworkId, s3Key, src, caption, aspectRatio)
                                  │
                                  ▼
      Source prioritaire : src directe > BDD imageUrl > BDD s3Key
                                  │
        ┌─────────────────────────┴─────────────────────────┐
        ▼                                                   ▼
[URL Résolue Trouvée]                             [Aucune URL disponible]
        │                                                   │
        ▼                                                   ▼
Rendu balise <img>                                Rendu mire géométrique
(loading="lazy", decoding="async")                avec croix de visée & tag
        │                                         artiste (ex: Image.1.2)
        ▼ (Si erreur 404 / réseau)                          │
onerror ──> Bascule automatique sur la mire ───────────────┘
```

---

## 4. Guide des Procédures ("Comment Faire ?")

### 4.1. Comment Ajouter une Nouvelle Œuvre au Catalogue ?

1. Ouvrez le fichier de catalogue : [src/data/artworks.ts](file:///Users/paulo/Documents/Projet%20perso/metahism/src/data/artworks.ts).
2. Ajoutez un nouvel objet dans le tableau `artworksData` en respectant l'interface :
   ```typescript
   {
     id: 'ma-nouvelle-oeuvre',
     title: 'Titre de l'Œuvre',
     year: '2025',
     dimensions: '180 x 240 cm',
     technique: 'Acrylique et encres métahistes sur toile de lin',
     s3Key: 'artworks/ma-nouvelle-oeuvre-hd.webp',
     imageUrl: '', // Laisser vide pour utiliser la résolution automatique S3
     description: 'Texte d'analyse décrivant la démarche de Patrick Laumond...',
     tags: ['métahisme', 'nouvelle série', 'couleur', 'fractale'],
     artistRef: 'Image.1.6' // Référence artiste correspondante
   }
   ```
3. L'œuvre apparaîtra immédiatement dans la barre de recherche et sera interrogeable via l'API `/api/artworks.json?q=...`.

### 4.2. Comment Associer une Image AWS S3 ?

1. Déposez l'image haute définition (format recommandé : `.webp` ou `.avif`, max 2500px de large) dans le bucket AWS S3 `plaumondpicture` sous le sous-dossier `artworks/`.
2. Dans le code Astro (par exemple dans [src/pages/index.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/pages/index.astro)), référencez la clé :
   ```astro
   <ImagePlaceholder
     id="Image.1.6"
     s3Key="artworks/ma-nouvelle-oeuvre-hd.webp"
     caption="Image.1.6 — Vue d'ensemble de la nouvelle composition."
     aspectRatio="16 / 9"
   />
   ```
3. La fonction utilitaire [src/utils/s3.ts](file:///Users/paulo/Documents/Projet%20perso/metahism/src/utils/s3.ts) concatène automatiquement la clé avec l'URL de base :
   `https://plaumondpicture.s3.eu-west-3.amazonaws.com/artworks/ma-nouvelle-oeuvre-hd.webp`.

### 4.3. Comment Ajouter un Jalon dans la Frise Chronologique ?

1. Ouvrez [src/pages/index.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/pages/index.astro).
2. Localisez le tableau `timelineSteps` dans le frontmatter (lignes 7-52).
3. Ajoutez un nouveau jalon en veillant à incrémenter les identifiants d'artistes :
   ```typescript
   {
     period: "Phase 05 — Nouvelle Ère",
     titleId: "Titre.1.7",
     titleDefault: "Titre du Jalon",
     textId: "Texte.1.6",
     textContent: "Texte.1.6 — Description de la période...",
     imageId: "Image.1.6",
     s3Key: "artworks/nouvelle-ere-hd.webp",
     imageCaption: "Image.1.6 — Reproduction de l'œuvre majeure.",
     artworkYear: "2026",
   }
   ```

### 4.4. Comment Ajouter un Partenaire ?

1. Ouvrez [src/pages/partenaires.astro](file:///Users/paulo/Documents/Projet%20perso/metahism/src/pages/partenaires.astro).
2. Ajoutez une carte dans la grille des partenaires en respectant le balisage :
   ```astro
   <div class="partner-card">
     <div class="partner-logo-frame">
       <span class="artist-tag">Partenaire.Image.3.X</span>
       <span class="partner-logo-text">Nom du Partenaire</span>
     </div>
     <div class="partner-info">
       <h3 class="partner-name">
         <span class="artist-tag">Partenaire.Nom.3.X</span> Nom Officiel
       </h3>
       <p class="partner-role">Rôle (Mécénat culturel / Soutien technique)</p>
     </div>
   </div>
   ```

---

## 5. Règles de Contribution & Direction Artistique

Toute modification apportée au code doit impérativement respecter les règles établies par la méthode BMAD :

1. **Règle Zéro Bord Arrondi** :
   - N'utilisez **jamais** de `border-radius` supérieur à 0px.
   - Les boutons, les cartes, les champs, les images et les badges doivent conserver des angles stricts à 90°.
2. **Préservation des Balises Artistes** :
   - Ne supprimez ni ne masquez jamais les balises `Titre.X.Y`, `Texte.X.Y`, `Image.X.Y`.
   - Elles servent de coordonnées absolues de communication lors des échanges avec les artistes.
3. **Exécution Docker** :
   - Tout build ou vérification de compilation doit être exécuté dans le conteneur :
     `docker compose exec web npm run build`.
