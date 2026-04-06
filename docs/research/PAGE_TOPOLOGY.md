# Lenscraft Page Topology

## Brand Substitution
- "Digicode" → "Lenscraft" everywhere
- "digicodestv.com" → "lenscraft.com"
- Logo: replace with Lenscraft text logo (same style)
- Copyright: "© 2024 Lenscraft"

## Design Tokens
- Font: "Space Grotesk", sans-serif
- Background: #0E1115
- Foreground: #FAFAFA
- Primary Blue: #257BF4
- Primary Red/Gradient end: #E63333
- Accent Green: #34D399
- Accent Cyan: #22D3EE
- Cyan light: #67E8F9
- Muted text: #9CA3AF
- Muted darker: #6B7280
- Gold: #FBBF24
- Star Yellow: #FACC15
- Card bg: #111827 (dark navy)
- Card border: rgba(255,255,255,0.08)
- Nav bg scrolled: rgba(14,17,21,0.95) + backdrop-blur-sm

## Layer Structure
- z-50: Navbar (fixed top)
- z-40: "Découvrir nos offres" sticky pill (fixed bottom center)
- z-40: Live viewers notification (fixed bottom left)
- z-40: WhatsApp chat bubble (fixed bottom right)
- z-0: Page content (normal flow)

## Sections (top to bottom)
1. **Navbar** — fixed, overlays hero
2. **HeroSection** — full viewport height, dark bg with TV image right
3. **ClientsProofSection** — "+10 000 Clients Satisfaits" with WhatsApp carousel
4. **PricingSection** — "Abonnement Streaming Premium" with two plan cards
5. **WhyChooseUsSection** — "Pourquoi Nous Choisir !" image+features layout
6. **CompatibilitySection** — "Compatible avec tous vos appareils" device grid
7. **ContentCatalogSection** — "Sports, Films, Séries & bien plus" category cards
8. **ChannelLogosSection** — channels + sports leagues + film posters
9. **GuaranteeSection** — "Garantie Satisfait ou Remboursé" stats
10. **FeaturesSection** — "Pourquoi Choisir Lenscraft ?" 7-card grid
11. **CoverageSection** — "Streaming TV Partout dans le Monde" flags
12. **FreeTestSection** — WhatsApp contact form + free trial info
13. **FAQSection** — accordion FAQ
14. **SupportSection** — "Support Client 24/7" image + contact channels
15. **CTASection** — blue gradient "Commencez à Regarder Aujourd'hui" + countdown
16. **Footer** — 5-column footer

## Component Files
- src/components/Navbar.tsx
- src/components/HeroSection.tsx
- src/components/ClientsProofSection.tsx
- src/components/PricingSection.tsx
- src/components/WhyChooseUsSection.tsx
- src/components/CompatibilitySection.tsx
- src/components/ContentCatalogSection.tsx
- src/components/ChannelLogosSection.tsx
- src/components/GuaranteeSection.tsx
- src/components/FeaturesSection.tsx
- src/components/CoverageSection.tsx
- src/components/FreeTestSection.tsx
- src/components/FAQSection.tsx
- src/components/SupportSection.tsx
- src/components/CTASection.tsx
- src/components/Footer.tsx
- src/components/FloatingElements.tsx (sticky pill, live viewers, chat bubble)
- src/components/icons.tsx
