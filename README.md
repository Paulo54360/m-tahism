# Patrick Laumond — Vitrine Métahisme

> Site vitrine haute performance dédié à l'exposition de l'œuvre monumentale et du mouvement Métahiste de **Patrick Laumond** (*Le Grand Mikado de la pensée humaine*).  
> Conçu selon la méthode **BMAD** (Breakthrough Method of Agile AI-Driven Development) en alignement strict avec la direction artistique de [laumond.com](https://laumond.com).

---

## 🏛️ Caractéristiques Clés

- **Esthétique Galerie & 0 Arrondi** : Direction artistique contemporaine épurée avec stricte règle `border-radius: 0;`, typographie soignée et palette officielle (`#cc0000`, `#094629`, `#999999`, `#2c3e50`).
- **Co-création Artiste** : Balisage systématique de chaque élément (`Titre.X.Y`, `Texte.X.Y`, `Image.X.Y`) pour un repérage immédiat lors des échanges avec les créateurs.
- **Moteur de Recherche & Catalogue Typé** : Barre de recherche avec autocomplétion instantanée, raccourci universel `⌘K`, navigation au clavier et catalogue TypeScript `src/data/artworks.ts`.
- **Modale d'Exposition & Visualiseur HD** : Modale d'analyse muséale avec zoom dynamique (+ / − / 100% / plein écran) et déplacement (pan) sur l'œuvre haute définition.
- **Distribution Cloud AWS S3** : Raccordement au bucket AWS S3 `plaumondpicture` (`eu-west-3`) avec repli gracieux sans saut d'affichage (CLS = 0) sur mire géométrique.
- **Environnement Conteneurisé** : Environnement Docker hermétique sous Node 22 avec hot-reload.

---

## 🚀 Démarrage Rapide

### Prérequis
- [Docker](https://www.docker.com/) & Docker Compose

### Lancer l'application
```bash
# Démarrer le conteneur en arrière-plan
docker compose up -d

# Consulter les logs
docker compose logs -f web

# Tester la compilation Astro
docker compose exec web npm run build
```

L'application est disponible sur **[http://localhost:4321](http://localhost:4321)**.

---

## 📚 Documentation Complète

La documentation du projet suit le cycle agile BMAD :

| Document | Description |
| :--- | :--- |
| **[docs/PRD.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/PRD.md)** | Product Requirements Document : vision, personas, exigences fonctionnelles et roadmap. |
| **[docs/architecture.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/architecture.md)** | Spécification technique d'architecture : diagrammes C4/Mermaid, flux d'événements, modèles de données et composants. |
| **[docs/fonctionnement.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/fonctionnement.md)** | Guide opérationnel développeur : fonctionnement des composants, moteur de recherche, zoom HD, S3 et guides pas-à-pas. |
| **[docs/stories/](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/stories/)** | Ensemble des User Stories détaillées de l'implémentation (US-01 à US-04). |

---

## 🗺️ Navigation & Pages

- **`/`** : Frise chronologique verticale retraçant les grandes étapes du Métahisme avec citation et mise en avant de l'œuvre phare.
- **`/interview`** : Entretien exclusif avec Patrick Laumond autour du *Grand Mikado de la pensée humaine*.
- **`/partenaires`** : Remerciements des mécènes et partenaires institutionnels.
- **`/api/artworks.json`** : Endpoint REST permettant d'interroger le catalogue d'œuvres (`?q=recherche`).
