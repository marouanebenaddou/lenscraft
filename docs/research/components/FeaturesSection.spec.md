# FeaturesSection Specification

## Overview
- **Target file:** `src/components/FeaturesSection.tsx`
- **Interaction model:** static

## DOM Structure
section
  h2 "Pourquoi Choisir Lenscraft ?"
  p subtitle
  div.features-grid (7 cards: 4+3 layout)

## Computed Styles

### Section
- backgroundColor: #0E1115; paddingTop: 96px; paddingBottom: 96px

### H2
- fontSize: 44px; fontWeight: 800; color: #FAFAFA; textAlign: center

### Subtitle
- "Découvrez tous les avantages qui font de nous le leader du streaming IPTV au Maroc"
- fontSize: 16px; color: #9CA3AF; textAlign: center; marginBottom: 48px

### Features grid
- display: grid; gridTemplateColumns: repeat(4, 1fr); gap: 20px
- Last 3 cards: gridTemplateColumns: repeat(3, 1fr) on second row
- OR just use 4-col grid and last row shows 3 cards centered

### Each feature card
- bg: rgba(17,24,39,0.6); border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 16px; padding: 28px 24px
- display: flex; flexDirection: column; gap: 12px
- transition: border-color 0.2s, transform 0.2s
- hover: borderColor rgba(37,123,244,0.3); transform: translateY(-2px)

### Icon circle
- width: 56px; height: 56px; borderRadius: 50%
- display: flex; alignItems: center; justifyContent: center
- Icon: white; fontSize: 24px

### Card title
- fontSize: 16px; fontWeight: 700; color: #FAFAFA; lineHeight: 1.3

### Card description
- fontSize: 13px; color: #9CA3AF; lineHeight: 1.5

## Feature Cards (verbatim)
1. Icon: ShieldCheck (bg: linear-gradient #14B8A6→#06B6D4 teal)
   "Garantie Satisfait ou Remboursé"
   "7 jours pour tester, remboursement intégral si vous n'êtes pas satisfait"

2. Icon: Zap/Lightning (bg: linear-gradient #F97316→#EF4444 orange→red)
   "Activation Instantanée"
   "Recevez vos accès en moins de 5 minutes après paiement"

3. Icon: Headphones (bg: linear-gradient #EC4899→#8B5CF6 pink→purple)
   "Support VIP 7j/7"
   "Assistance technique disponible de 10h à 23h tous les jours"

4. Icon: RotateCcw/Replay (bg: linear-gradient #3B82F6→#06B6D4 blue→cyan)
   "Replay 7 Jours"
   "Revoir vos émissions des 7 derniers jours quand vous voulez"

5. Icon: RefreshCw (bg: linear-gradient #10B981→#34D399 green)
   "Mises à Jour Automatiques"
   "Nouvelles chaînes et contenus ajoutés régulièrement"

6. Icon: Wifi (bg: linear-gradient #8B5CF6→#6366F1 purple→indigo)
   "Anti-Freeze Technologie"
   "Serveurs optimisés pour un streaming sans coupure"

7. Icon: Star/Diamond (bg: linear-gradient #FBBF24→#F59E0B gold)
   "Qualité 4K Ultra HD"
   "Image cristalline sur toutes vos chaînes favorites"

## Responsive
- Desktop: 4-col row 1, 3-col row 2 (or just 4-col wrapping)
- Tablet: 2 columns
- Mobile: 1 column
