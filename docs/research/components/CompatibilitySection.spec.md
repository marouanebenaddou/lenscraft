# CompatibilitySection Specification

## Overview
- **Target file:** `src/components/CompatibilitySection.tsx`
- **Interaction model:** static

## DOM Structure
section
  div.badge "📺 Compatibilité"
  h2 "Compatible avec tous vos appareils"
  p subtitle
  div.devices-grid (6 cards)
  p.footer-note

## Computed Styles

### Section
- backgroundColor: slightly lighter dark: #0A0D11 or #0E1115
- paddingTop: 96px; paddingBottom: 96px

### H2
- fontSize: 48px; fontWeight: 800; color: #FAFAFA
- "tous vos appareils" — gradient: linear-gradient(to right, #257BF4, #22D3EE)
- WebkitBackgroundClip: text; WebkitTextFillColor: transparent

### Subtitle
- "Installez en moins de 2 minutes sur n'importe quel appareil et profitez du streaming partout."
- fontSize: 16px; color: #9CA3AF; textAlign: center; maxWidth: 600px; margin: 0 auto

### Devices grid
- display: grid; gridTemplateColumns: repeat(6, 1fr); gap: 16px
- (mobile: 3x2 or 2x3)

### Each device card
- bg: rgba(17,24,39,0.8); border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 16px; padding: 24px 16px
- display: flex; flexDirection: column; alignItems: center; gap: 12px
- textAlign: center
- transition: border-color 0.2s, transform 0.2s
- hover: border-color: rgba(37,123,244,0.4); transform: translateY(-4px)

### Device image/icon
- width: 64px; height: 48px; objectFit: contain
- Each shows a real device silhouette image

### Device name
- fontSize: 16px; fontWeight: 600; color: #FAFAFA

### Device brands
- fontSize: 12px; color: #9CA3AF; lineHeight: 1.4
- truncated with "…"

## Device Cards Content (verbatim)
1. "Smart TV" | "Samsung, LG, Sony, Philips…"
2. "Android TV" | "Box Android, Nvidia Shield…"
3. "Fire Stick" | "Amazon Fire TV Stick 4K"
4. "Smartphone" | "iOS & Android"
5. "Tablette" | "iPad, Samsung Tab…"
6. "Ordinateur" | "Windows, Mac, Linux"

## Footer note
- "✅ Installation guidée par notre équipe technique • ✅ Assistance à distance disponible"
- fontSize: 14px; color: #9CA3AF; textAlign: center; marginTop: 32px

## Responsive
- Desktop: 6 columns
- Tablet: 3 columns
- Mobile: 2 columns
