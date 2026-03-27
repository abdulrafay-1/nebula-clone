# ReasonsSection Specification

## Overview

- **Target file:** `src/components/ReasonsSection.tsx`
- **Screenshot:** `docs/design-references/nebula-desktop-1440.png`
- **Interaction model:** static

## DOM Structure

- Section heading
- List/grid of 5 reason items (title + paragraph)
- Decorative asteroid imagery layers

## Computed Styles (exact values from getComputedStyle)

### Container (`.why-section`)

- display: block
- position: relative
- padding: `54px 0px`
- background: transparent

### Reason title (`.why-section h4`)

- color: `rgb(54, 12, 92)`
- fontFamily: `Dosis, Helvetica, Arial, Lucida, sans-serif`
- fontSize: `35.2px`
- fontWeight: `700`
- lineHeight: `52px`
- letterSpacing: `0.5px`

## States & Behaviors

- No click/scroll state machine detected.

### Hover states

- N/A

## Per-State Content (if applicable)

- N/A

## Assets

- `public/images/sites/5/2025/04/asteroid.webp`
- `public/images/sites/5/2025/04/asteroid-2.webp`

## Text Content (verbatim)

- Razones para elegirnos (y quedar feliz)
- 💡 Sencillez ante todo
- 🎨 Diseños irresistibles
- 🤝 Soporte de verdad
- 📱 100% responsivo
- ⚡ Rápido y optimizado

## Responsive Behavior

- **Desktop (1440px):** multi-column reason grid
- **Tablet (768px):** tighter spacing
- **Mobile (390px):** stacked items, `padding: 50px 0`
- **Breakpoint:** around 980px and 767px
