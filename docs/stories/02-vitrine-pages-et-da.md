# User Story 02 — Structuration des 3 Pages & Direction Artistique Laumond

## Métadonnées
- **Identifiant** : `US-02`
- **Titre** : Alignement DA laumond.com, convention de nommage artiste et création des 3 pages
- **Statut** : Terminé (Done)
- **Priorité** : Haute (P1)
- **Références** : [docs/PRD.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/PRD.md), [docs/architecture.md](file:///Users/paulo/Documents/Projet%20perso/metahism/docs/architecture.md), dépôt source [Paulo54360/laumondv2](https://github.com/Paulo54360/laumondv2)

---

## 1. Description
**En tant que** développeur et collaborateur des artistes,  
**Je veux** adapter la DA fidèle de `laumond.com` (fond blanc/clair, rouge signature `#cc0000`, typographie épurée avec séparateurs rouges de section) et créer 3 pages clés :
1. Une frise chronologique verticale (Page d'accueil),
2. Une interview exclusive (Q&R avec Patrick Laumond sur *Le grand mikado de la pensée humaine*),
3. Une page de remerciement des partenaires,  
**En appliquant** une convention stricte de repères textuels et visuels (`Titre.X.Y`, `Texte.X.Y`, `Image.X.Y`)  
**Afin que** les artistes et l'équipe éditoriale puissent désigner précisément chaque contenu lors de nos réunions de cadrage artistique.

---

## 2. Règle Métier & Convention Artiste (Strict)
Tous les contenus textuels et visuels doivent porter un identifiant clair et repérable :
- Page 1 (Frise) : `Titre.1.X`, `Texte.1.X`, `Image.1.X`
- Page 2 (Interview Mikado) : `Titre.2.X`, `Question.2.X`, `Reponse.2.X`, `Image.2.X`
- Page 3 (Partenaires) : `Titre.3.X`, `Texte.3.X`, `Image.3.X`, `Partenaire.Image.3.X`

---

## 3. Critères d'Acceptation (Acceptance Criteria)

### AC-1 : Reprise fidèle de la Charte Graphique (DA laumond.com)
- [x] Fond blanc/clair (`#ffffff`, `#f8f9fa`, `#f5f5f5`), typographie `Inter`, texte sombre `#2c3e50` / `#6c757d`.
- [x] Rouge signature Laumond `#cc0000` et hover `#a20101` intégrés aux tokens SCSS (`_variables.scss`, `_tokens.scss`, `global.scss`).
- [x] Titres de section avec filet rouge animé (`BaseSectionTitle` / mixin).
- [x] Barre de navigation avec logo Laumond deux lignes (`Patrick` / `Laumond`), barre de recherche et liens vers les 3 pages.

### AC-2 : Page 1 — Frise Chronologique Verticale (`/`)
- [x] Hero d'immersion reprenant l'esprit de laumond.com.
- [x] Frise verticale interactive reliant plusieurs étapes majeures avec connecteurs et repères clairs (`Titre.1.X`, `Texte.1.X`, `Image.1.X`).

### AC-3 : Page 2 — Fake Interview Patrick Laumond (`/interview`)
- [x] Thème central : *Le grand mikado de la pensée humaine*.
- [x] Structure alternée Interviewer (`Question.2.X`) / Patrick Laumond (`Reponse.2.X`).
- [x] Visuels et cartouches d'œuvres référencés (`Image.2.X`).

### AC-4 : Page 3 — Remerciements des Partenaires (`/partenaires`)
- [x] En-tête de gratitude (`Titre.3.1`, `Texte.3.1`).
- [x] Grille responsive des partenaires et mécènes (`Partenaire.Image.3.X`, `Partenaire.Nom.3.X`).

### AC-5 : Polissage Esthétique Galerie Contemporaine (Anti « E-Commerce »)
- [x] Règle stricte **Zéro Bord Arrondi** (`border-radius: 0;` généralisé à 100% des éléments : boutons, badges, cartes, images, inputs, sélecteurs, séparateurs).
- [x] Suppression des ombres volumiques ou colorées de type boutique en ligne (`box-shadow: none;`), maintien d'une esthétique 90° pure et architecturale.
- [x] Nœuds de frise carrés (10x10px rouge vif) et badges d'atelier rectangulaires.
- [x] Boutons d'action géométriques avec bordure 1px et lettrage espacé (esprit cartel de musée).

### AC-6 : Validation & Conteneurisation
- [x] Compilation sans erreur TypeScript ni SCSS (`docker compose exec web npm run build`).
- [x] Rendu vérifié dans le navigateur (`browser_subagent`) et navigation fluide entre les 3 pages sur `http://localhost:4321`.
