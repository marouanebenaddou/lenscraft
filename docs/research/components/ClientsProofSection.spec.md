# ClientsProofSection Specification

## Overview
- **Target file:** `src/components/ClientsProofSection.tsx`
- **Interaction model:** click-driven carousel (prev/next arrows)

## DOM Structure
section
  div.badge "🛡 Preuves de Paiement"
  h2 "+10 000 Clients Satisfaits"
  p subtitle
  div.carousel-wrapper (relative, overflow hidden)
    button.prev-arrow (←)
    div.cards-row (shows 3 cards at a time, slides on prev/next)
    button.next-arrow (→)
  div.stats-row (3 stats)

## Computed Styles

### Section
- backgroundColor: #0E1115
- paddingTop: 80px; paddingBottom: 80px

### Badge "Preuves de Paiement"
- border: 1px solid #34D399; color: #34D399; borderRadius: 20px; padding: 4px 16px; fontSize: 13px
- Shield icon

### H2
- fontSize: 48px; fontWeight: 800; color: #FAFAFA
- "+10 000 Clients " plain white, "Satisfaits" gradient green #34D399

### Subtitle
- fontSize: 16px; color: #9CA3AF; textAlign: center

### Carousel arrow buttons (prev/next)
- bg: rgba(31,41,55,0.8)
- border: 1px solid rgba(255,255,255,0.1)
- borderRadius: 50%; width: 44px; height: 44px
- color: #FAFAFA; fontSize: 18px
- position: absolute; left: -20px (prev), right: -20px (next); top: 50%; transform: translateY(-50%)

### WhatsApp screenshot cards (3 visible at a time)
- bg: #111827; border: 1px solid rgba(255,255,255,0.1); borderRadius: 16px
- overflow: hidden
- width: ~380px; aspect-ratio flexible

#### Card header
- bg: #22C55E (WhatsApp green top bar)
- or just shows a screenshot image of WhatsApp chat
- The card IS a WhatsApp chat screenshot image
- Below image: label text + star rating

#### Card footer (below image)
- label: "Client Maroc – Reçu Wafacash" — fontSize: 13px; color: #9CA3AF; padding: 8px 12px
- Stars: 4-5 gold stars ★★★★★ color: #FACC15; fontSize: 14px

### Stats row (3 cols)
- display: flex; justify-content: center; gap: 64px; marginTop: 48px

#### Each stat
- value: fontSize: 48px; fontWeight: 800; color: #34D399 (green)
- label: fontSize: 14px; color: #9CA3AF; textAlign: center
- "10,000+" / "Clients Satisfaits"
- "4.9/5" / "Note Moyenne"
- "98%" / "Taux de Satisfaction"

## Carousel State
- Shows 3 cards at a time
- 10 total cards (slide through groups)
- Transition: translateX with CSS transition 0.4s ease
- Card labels:
  1. "Client Maroc – Reçu Wafacash"
  2. "Client Maroc – Virement CDM 499 DH"
  3. "Client Europe – Paiement PayPal"
  4. "Client Maroc – Reçu Wafacash"
  5. "Client Sénégal – Reçu Wave"
  6. "Client Europe – Paiement Remitly"
  7. "Client Maroc – Virement 500 DH"
  8. "Client Maroc – Virement bancaire"
  9. "Client Maroc – Paiement PDF"
  10. "Client Maroc – Virement instantané"

## Implementation Note
- Since actual WhatsApp screenshot images are copyrighted user content, render the cards as styled WhatsApp-themed mockups with the label and stars
- Style them to look like blurred/card WhatsApp conversations with green header bar

## Text Content (verbatim)
- Badge: "Preuves de Paiement"
- H2: "+10 000 Clients Satisfaits"
- Subtitle: "Des preuves réelles de nos clients — paiements vérifiés et abonnements activés en direct"
- Stats: "10,000+ Clients Satisfaits", "4.9/5 Note Moyenne", "98% Taux de Satisfaction"

## Responsive
- Desktop: 3 cards visible
- Tablet: 2 cards visible
- Mobile: 1 card visible
