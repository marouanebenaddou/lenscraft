# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static

## DOM Structure
section.relative.min-h-screen.flex.items-center
  div.absolute.inset-0  ← dark overlay (left-to-right gradient)
  div.absolute.right-0  ← TV image positioned right
  div.container.relative.z-10  ← content
    div.badge "Garantie satisfait ou remboursé" (green outline pill)
    h1 "Votre cinéma TV illimité à la maison !"
      span.gradient-text "illimité à"
      span.gradient-text "la maison !"
    p (subtitle)
    div.flex.gap-4  ← CTA buttons
      button "Tester maintenant" (primary blue)
      button "Nous contacter" (dark outline)
    div.rating  ← stars + text
    div.grid-4  ← 4 feature cards

## Computed Styles

### Section container
- minHeight: 100vh
- backgroundColor: #0E1115
- position: relative
- overflow: hidden
- paddingTop: 80px (for navbar)

### Dark overlay (left side)
- background: linear-gradient(to right, rgba(14,17,21,0.95), rgba(14,17,21,0.8), rgba(14,17,21,0.6))
- position: absolute; inset: 0
- zIndex: 1

### TV image area (right side)
- position: absolute; right: 0; top: 0; bottom: 0
- width: ~50%
- Image: collage of TV content (sports, cartoons etc.) — use placeholder or the actual image from digicodestv.com/lovable-uploads/
- Gradient overlay at bottom: linear-gradient(to top, #0E1115, transparent, rgba(14,17,21,0.5))

### Badge "Garantie satisfait ou remboursé"
- border: 1px solid #34D399
- borderRadius: 20px
- padding: 4px 16px
- color: #34D399
- fontSize: 14px
- display: inline-flex; align-items: center; gap: 6px
- CheckCircle icon (green)

### h1
- fontSize: 72px (desktop), 48px (tablet), 36px (mobile)
- fontWeight: 800
- color: #FAFAFA
- lineHeight: 1.1
- maxWidth: 700px

### Gradient text (h1 highlighted parts)
- background: linear-gradient(to right, #257BF4, #E63333)
- WebkitBackgroundClip: text
- WebkitTextFillColor: transparent
- display: block or inline

### Subtitle paragraph
- fontSize: 18px
- color: rgba(250,250,250,0.8)
- maxWidth: 580px
- lineHeight: 1.6
- fontWeight: 400

### Bold parts in subtitle
- "+35 000 chaînes en direct" — fontWeight: 700, color: #FAFAFA
- "+70 000 films & séries" — fontWeight: 700, color: #FAFAFA
- "0 coupure, 0 freeze" — fontWeight: 700, color: #FAFAFA
- "7j/7 de 10h à 23h" — fontWeight: 700, color: #FAFAFA

### Primary CTA "Tester maintenant"
- backgroundColor: #257BF4
- background: linear-gradient(135deg, #257BF4 0%, #1193D4 100%)
- color: #FFFFFF
- borderRadius: 8px
- padding: 14px 28px
- fontSize: 16px
- fontWeight: 600
- display: flex; align-items: center; gap: 8px
- Lightning/Zap icon left

### Secondary CTA "Nous contacter"
- backgroundColor: rgba(14,17,21,0.8)
- border: 1px solid rgba(255,255,255,0.2)
- color: #FAFAFA
- borderRadius: 8px
- padding: 14px 28px
- fontSize: 16px
- fontWeight: 600
- Chat/message icon left

### Star rating row
- Stars: 5x star icons, color: #FACC15 (yellow)
- "4.9/5" — fontWeight: 700, color: #FAFAFA, fontSize: 16px
- "– +2 300 clients" — color: #9CA3AF, fontSize: 14px

### 4 Feature cards row
- display: grid; gridTemplateColumns: repeat(4, 1fr); gap: 8px
- backgroundColor: rgba(17,24,39,0.6)
- border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 12px
- padding: 20px 12px
- textAlign: center
- Icon: colored circle bg with white icon (orange #F97316 for lightning, cyan #22D3EE for TV, pink #EC4899 for film, teal #34D399 for shield)
- Label fontSize: 13px, color: #FAFAFA, fontWeight: 500
- Icon circle: width/height 48px, borderRadius: 50%

### Feature card labels
- "Test gratuit 24h"
- "+35 000 chaînes"
- "Films & séries 4K"
- "Service stable 24/7"

## Text Content (verbatim)
- Badge: "Garantie satisfait ou remboursé"
- H1: "Votre cinéma TV illimité à la maison !"
- Subtitle: "Profitez d'un accès illimité à +35 000 chaînes en direct et +70 000 films & séries en qualité HD/4K — 0 coupure, 0 freeze. Notre équipe est disponible 7j/7 de 10h à 23h pour vous accompagner. Testez gratuitement et rejoignez des milliers de clients satisfaits !"
- CTA1: "Tester maintenant"
- CTA2: "Nous contacter"
- Rating: "4.9/5 – +2 300 clients"
- Cards: "Test gratuit 24h", "+35 000 chaînes", "Films & séries 4K", "Service stable 24/7"

## Responsive Behavior
- Desktop: content left ~50%, TV image right ~50%
- Mobile: single column, image behind with full overlay
- H1 shrinks from 72px → 36px
- Feature cards: 2x2 grid on mobile
