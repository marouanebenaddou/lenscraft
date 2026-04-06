# CoverageSection Specification

## Overview
- **Target file:** `src/components/CoverageSection.tsx`
- **Interaction model:** auto-scrolling marquee (two rows scroll in opposite directions)

## DOM Structure
section
  div.badge "🌐 Couverture Internationale"
  h2 "Streaming TV / Partout dans le Monde"
  p description
  div.marquee-wrapper (overflow: hidden)
    div.marquee-row-1 (scrolls left, duplicated)
    div.marquee-row-2 (scrolls right, duplicated)

## Computed Styles

### Section
- backgroundColor: #0A0D11; paddingTop: 96px; paddingBottom: 96px

### H2
- fontSize: 48px; fontWeight: 800; textAlign: center
- "Streaming TV" — gradient blue→cyan (#257BF4 → #22D3EE)
- "Partout dans le Monde" — color: #FAFAFA

### Description p
- fontSize: 16px; color: #9CA3AF; textAlign: center; maxWidth: 600px; margin: 0 auto 48px; lineHeight: 1.6

### Marquee wrapper
- overflow: hidden; position: relative
- Fade edges: ::before and ::after with gradient from #0A0D11 to transparent (left/right)

### Marquee row
- display: flex; gap: 12px
- animation: marquee 30s linear infinite (row 1 left, row 2 right: animation-direction: reverse)
- Each row contains the full list duplicated 2x for seamless loop

### Country card
- bg: rgba(17,24,39,0.8); border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 12px; padding: 12px 20px
- display: flex; alignItems: center; gap: 10px
- flexShrink: 0 (important for marquee)

### Flag emoji
- fontSize: 24px

### Country name
- fontSize: 14px; fontWeight: 500; color: #FAFAFA; whiteSpace: nowrap

## Keyframe Animation
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

## Countries (Row 1 — first 10)
Maroc 🇲🇦, France 🇫🇷, Sénégal 🇸🇳, Belgique 🇧🇪, Espagne 🇪🇸, Royaume-Uni 🇬🇧, Italie 🇮🇹, Canada 🇨🇦, États-Unis 🇺🇸, Allemagne 🇩🇪

## Countries (Row 2 — last 10)
Suisse 🇨🇭, Portugal 🇵🇹, Pays-Bas 🇳🇱, Tunisie 🇹🇳, Algérie 🇩🇿, Côte d'Ivoire 🇨🇮, Cameroun 🇨🇲, Arabie Saoudite 🇸🇦, Émirats 🇦🇪, Qatar 🇶🇦

## Text Content (verbatim)
- Badge: "Couverture Internationale"
- H2 line1: "Streaming TV"
- H2 line2: "Partout dans le Monde"
- Description: "Peu importe où vous vous trouvez, notre service est disponible à l'international. Conçu pour vous offrir une expérience de streaming fiable, sécurisée et de haute qualité."

## Responsive
- Same on all viewports — marquee adapts naturally
