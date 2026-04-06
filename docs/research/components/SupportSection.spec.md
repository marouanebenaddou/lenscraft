# SupportSection Specification

## Overview
- **Target file:** `src/components/SupportSection.tsx`
- **Interaction model:** static

## DOM Structure
section#support
  h2 "Support Client 24/7"
  p subtitle
  div.image-container (support team photo)
    div.badge-overlay "🟢 Support Actif 24/7"
  h3 "Contactez-nous par Votre Canal Préféré"
  div.contact-channels-grid (4 cards)
  div.why-exceptional-card
    h3 "Pourquoi Notre Support est Exceptionnel"
    div.features-grid (3 items)
  div.contact-buttons-row

## Computed Styles

### Section
- backgroundColor: #0A0D11; paddingTop: 96px; paddingBottom: 96px

### H2
- fontSize: 48px; fontWeight: 800; color: #257BF4 (all blue gradient)
- textAlign: center

### Subtitle
- fontSize: 16px; color: #9CA3AF; textAlign: center; maxWidth: 600px

### Image container
- maxWidth: 760px; margin: 0 auto; position: relative
- borderRadius: 20px; overflow: hidden

### Image (support team photo)
- width: 100%; aspectRatio: 16/7; objectFit: cover
- Shows 2 people with headsets at control room with multiple monitors

### Support Active badge (overlay, top-left)
- position: absolute; top: 16px; left: 16px
- bg: rgba(34,197,94,0.9) (green)
- borderRadius: 20px; padding: 6px 14px; fontSize: 12px; fontWeight: 600; color: #FAFAFA
- "🟢 Support Actif 24/7"

### Contact channels grid
- display: grid; gridTemplateColumns: repeat(4, 1fr); gap: 16px; marginTop: 48px

### Each contact card
- bg: rgba(17,24,39,0.8); border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 16px; padding: 24px 20px
- display: flex; flexDirection: column; gap: 12px

### Channel icon circle (top)
- width: 52px; height: 52px; borderRadius: 12px
- Colors:
  - WhatsApp: linear-gradient(#22C55E, #16A34A) green
  - Téléphone: linear-gradient(#3B82F6, #1D4ED8) blue
  - Email: linear-gradient(#8B5CF6, #7C3AED) purple
  - À Domicile: linear-gradient(#F97316, #EA580C) orange

### Channel name
- fontSize: 18px; fontWeight: 700; color: #FAFAFA

### Channel description
- fontSize: 13px; color: #9CA3AF

### Response time badges (2 per card)
- display: flex; gap: 6px
- Badge 1 (lightning bolt): bg: rgba(52,211,153,0.15); color: #34D399; borderRadius: 12px; padding: 3px 10px; fontSize: 11px; fontWeight: 600
- Badge 2 (clock): bg: rgba(107,114,128,0.2); color: #9CA3AF; borderRadius: 12px; padding: 3px 10px; fontSize: 11px

### Contact value (phone/email/etc.)
- bg: rgba(255,255,255,0.05); borderRadius: 8px; padding: 10px 14px
- fontSize: 13px; color: #FAFAFA; fontWeight: 500; textAlign: center; cursor: pointer

### Why Exceptional card
- bg: linear-gradient(135deg, rgba(17,24,39,0.9), rgba(11,16,24,0.9))
- border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 20px; padding: 40px; marginTop: 32px
- display: grid; gridTemplateColumns: 1fr 3fr; gap: 32px; alignItems: center

### 3 exceptional features (in card)
- display: grid; gridTemplateColumns: repeat(3, 1fr); gap: 24px

### Feature icon circle
- width: 52px; height: 52px; borderRadius: 50%; margin: 0 auto 12px
- Colors: teal (#14B8A6), cyan (#06B6D4), amber (#FBBF24)

### Feature title
- fontSize: 16px; fontWeight: 700; color: #FAFAFA; textAlign: center

### Feature description
- fontSize: 13px; color: #9CA3AF; textAlign: center; lineHeight: 1.5

### Contact buttons row
- display: flex; justifyContent: center; gap: 16px; marginTop: 32px; flexWrap: wrap

### Green WhatsApp button
- bg: linear-gradient(135deg, #22C55E, #16A34A); color: #FFF
- borderRadius: 10px; padding: 14px 28px; fontWeight: 700; fontSize: 15px
- "Contacter le Support"

### Dark phone button
- bg: rgba(17,24,39,0.8); border: 1px solid rgba(255,255,255,0.15); color: #FAFAFA
- borderRadius: 10px; padding: 14px 28px; fontWeight: 600; fontSize: 15px
- "+212664049340"

## Contact Channels Content (verbatim)
1. WhatsApp | "Support instantané via WhatsApp" | ⚡ < 5 min | 🕒 24/7 | "+212664049340"
2. Téléphone | "Assistance téléphonique directe" | ⚡ Immédiat | 🕒 8h-23h | "+212664049340"
3. Email | "Support technique par email" | ⚡ < 2h | 🕒 24/7 | "support@lenscraft.com"
4. À Domicile | "Intervention technique chez vous" | ⚡ 24-48h | 🕒 Lun-Sam | "Sur RDV"

## Exceptional Features (verbatim)
1. "Réponse Rapide" | "Temps de réponse garanti sous 5 minutes pour les urgences"
2. "Support Gratuit" | "Assistance technique illimitée incluse dans votre abonnement"
3. "Techniciens Experts" | "Équipe technique certifiée et formée aux dernières technologies premium"

## Responsive
- Desktop: 4-col contact grid, 2-col exceptional card
- Tablet: 2-col contact grid
- Mobile: 1-col, exceptional card stacks
