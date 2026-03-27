# TrustCtaSection Specification

## Overview

- **Target file:** `src/components/TrustCtaSection.tsx`
- **Screenshot:** `docs/design-references/nebula-desktop-1440.png`
- **Interaction model:** hover-driven + click-driven

## DOM Structure

- Trust heading
- 6-logo trust grid
- Large CTA block with headline, supporting text, button, and astronaut image

## Computed Styles (exact values from getComputedStyle)

### Container (`.et_pb_section_3_tb_body`)

- display: block
- position: relative
- padding: `54px 0px 150px`
- background: `linear-gradient(rgb(35, 5, 55) 50%, rgb(130, 2, 115) 98%)`

### CTA title (`.et_pb_section_3_tb_body h2`)

- color: `rgb(255, 255, 255)`
- fontFamily: `Dosis, Helvetica, Arial, Lucida, sans-serif`
- fontSize: `52px`
- fontWeight: `700`
- lineHeight: `68px`
- letterSpacing: `0.5px`

### Logo grid shell (`.dtq-logo-grid`)

- display: flex
- margin: `-20px`
- transition patterns found on logo items/images: `0.2s`

## States & Behaviors

### Logo hover micro-interaction

- **Trigger:** hover on logo card/image
- **State A (before):** idle logo card
- **State B (after):** transition-based visual response
- **Transition:** `0.2s`
- **Implementation approach:** CSS hover transitions

### Main CTA

- **Trigger:** click CTA button
- **State A (before):** idle
- **State B (after):** navigate to contacto
- **Transition:** `0.3s`

## Per-State Content (if applicable)

- N/A

## Assets

- Trust logos: `public/images/sites/5/2025/**/*`
- Astronaut image: `public/images/sites/5/2026/03/astronauta-480.webp`

## Text Content (verbatim)

- EMPRESAS QUE CONFÍAN EN NOSOTROS
- Tu negocio necesita una web increíble.
- Te la hacemos fácil.
- 📞 Hacé una consulta gratis y llevá tu negocio al siguiente nivel.
- ¡Hablemos hoy mismo!

## Responsive Behavior

- **Desktop (1440px):** logo grid + two-column CTA composition
- **Tablet (768px):** reduced heading scale and tighter spacing
- **Mobile (390px):** single-column, astronaut reflows below text
- **Breakpoint:** around 980px and 767px
