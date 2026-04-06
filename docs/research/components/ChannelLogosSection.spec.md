# ChannelLogosSection Specification

## Overview
- **Target file:** `src/components/ChannelLogosSection.tsx`
- **Interaction model:** static

## DOM Structure
section
  h2 "Découvrez un monde de divertissement sans fin avec Lenscraft"
  p subtitle
  h3 "Contenus de Divertissement Premium"
  div.channel-logos-grid (row of channel logos)
  h3 "Sports & Ligues Internationales"
  div.sports-logos-grid
  h3 "Films & Séries Populaires"
  div.film-posters-grid (2 rows x 5 cols)

## Computed Styles

### Section
- backgroundColor: #0E1115; paddingTop: 96px; paddingBottom: 96px

### H2
- fontSize: 36px; fontWeight: 800; color: #FAFAFA; textAlign: center; maxWidth: 800px; margin: 0 auto

### Subtitle
- "Achetez un abonnement et arrêtez de gaspiller de l'argent sur plusieurs abonnements…"
- fontSize: 15px; color: #9CA3AF; textAlign: center

### Section sub-headers (h3)
- fontSize: 20px; fontWeight: 600; color: #9CA3AF; textAlign: center; marginBottom: 24px

### Channel logo cards
- bg: rgba(17,24,39,0.8); border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 12px; padding: 16px; width: 120px; height: 80px
- display: flex; alignItems: center; justifyContent: center
- hover: border-color rgba(255,255,255,0.2); transform: scale(1.05); transition: 0.2s

### Channel logos grid
- display: flex; flexWrap: wrap; justifyContent: center; gap: 12px

### Channel logos (row 1 — Premium Channels)
Netflix (black/red), HBO (black/white), Disney+ (blue), Amazon Prime Video (blue), CINE+OCS

### Channel logos (row 2)
Canal+ (black), beIN Sports (white/purple), RMC (red), MTV (black/white), arte (orange)

### Sports leagues grid
- Same grid style as channels
- Ligue 1 (yellow/black), Premier League (purple), Champions League (dark blue), LaLiga (rainbow), Serie A (blue), Bundesliga (red)

### Film poster cards
- display: grid; gridTemplateColumns: repeat(5, 1fr); gap: 12px (2 rows)
- Each poster: borderRadius: 8px; overflow: hidden; aspectRatio: 2/3
- Image fills card; hover: scale(1.05); transition: 0.2s
- No text overlay

## Text Content (verbatim)
- H2: "Découvrez un monde de divertissement sans fin avec Lenscraft"
- Subtitle: "Achetez un abonnement et arrêtez de gaspiller de l'argent sur plusieurs abonnements. Nous proposons toute la gamme de contenus, de films et de séries télévisées, le tout sous un même toit virtuel : Lenscraft"
- Sub-headers: "Contenus de Divertissement Premium", "Sports & Ligues Internationales", "Films & Séries Populaires"

## Implementation Note
- Channel logos: use img tags with public logos or SVG text representations
- Film posters: use colored placeholder cards with movie title text (actual posters are copyrighted)

## Responsive
- Desktop: logos wrap, 5x2 film posters
- Mobile: logos wrap smaller, 3x3 or 2x5 film posters
