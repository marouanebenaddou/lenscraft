# CTASection Specification

## Overview
- **Target file:** `src/components/CTASection.tsx`
- **Interaction model:** time-driven (live countdown timer)

## DOM Structure
section
  div.icon (lightning bolt)
  h2 "Commencez à Regarder Aujourd'hui"
  p description
  div.countdown-badge (timer)
  div.cta-buttons-row
  p.trust-badges

## Computed Styles

### Section
- background: linear-gradient(135deg, #257BF4 0%, #1565C0 50%, #0D47A1 100%) (blue gradient)
- paddingTop: 96px; paddingBottom: 96px; textAlign: center
- position: relative; overflow: hidden

### Background decorative elements (optional)
- Subtle radial gradient overlays for depth

### Lightning icon
- fontSize: 48px; color: #FAFAFA; marginBottom: 16px
- Zap icon from lucide

### H2
- fontSize: 56px; fontWeight: 800; color: #FFFFFF; lineHeight: 1.1
- maxWidth: 700px; margin: 0 auto 16px

### Description p
- fontSize: 18px; color: rgba(255,255,255,0.85); maxWidth: 560px; margin: 0 auto 24px; lineHeight: 1.6

### Countdown badge
- bg: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25)
- borderRadius: 24px; padding: 8px 24px; display: inline-flex; alignItems: center; gap: 8px
- fontSize: 14px; color: rgba(255,255,255,0.9); marginBottom: 32px
- Clock icon: white
- "Offre promotionnelle expire dans " normal weight
- Timer value: fontFamily: monospace; fontWeight: 700; color: #FACC15 (yellow); fontSize: 18px; letterSpacing: 2px
- Timer format: "MM:SS:SS" (minutes:seconds or HH:MM:SS)

### CTA Buttons row
- display: flex; justifyContent: center; gap: 16px; flexWrap: wrap

### Primary white button "Tester maintenant"
- bg: #FFFFFF; color: #257BF4
- borderRadius: 10px; padding: 14px 32px; fontWeight: 700; fontSize: 16px
- PhoneCall icon left (blue)
- hover: bg rgba(255,255,255,0.9); transform: translateY(-2px); boxShadow: 0 8px 24px rgba(0,0,0,0.2)
- transition: all 0.2s

### Secondary dark button "Tester gratuitement 24h"
- bg: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.3); color: #FFFFFF
- borderRadius: 10px; padding: 14px 32px; fontWeight: 600; fontSize: 16px
- Zap icon left (white)
- hover: bg rgba(0,0,0,0.5); transition: all 0.2s

### Trust badges row
- fontSize: 13px; color: rgba(255,255,255,0.75); marginTop: 20px
- "✅ Paiement sécurisé • ✅ Activation instantanée • ✅ Garantie 7 jours"

## Countdown Timer Implementation
- useEffect + setInterval every 1 second
- Initial time: ~6 hours (or set to 6*60*60 seconds)
- Format: "HH:MM:SS" displayed in monospace yellow
- Counts down to 0, then resets to initial value (loop)

## Text Content (verbatim)
- H2: "Commencez à Regarder Aujourd'hui"
- Description: "Rejoignez des milliers de clients satisfaits. Activez votre abonnement en 5 minutes et profitez de +25 000 chaînes."
- Countdown prefix: "Offre promotionnelle expire dans"
- CTA1: "Tester maintenant"
- CTA2: "Tester gratuitement 24h"
- Trust: "✅ Paiement sécurisé • ✅ Activation instantanée • ✅ Garantie 7 jours"

## Responsive
- H2 shrinks to 36px on mobile
- Buttons stack on mobile
