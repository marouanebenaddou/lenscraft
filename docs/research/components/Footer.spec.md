# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** static

## DOM Structure
footer
  div.container
    div.grid-5-cols
      div.col1 (logo + description)
      div.col2 (Services)
      div.col3 (Contact)
      div.col4 (Couverture)
      div.col5 (Légal)
    div.copyright-row

## Computed Styles

### Footer
- backgroundColor: #080B0F (near black, slightly darker than page bg)
- paddingTop: 64px; paddingBottom: 32px
- borderTop: 1px solid rgba(255,255,255,0.06)

### Grid
- display: grid; gridTemplateColumns: 2fr 1fr 1fr 1fr 1fr; gap: 40px
- Mobile: 2-col or 1-col

### Col 1 — Brand
#### Logo text "Lenscraft"
- fontSize: 24px; fontWeight: 800
- background: linear-gradient(to right, #257BF4, #E63333)
- WebkitBackgroundClip: text; WebkitTextFillColor: transparent

#### Description
- fontSize: 14px; color: #9CA3AF; lineHeight: 1.6; marginTop: 12px; maxWidth: 220px
- "Streaming TV Premium International - Films, Séries & Chaînes TV en 4K"

### Column headings (Services, Contact, Couverture, Légal)
- fontSize: 14px; fontWeight: 600; color: #FAFAFA
- letterSpacing: 1px; textTransform: uppercase; marginBottom: 16px

### List items (nav links)
- fontSize: 14px; color: #9CA3AF; lineHeight: 1.8
- hover: color: #FAFAFA; transition: color 0.2s
- No bullet points

### Copyright row
- borderTop: 1px solid rgba(255,255,255,0.06); marginTop: 48px; paddingTop: 24px
- textAlign: center
- fontSize: 13px; color: #6B7280

## Content (verbatim)

### Col 1
- Logo: "Lenscraft"
- Description: "Streaming TV Premium International - Films, Séries & Chaînes TV en 4K"

### Col 2 — Services
- "Abonnements Premium"
- "Films & Séries 4K"
- "Sport en Direct"
- "Support 24/7"

### Col 3 — Contact
- "📞 +212664049340"
- "📧 support@lenscraft.com"
- "🕒 Support 7j/7 10h-23h"

### Col 4 — Couverture
- "🌍 Europe"
- "🌍 Amérique"
- "🌍 Afrique"
- "🌍 Monde entier"

### Col 5 — Légal
- "À Propos"
- "Conditions Générales"
- "Politique de Confidentialité"
- "Politique de Remboursement"
- "Contact"

### Copyright
- "© 2024 Lenscraft - Tous droits réservés."

## Responsive
- Desktop: 5-column grid
- Tablet: 3-col (brand spans, then 2x2)
- Mobile: 2-col, copyright full-width
