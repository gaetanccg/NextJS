# YNOV - NextJS

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Prismic CMS

### Configuration

Le projet utilise [Prismic](https://prismic.io) comme CMS headless.

- **Repository** : `next-gc-ynov`
- **Adapter** : `@slicemachine/adapter-next`

### Lancer Slice Machine

```bash
npx slice-machine
```

Accessible sur `http://localhost:9999`. Permet de gérer les custom types et les slices, puis de les pousser vers le repo Prismic.

### Custom Types

#### Single Types (pages uniques)

| Type | Description |
|------|-------------|
| `homepage` | Page d'accueil avec SliceZone |
| `navigation` | Menus de l'en-tête (header) et du pied de page (footer). Les administrateurs peuvent ajouter/supprimer des liens via les groupes `header_links` et `footer_links`. |

#### Reusable Types (pages multiples)

| Type | Description |
|------|-------------|
| `page` | Pages génériques du site (contact, à propos, etc.) accessibles via `/:uid` |

### Slices

| Slice | ID | Description |
|-------|----|-------------|
| HeroBanner | `hero_banner` | Bannière principale avec titre, description, image de fond et bouton CTA |
| RichText | `rich_text` | Bloc de texte riche (paragraphes, titres, listes, liens) |
| VideoEmbed | `video_embed` | Intégration vidéo YouTube avec gestion du consentement cookies |
| ContactForm | `contact_form` | Formulaire de contact (nom, email, message) |
| ImageBlock | `image_block` | Image avec légende optionnelle |

### Navigation dynamique

Le Header et le Footer récupèrent leurs liens depuis le document Prismic de type `navigation`. Si ce document n'existe pas encore, des liens statiques de fallback sont affichés.

Pour configurer la navigation :
1. Ouvrir Prismic Dashboard
2. Créer un document de type **Navigation**
3. Ajouter des liens dans les groupes **Liens Header** et **Liens Footer**
4. Publier le document

### Pages dynamiques

Les pages créées dans Prismic avec le type `page` sont accessibles via leur UID :
- Créer un document de type **Page** dans Prismic
- Ajouter un UID (ex: `contact`, `a-propos`)
- Composer la page avec les slices disponibles
- Publier → accessible sur `http://localhost:3000/{uid}`

### Recherche par tags

Le site dispose d'une recherche par tags Prismic :

- **Barre de recherche** dans le header avec autocomplétion des tags disponibles
- **Page `/search`** affichant tous les tags sous forme de boutons cliquables
- **Filtrage** : sélectionner un tag affiche tous les documents Prismic associés

Pour ajouter des tags :
1. Ouvrir un document dans Prismic
2. Dans la sidebar, ajouter des tags (ex: `design`, `e-commerce`, `portfolio`)
3. Publier le document
4. Les tags apparaissent automatiquement dans la recherche

### Routes Prismic

| Type | Route |
|------|-------|
| `homepage` | `/` |
| `page` | `/:uid` |

### Preview

Le mode preview Prismic est configuré via les routes API :
- `/api/preview` — Point d'entrée du preview
- `/api/exit-preview` — Sortie du mode preview
- `/api/revalidate` — Revalidation du cache (webhook Prismic)
