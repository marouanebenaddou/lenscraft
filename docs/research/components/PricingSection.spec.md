# PricingSection Specification

## Overview
- **Target file:** `src/components/PricingSection.tsx`
- **Interaction model:** static (two plan cards displayed, prices shown for all durations simultaneously)

## DOM Structure
section#pricing
  div.badge "💎 Offres Exclusives"
  h2 "Abonnement Streaming Premium"
  p (subtitle)

  div.plan-card.premium (standard plan)

  div.upgrade-divider "⬆ PASSEZ AU NIVEAU SUPÉRIEUR"

  div.plan-card.gold (gold plan, highlighted)

  div.payment-discount "💳 -10% de réduction si paiement par carte bancaire"
  h3 "Modes de paiement acceptés"
  div.payment-grid (10 logos)
  div.payment-footer (3 trust badges)

## PLAN CARD: Offre Premium

### Card container
- backgroundColor: #111827 (dark navy)
- border: 1px solid rgba(34,211,238,0.3)  ← cyan border
- borderRadius: 16px
- padding: 32px
- maxWidth: 860px; margin: 0 auto

### PREMIUM badge
- backgroundColor: rgba(34,211,238,0.15)
- color: #22D3EE
- borderRadius: 20px
- padding: 4px 16px
- fontSize: 12px; fontWeight: 700; letterSpacing: 1.5px
- Lightning icon

### Plan title "Offre Premium"
- fontSize: 32px; fontWeight: 800; color: #FAFAFA

### Subtitle "L'essentiel du streaming de qualité"
- fontSize: 14px; color: #9CA3AF

### 4 Stat mini-cards (grid 4 cols)
- bg: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); borderRadius: 12px; padding: 16px; textAlign: center
- Icon (cyan): TV, Film, Phone, Wifi — color: #22D3EE; fontSize: 24px
- Value: fontSize: 24px; fontWeight: 800; color: #FAFAFA
  - "+25 000", "+35 000", "1 App", "Stable"
- Label: fontSize: 12px; color: #9CA3AF
  - "Chaînes HD/4K", "Films & Séries", "Incluse", "Connexion"

### Feature checklist (2 columns)
- display: grid; gridTemplateColumns: 1fr 1fr; gap: 8px 24px
- Check icon: color: #22D3EE; size: 16px
- Text: fontSize: 14px; color: rgba(250,250,250,0.9)
- Items: "Qualité HD / 4K sur tous vos écrans", "1 Application IPTV incluse", "1 Appareil connecté simultanément", "Activation immédiate en 5 min", "Support WhatsApp 7j/7", "Compatible Smart TV, Box, Mobile, PC", "Mises à jour automatiques", "Chaînes internationales incluses"

### 3 Price columns (grid 3 cols)
- bg: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); borderRadius: 12px; padding: 20px; textAlign: center

#### 3 Mois
- label "3 MOIS" — fontSize: 12px; fontWeight: 700; letterSpacing: 1px; color: #22D3EE
- strikethrough "249 DH" — fontSize: 14px; color: #6B7280; textDecoration: line-through
- price "149" — fontSize: 40px; fontWeight: 800; color: #FAFAFA
- "DH" suffix — fontSize: 20px; fontWeight: 600
- per-month "50 DH/mois" — fontSize: 12px; color: #9CA3AF
- Button "🎁 Tester" — bg: rgba(6,182,212,0.15); color: #67E8F9; borderRadius: 8px; padding: 10px 24px; width: 100%; fontWeight: 600; border: 1px solid rgba(6,182,212,0.3)

#### 6 Mois (-33% badge)
- discount badge "-33%" — bg: #22D3EE; color: #0E1115; borderRadius: 20px; fontSize: 12px; fontWeight: 700; padding: 2px 10px
- label "6 MOIS"
- strikethrough "349 DH"
- price "199DH" — 33 DH/mois
- Button "🎁 Tester" (same style)

#### 12 Mois (-50% badge, "2ème abo à 150 DH" green banner)
- discount badge "-50%"
- label "12 MOIS"
- strikethrough "499 DH"
- price "299DH" — 25 DH/mois
- green promo banner "🎁 2ème abo à 150 DH" — bg: rgba(52,211,153,0.15); border: 1px solid rgba(52,211,153,0.3); color: #34D399; borderRadius: 6px; fontSize: 12px; padding: 4px 10px
- Button "🎁 Tester"

