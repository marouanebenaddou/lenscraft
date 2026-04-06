# FloatingElements Specification

## Overview
- **Target file:** `src/components/FloatingElements.tsx`
- **Interaction model:** time-driven (live viewer count) + static (chat bubble + sticky pill)

## Elements

### 1. Live Viewers Notification (bottom-left)
- position: fixed; bottom: 24px; left: 24px; zIndex: 40
- bg: rgba(17,24,39,0.95); border: 1px solid rgba(255,255,255,0.1)
- borderRadius: 16px; padding: 12px 16px
- display: flex; alignItems: center; gap: 10px

#### Avatar circle
- width: 36px; height: 36px; borderRadius: 50%
- bg: linear-gradient(135deg, #257BF4, #8B5CF6) (blue-purple)
- display: flex; alignItems: center; justifyContent: center
- User/people icon: color: white; fontSize: 16px

#### Text content
- "🔥 {count} personnes regardent" — fontWeight: 600; color: #FAFAFA; fontSize: 13px
- "en ce moment sur le site" — fontSize: 12px; color: #9CA3AF

#### Count behavior
- Starts at random value ~120-130
- Changes randomly every 5-10 seconds (±1-3) to simulate live count
- Use useState + useEffect with random interval
- Range: 100-150

### 2. WhatsApp Chat Bubble (bottom-right)
- position: fixed; bottom: 24px; right: 24px; zIndex: 40
- width: 52px; height: 52px; borderRadius: 50%
- background: linear-gradient(135deg, #22C55E, #16A34A) (WhatsApp green)
- display: flex; alignItems: center; justifyContent: center
- boxShadow: 0 4px 20px rgba(34,197,94,0.4)
- MessageCircle or WhatsApp icon: color: white; fontSize: 24px
- hover: transform: scale(1.1); transition: transform 0.2s

### 3. "Découvrir nos offres" Sticky Pill (bottom-center, hero only OR always visible)
- position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); zIndex: 40
- background: linear-gradient(135deg, #E63333, #C2185B) (red-pink)
- borderRadius: 24px; padding: 10px 24px
- color: #FFFFFF; fontSize: 14px; fontWeight: 700
- display: flex; alignItems: center; gap: 8px; whiteSpace: nowrap
- boxShadow: 0 4px 20px rgba(230,51,51,0.4)
- "🔥 Découvrir nos offres ∨" (with chevron/arrow icon)
- Note: Only show when user is near the top (hero section). Hide when scrolled past hero.
- Behavior: hide when scrolled > viewport height; show when scrolled < viewport height

## Implementation
- Single client component with all 3 floating elements
- Use 'use client' directive
- All use useEffect/useState for dynamic behavior
