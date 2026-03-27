# ServicesSection Specification

## Overview

- **Target file:** `src/components/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/nebula-desktop-1440.png`
- **Interaction model:** click-driven + hover-driven

## DOM Structure

- Section heading
- 6 service cards in responsive grid
- Closing helper CTA strip below cards

## Computed Styles (exact values from getComputedStyle)

### Container (`#servicios`)

- display: block
- position: relative
- backgroundColor: `rgb(255, 255, 255)`
- padding: `64px 0px 120px`
- zIndex: 999

### Service card shell (`#servicios .et_pb_code_1_tb_body` representative)

- backgroundColor: `rgb(251, 247, 251)`
- padding: `24px`
- borderRadius: `16px`
- width: `375.984px` (desktop source)

### Card button (`#servicios .card-button`)

- display: flex
- backgroundColor: `rgb(214, 34, 166)`
- color: `rgb(255, 255, 255)`
- fontFamily: `Dosis, sans-serif`
- fontSize: `16px`
- borderRadius: `50px`
- padding: `8px 32px`
- transition: `all`

### Helper strip (`.et_pb_row_6_tb_body`)

- background: `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(251, 247, 251) 40%, rgb(251, 247, 251) 60%, rgb(255, 255, 255) 100%)`
- borderRadius: `16px`

## States & Behaviors

### Card CTA

- **Trigger:** click card button
- **State A (before):** idle card
- **State B (after):** navigate to detail page
- **Transition:** button hover with transition `all`
- **Implementation approach:** route links per card

### Hover states

- **Card button:** animated color/visual response via transition `all`

## Per-State Content (if applicable)

- N/A

## Assets

- Card images from `public/images/sites/5/2026/03/*.webp`

## Text Content (verbatim)

- Precios flexibles para todos los presupuestos
- Sitio Web Básico
- Sitio Web Custom
- E-Commerce
- Integraciones con IA
- Software a medida
- Diseño UX
- ¿No sabés por dónde empezar?
- Te ayudamos a encontrar la mejor opción para tu proyecto.
- Hablemos

## Responsive Behavior

- **Desktop (1440px):** 3-column layout, large gutter
- **Tablet (768px):** 2-column adaptation
- **Mobile (390px):** 1-column stack, section padding `50px 0 120px`
- **Breakpoint:** around 980px and 767px
