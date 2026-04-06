# FreeTestSection Specification

## Overview
- **Target file:** `src/components/FreeTestSection.tsx`
- **Interaction model:** static (form submission via WhatsApp link)

## DOM Structure
section
  h3 "Test Gratuit 24h" (small header above)
  p "Testez notre service pendant 24h gratuitement..."
  div.form-card
    h2 "Contact Direct WhatsApp"
    form
      div.field (Nom complet)
      div.field (Numéro de téléphone)
      div.field (Ville)
      button "Obtenir le Test via WhatsApp"
  div.features-row (3 horizontal features)
  div.what-you-test-card

## Computed Styles

### Section
- backgroundColor: #0E1115; paddingTop: 96px; paddingBottom: 96px

### Form card
- bg: rgba(17,24,39,0.8); border: 1px solid rgba(255,255,255,0.1)
- borderRadius: 20px; padding: 40px; maxWidth: 600px; margin: 0 auto
- boxShadow: 0 20px 60px rgba(0,0,0,0.3)

### Form card header
- PhoneCall icon: color: #EC4899 (pink/magenta), fontSize: 24px
- "Contact Direct WhatsApp" — fontSize: 24px; fontWeight: 700; color: #FAFAFA
- display: flex; alignItems: center; gap: 10px; marginBottom: 24px

### Form field labels
- fontSize: 14px; fontWeight: 500; color: rgba(250,250,250,0.8); marginBottom: 6px

### Form inputs
- bg: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1)
- borderRadius: 8px; padding: 12px 16px
- color: #FAFAFA; fontSize: 15px; width: 100%
- placeholder color: #6B7280
- focus: border-color: #34D399; outline: none; boxShadow: 0 0 0 3px rgba(52,211,153,0.1)

### Submit button "Obtenir le Test via WhatsApp"
- background: linear-gradient(135deg, #22C55E, #16A34A) (WhatsApp green)
- color: #FFFFFF; borderRadius: 10px; padding: 14px 24px; width: 100%
- fontSize: 16px; fontWeight: 700
- display: flex; alignItems: center; justifyContent: center; gap: 8px
- Phone icon left
- hover: brightness(1.1); transition: 0.2s

### 3 Features row (below form)
- display: grid; gridTemplateColumns: repeat(3, 1fr); gap: 24px; marginTop: 48px; maxWidth: 700px; margin: 48px auto 0

### Each feature
- display: flex; flexDirection: column; alignItems: center; textAlign: center; gap: 8px
- Icon circle: width: 44px; height: 44px; borderRadius: 50%
  - Clock: bg: rgba(236,72,153,0.2), color: #EC4899
  - Shield: bg: rgba(37,123,244,0.2), color: #257BF4
  - Lightning: bg: rgba(251,191,36,0.2), color: #FBBF24

### Feature title
- fontSize: 15px; fontWeight: 600; color: #FAFAFA

### Feature description
- fontSize: 13px; color: #9CA3AF; lineHeight: 1.4

### "Ce que vous pouvez tester" card
- bg: rgba(17,24,39,0.6); border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 16px; padding: 24px; maxWidth: 600px; margin: 32px auto 0
- display: grid; gridTemplateColumns: repeat(3, 1fr); gap: 16px

### Each test feature
- Title: fontSize: 13px; fontWeight: 600; color (gradient per item)
  - "Tous les bouquets" — color: #F97316 (orange)
  - "Bibliothèque Complète" — color: #EC4899 (pink)
  - "Qualité Premium" — color: #FBBF24 (gold)
- Description: fontSize: 12px; color: #9CA3AF

## Text Content (verbatim)
- Small header: "Test Gratuit 24h"
- Sub: "Testez notre service pendant 24h gratuitement. Aucun engagement, aucune carte de crédit requise."
- Form title: "Contact Direct WhatsApp"
- Fields: "Nom complet", "Numéro de téléphone", "Ville"
- Placeholders: "Votre nom complet", "Votre numéro de téléphone", "Votre ville"
- Button: "Obtenir le Test via WhatsApp"
- Features: "24h Complètes / Accès illimité pendant 24 heures à tous nos services", "Sans Engagement / Aucune carte de crédit requise, annulation automatique", "Activation Instantanée / Recevez vos identifiants par email en moins de 5 minutes"
- Test card header: "Ce que vous pouvez tester :"
- Items: "Tous les bouquets / Canal+, OCS, Paramount+, Sport...", "Bibliothèque Complète / 20 000+ films et séries", "Qualité Premium / Qualité 4K, Full HD"

## Responsive
- Desktop: form centered, 3-col features
- Mobile: form full-width, features stack
