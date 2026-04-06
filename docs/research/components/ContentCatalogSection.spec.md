# ContentCatalogSection Specification

## Overview
- **Target file:** `src/components/ContentCatalogSection.tsx`
- **Interaction model:** static

## DOM Structure
section
  div.badge "Catalogue"
  h2 "Sports, Films, Séries & bien plus"
  p subtitle
  div.content-grid (5 cards with background images)

## Computed Styles

### Section
- backgroundColor: #0E1115; paddingTop: 96px; paddingBottom: 96px

### H2
- fontSize: 44px; fontWeight: 800; color: #FAFAFA

### Content cards grid
- display: grid
- gridTemplateColumns: 1fr 1fr 1fr on first row, then 1fr 1fr on second row
- OR: CSS grid with specific areas
- gap: 16px
- Large cards: ~280px height
- Layout: [Sports] [Films] [Séries] on row 1, [Chaînes Intl] [Enfants] on row 2
- Sports card spans full first column height, or is wider

### Each content card
- position: relative; overflow: hidden; borderRadius: 16px
- backgroundImage: url(…) with background-size: cover; background-position: center
- minHeight: 280px
- cursor: pointer
- Dark overlay: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))

### Category icon (top-left of card)
- position: absolute; top: 12px; left: 12px
- width: 40px; height: 40px; borderRadius: 10px
- bg: each has a unique color
  - Sports: #10B981 (green)
  - Films: #8B5CF6 (purple)
  - Séries: #3B82F6 (blue)
  - Chaînes Intl: #06B6D4 (cyan)
  - Enfants: #F59E0B (amber)

### Card text (bottom)
- position: absolute; bottom: 0; left: 0; right: 0; padding: 20px

### Card title
- fontSize: 20px; fontWeight: 700; color: #FAFAFA

### Card description
- fontSize: 13px; color: rgba(250,250,250,0.8); lineHeight: 1.4

## Cards Content (verbatim)
1. **⚽ Sports en Direct** | bg: stadium image | "Tous les matchs de foot, tennis, boxe, F1 — BeIN, Canal+, DAZN et plus encore."
2. **🎬 Films & Cinéma** | bg: cinema image | "Des milliers de films en 4K — blockbusters, classiques, et nouveautés chaque semaine."
3. **📺 Séries & VOD** | bg: Netflix-style image | "Netflix, Disney+, Prime Video et plus — toutes vos séries préférées en un seul endroit."
4. **🌍 Chaînes Internationales** | bg: world satellite image | "Plus de 150 pays couverts — chaînes arabes, européennes, africaines, américaines."
5. **👶 Contenu Enfants** | bg: animated characters image | "Des centaines de chaînes et dessins animés pour vos enfants — en toute sécurité."

## Background Images
- Use real background images relevant to each category (solid color fallbacks if images unavailable)
- Sports: dark stadium aerial view
- Films: cinema with red/pink neon lights
- Séries: Netflix-style streaming interface
- Chaînes Intl: globe/satellite image
- Enfants: colorful animated characters

## Responsive
- Desktop: 3-col row 1, 2-col row 2
- Mobile: single column stacked