---

## PLAN CARD: Offre Premium GOLD

### Card container
- backgroundColor: #111827
- border: 2px solid rgba(251,191,36,0.5)  ← gold border
- borderRadius: 16px
- padding: 32px
- position: relative (for "RECOMMANDÉ" badge)
- boxShadow: 0 0 40px rgba(251,191,36,0.1)

### "RECOMMANDÉ" badge (top center, outside card)
- bg: linear-gradient(135deg, #FBBF24, #F59E0B)
- color: #0E1115
- borderRadius: 20px; padding: 4px 16px; fontSize: 12px; fontWeight: 700
- Crown icon

### "PREMIUM GOLD" inner badge
- bg: rgba(251,191,36,0.15); color: #FBBF24; border: 1px solid rgba(251,191,36,0.3)
- Crown icon; letterSpacing: 1.5px

### Plan title "Offre Premium GOLD"
- "GOLD" part: color: #FBBF24
- fontSize: 32px; fontWeight: 800

### Description text (gold emphasis)
- "trente-cinq mille chaînes" and "soixante-dix mille films et séries" — fontWeight: 700; color: #FBBF24

### 4 Stat mini-cards (grid 4 cols)
- icon color: #FBBF24
- "+35 000" Chaînes 4K, "+70 000" Films & Séries, "3 Apps" Sur 1 appareil, "Anti-Freeze" Technologie

### "Avantages exclusifs Gold" header
- color: #FBBF24; fontSize: 14px; fontWeight: 600
- Star icon

### Feature checklist (gold check icons: #FBBF24)
- "Qualité 4K Ultra HD premium", "3 Applications IPTV incluses", "1 Appareil connecté simultanément", "Technologie Anti-Freeze exclusive", "Replay 24h sur quelques chaînes", "Guide EPG électronique complet", "Support prioritaire 24/7", "Compatible tous les appareils", "Mises à jour automatiques", "Contenu international premium", "VOD Netflix, Prime, Disney+…", "Activation immédiate en 5 min"

### Upgrade comparison
- "Premium : 1 App → Gold : 3 Apps sur le même appareil" (small text, #9CA3AF)

### 3 Price columns (gold accent)
- 3 Mois: 349 DH → 199DH (66 DH/mois), "Replay 24h" badge, "🎁 Tester"
- 6 Mois -33%: 449 DH → 299DH (50 DH/mois), "Replay 24h", "🎁 Tester"
- 12 Mois -50% N°1: 699 DH → 499DH (42 DH/mois), "Replay 24h", "🔥 Choisir" button (gold gradient: linear-gradient(135deg, #FBBF24, #F59E0B), color: #0E1115, fontWeight: 700)

---

## Payment Methods Grid
- h3 "Modes de paiement acceptés" — fontSize: 18px; fontWeight: 600; color: #FAFAFA; textAlign: center
- grid: 5 columns x 2 rows
- Each payment card: bg rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); borderRadius: 12px; padding: 16px; textAlign: center
- Logo image + label below
- Logos: Visa/Mastercard (-10% badge on this one), Virement Bancaire, Wafacash, CashPlus, Banques, PayPal, Remitly, Western Union, Binance, Compte Europe

## Trust footer
- 3 items: "🔒 Paiement sécurisé", "⚡ Activation instantanée", "🛡 Support dédié"
- color: #9CA3AF; fontSize: 14px

## Text Content (verbatim)
- Section badge: "💎 Offres Exclusives"
- H2: "Abonnement Streaming Premium"
- Subtitle: "🎥 Accès illimité à +40 000 Films & Séries + 35 000 Chaînes TV en direct - Qualité 4K garantie sans coupure !"
- Divider: "⬆ PASSEZ AU NIVEAU SUPÉRIEUR"
- Payment discount: "💳 -10% de réduction si paiement par carte bancaire"

## Responsive
- Desktop: plan cards full width with 3 price cols side by side
- Mobile: price columns stack vertically, payment grid 3 cols
