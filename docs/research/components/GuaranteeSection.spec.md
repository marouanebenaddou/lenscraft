# GuaranteeSection Specification

## Overview
- **Target file:** `src/components/GuaranteeSection.tsx`
- **Interaction model:** static

## DOM Structure
section
  div.shield-icon-large (teal/green circle with shield)
  h2 "Garantie Satisfait ou Remboursé"
  p description
  div.stats-grid (3 cards)

## Computed Styles

### Section
- backgroundColor: #0A0D11 (slightly darker than main bg)
- paddingTop: 96px; paddingBottom: 96px
- textAlign: center

### Shield icon circle
- width: 96px; height: 96px; borderRadius: 50%
- background: linear-gradient(135deg, #14B8A6, #06B6D4) (teal-cyan gradient)
- display: flex; alignItems: center; justifyContent: center
- margin: 0 auto 32px
- ShieldCheck icon: color: #FAFAFA; fontSize: 48px

### H2
- fontSize: 48px; fontWeight: 800
- "Garantie " white, "Satisfait " gradient blue→purple, "ou " white, "Remboursé" gradient red
- OR full mixed gradient text

### Description p
- "Testez notre service pendant 7 jours. Si vous n'êtes pas satisfait, nous vous remboursons intégralement — sans questions."
- fontSize: 18px; color: #9CA3AF; maxWidth: 600px; margin: 16px auto 48px; lineHeight: 1.6

### Stats grid (3 cols)
- display: grid; gridTemplateColumns: repeat(3, 1fr); gap: 24px; maxWidth: 800px; margin: 0 auto

### Each stat card
- bg: rgba(17,24,39,0.6); border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 16px; padding: 32px 24px; textAlign: center

### Stat value
- fontSize: 40px; fontWeight: 800; color: #FAFAFA

### Stat label
- fontSize: 14px; fontWeight: 600; color: #9CA3AF; marginBottom: 8px

### Stat description
- fontSize: 13px; color: #6B7280; lineHeight: 1.5

## Stats Content (verbatim)
1. **100%** | "Remboursement" | "Remboursement intégral si le service ne vous convient pas"
2. **Tester** | "7 Jours pour" | "Une semaine complète pour découvrir toutes les fonctionnalités"
3. **Dédié** | "Support" | "Notre équipe vous accompagne tout au long de votre essai"

## Responsive
- Desktop: 3 columns
- Mobile: 1 column stacked
