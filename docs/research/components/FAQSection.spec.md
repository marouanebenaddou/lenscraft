# FAQSection Specification

## Overview
- **Target file:** `src/components/FAQSection.tsx`
- **Interaction model:** click-driven accordion (one item open at a time)

## DOM Structure
section
  div.badge "FAQ"
  h2 "Questions Fréquentes"
  p subtitle
  div.faq-list
    div.faq-item (x8, collapsed by default)
  div.footer-cta

## Computed Styles

### Section
- backgroundColor: #0A0D11; paddingTop: 96px; paddingBottom: 96px

### Badge "FAQ"
- border: 1px solid rgba(255,255,255,0.2); color: #9CA3AF; borderRadius: 20px; padding: 4px 16px; fontSize: 12px

### H2
- fontSize: 48px; fontWeight: 800; color: #FAFAFA
- "Questions " white, "Fréquentes" gradient pink→purple

### Subtitle
- fontSize: 16px; color: #9CA3AF; textAlign: center; marginBottom: 48px

### FAQ list
- maxWidth: 760px; margin: 0 auto; display: flex; flexDirection: column; gap: 12px

### FAQ item (closed)
- bg: rgba(17,24,39,0.6); border: 1px solid rgba(255,255,255,0.08)
- borderRadius: 12px; padding: 20px 24px
- display: flex; justifyContent: space-between; alignItems: center
- cursor: pointer
- transition: border-color 0.2s

### FAQ item (open)
- border-color: rgba(37,123,244,0.3)
- bg: rgba(17,24,39,0.9)

### Question text
- fontSize: 16px; fontWeight: 600; color: #FAFAFA

### Chevron icon
- color: #9CA3AF; fontSize: 18px; transition: transform 0.2s
- Closed: transform: rotate(0deg)
- Open: transform: rotate(180deg)

### Answer (expanded)
- fontSize: 14px; color: #9CA3AF; lineHeight: 1.7; paddingTop: 12px
- borderTop: 1px solid rgba(255,255,255,0.06)
- marginTop: 12px

### Footer CTA
- textAlign: center; marginTop: 48px
- "Vous avez d'autres questions ?" — fontSize: 16px; color: #9CA3AF
- "Contactez-nous sur WhatsApp" button — bg: linear-gradient(#22C55E, #16A34A); color: #FFF; borderRadius: 8px; padding: 12px 24px; fontWeight: 600; marginTop: 12px

## FAQ Items (verbatim questions + answers)
1. Q: "Comment fonctionne votre service de streaming ?"
   A: (provide a 2-sentence placeholder answer about IPTV streaming)

2. Q: "Sur quels appareils puis-je utiliser le service ?"
   A: (Smart TV, Android, iOS, PC, Fire Stick)

3. Q: "Quelle vitesse internet est nécessaire ?"
   A: (minimum 10 Mbps for HD, 25 Mbps for 4K)

4. Q: "Comment fonctionne le test gratuit de 24h ?"
   A: (contact via WhatsApp, receive credentials within 5 min)

5. Q: "Le service est-il fiable ? Y a-t-il des coupures ?"
   A: (Anti-freeze technology, 99.9% uptime)

6. Q: "Quels modes de paiement acceptez-vous ?"
   A: (list payment methods: Visa, PayPal, Wafacash, etc.)

7. Q: "Combien de temps dure l'activation ?"
   A: (activation within 5 minutes after payment)

8. Q: "Puis-je utiliser le service à l'étranger ?"
   A: (available in 150+ countries)

## Responsive
- All viewports: single column list, full width questions
