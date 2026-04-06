# WhyChooseUsSection Specification

## Overview
- **Target file:** `src/components/WhyChooseUsSection.tsx`
- **Interaction model:** static

## DOM Structure
section
  div.badge "AVANTAGES"
  h2 "Pourquoi Nous Choisir !"
  p subtitle
  div.two-col-layout
    div.left (image with badge)
    div.right (4+ feature cards stacked)

## Computed Styles

### Section
- backgroundColor: #0E1115; paddingTop: 96px; paddingBottom: 96px

### Badge "AVANTAGES"
- border: 1px solid rgba(255,255,255,0.2); color: #9CA3AF; borderRadius: 20px; padding: 4px 16px; fontSize: 12px; letterSpacing: 2px

### H2 "Pourquoi Nous Choisir !"
- fontSize: 48px; fontWeight: 800; color: #FAFAFA
- "!" in gradient color (blue→red)

### Subtitle
- "7 ans d'expérience dans le streaming premium avec des milliers de clients satisfaits"
- fontSize: 16px; color: #9CA3AF

### Left image container
- position: relative
- Image: screenshot of a "Why Choose Us" style UI (like another website screenshot)
- borderRadius: 16px; overflow: hidden; boxShadow: 0 20px 60px rgba(0,0,0,0.5)

### "7 Ans" badge (overlay on image, bottom-left)
- position: absolute; bottom: -20px; left: -20px
- background: linear-gradient(135deg, #257BF4, #E63333)
- borderRadius: 16px; padding: 16px 24px
- "EXPÉRIENCE DE" — fontSize: 10px; color: rgba(255,255,255,0.8); letterSpacing: 2px; fontWeight: 600
- "7 Ans" — fontSize: 40px; fontWeight: 800; color: #FAFAFA

### Feature cards (right column, 4 stacked)
- display: flex; flexDirection: column; gap: 16px

#### Each feature card
- bg: rgba(17,24,39,0.6); border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 12px; padding: 20px 24px
- display: flex; gap: 16px; alignItems: flex-start

#### Icon circle
- width: 48px; height: 48px; borderRadius: 12px; flexShrink: 0
- display: flex; alignItems: center; justifyContent: center
- Colors per feature:
  - Shield: bg: #14B8A6 (teal)
  - Lightning: bg: #F97316 (orange)
  - DollarSign: bg: #EAB308 (yellow)
  - TV/Star: bg: #8B5CF6 (purple)
  - Headphones: bg: #EC4899 (pink)

#### Card text
- Title: fontSize: 18px; fontWeight: 700; color: #FAFAFA; marginBottom: 4px
- Description: fontSize: 14px; color: #9CA3AF; lineHeight: 1.5

## Feature Cards Content (verbatim)
1. Icon: Shield (teal) | "Garantie Satisfait ou Remboursé" | "Si vous n'êtes pas entièrement satisfait la première semaine, nous vous remboursons intégralement—sans questions. Votre satisfaction est notre priorité."
2. Icon: Lightning (orange) | "Activation Instantanée" | "Une fois inscrit, vous obtenez un accès instantané avec vos identifiants de connexion. Commencez à regarder immédiatement."
3. Icon: DollarSign (yellow) | "Meilleurs Prix du Marché" | "Vous ne trouverez pas un meilleur rapport qualité-prix avec de tels standards de qualité. Prix imbattables."
4. Icon: TV/Monitor (purple) | "Top Chaînes & VoD" | "Notre service VoD vous donne accès aux derniers films et séries. Chaînes live et pay-per-view disponibles."
5. Icon: Headphones (pink) | "Support Client 24/7" | "Nous sommes disponibles 24h/24. Que ce soit le jour ou la nuit, notre équipe est prête à vous aider. Contactez-nous à tout moment."

## Responsive
- Desktop: 2-column (image left, cards right), 50/50
- Mobile: single column, image first then cards
