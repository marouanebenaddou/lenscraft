# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Interaction model:** scroll-triggered — transparent at top, solid bg after scroll ~50px

## DOM Structure
nav.fixed.top-0.w-full.z-50
  div.container.max-w-7xl.mx-auto.px-4.flex.items-center.justify-between.h-16
    div.flex.items-center.gap-2  ← logo
      img (logo icon)
      span "Lenscraft" (gradient text)
    div.hidden.md:flex.gap-6.items-center  ← nav links
      a "Box G10"
      a "Tarifs"
      a "Fonctionnement"
      a "Support"
    div.flex.items-center.gap-3  ← right
      button "العربية" (lang toggle, globe icon)
      button.cta "Contacter" (blue, phone icon)
    button.md:hidden (hamburger, mobile only)

## Computed Styles

### nav container
- position: fixed
- top: 0
- width: 100%
- zIndex: 50
- transition: all 0.3s ease
- **State A (scroll=0):** backgroundColor: rgba(14,17,21,0.0) or fully transparent
- **State B (scrolled):** backgroundColor: rgba(14,17,21,0.95), backdropFilter: blur(8px), boxShadow: 0 1px 0 rgba(255,255,255,0.08)
- height: 64px (4rem)

### Logo text
- fontFamily: "Space Grotesk", sans-serif
- fontSize: 20px
- fontWeight: 700
- background: linear-gradient(to right, #257BF4, #E63333)
- WebkitBackgroundClip: text
- color: transparent

### Nav links
- color: rgb(250,250,250)
- fontSize: 14px
- fontWeight: 500
- opacity: 0.8 (default), 1.0 on hover
- transition: opacity 0.2s

### Lang toggle button
- backgroundColor: transparent
- border: 1px solid rgba(255,255,255,0.2)
- borderRadius: 8px
- padding: 6px 12px
- color: #FAFAFA
- fontSize: 14px
- display: flex; align-items: center; gap: 4px (globe icon)

### CTA Button "Contacter"
- backgroundColor: #257BF4
- color: #FFFFFF
- borderRadius: 8px
- padding: 8px 16px
- fontWeight: 600
- fontSize: 14px
- display: flex; align-items: center; gap: 8px
- Phone icon (white)

## States & Behaviors

### Scroll-triggered floating
- **Trigger:** window scroll > 50px
- **State A:** bg transparent/none
- **State B:** bg rgba(14,17,21,0.95), backdropFilter: blur(8px), borderBottom: 1px solid rgba(255,255,255,0.08)
- **Transition:** transition: all 0.3s ease
- **Implementation:** useEffect scroll listener + useState

### Mobile menu
- Hamburger button shows at <768px
- Clicking opens a dropdown with nav links stacked vertically
- Slide down animation

## Text Content (verbatim)
- Logo: "Lenscraft"
- Links: "Box G10", "Tarifs", "Fonctionnement", "Support"
- Lang button: "العربية"
- CTA: "Contacter"

## Responsive Behavior
- Desktop: full horizontal nav
- Mobile (<768px): hamburger collapses links, shows logo + CTA only
