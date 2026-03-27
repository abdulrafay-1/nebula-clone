# HeroSection Specification

## Overview

- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/nebula-desktop-1440.png`
- **Interaction model:** static + click-driven

## DOM Structure

- Full-width hero section with radial gradient background
- Centered text stack: H1, H2, CTA button
- Decorative divider shape at bottom

## Computed Styles (exact values from getComputedStyle)

### Container (`.et_pb_section_0_tb_body`)

- display: block
- position: relative
- padding: 240px 0px 200px
- background: `radial-gradient(circle at 50% 100%, rgb(142, 0, 142) 0%, rgb(89, 0, 83) 46%, rgb(25, 0, 40) 100%)`
- zIndex: 500

### Title styles

- H1 font size: 60px (observed scale)
- H2 font size: 37.6px (observed scale)
- family pairing: Dosis for headings, DM Sans body support

### CTA button

- background: `rgb(191, 0, 188)`
- color: `rgb(255, 255, 255)`
- borderRadius: 50px
- padding: `8px 32px`
- transition: `0.3s`

## States & Behaviors

### Primary CTA interaction

- **Trigger:** click on CTA button
- **State A (before):** button idle
- **State B (after):** route to `/contacto/`
- **Transition:** visual hover/focus via `0.3s`
- **Implementation approach:** anchor-style button

### Hover states

- **CTA:** subtle visual transition on hover with existing duration

## Per-State Content (if applicable)

- N/A

## Assets

- Decorative bottom divider (inline SVG shape approximation in CSS)

## Text Content (verbatim)

- Sitios web y software inteligente
- Tecnología que trabaja por vos
- Agendá tu consulta ahora

## Responsive Behavior

- **Desktop (1440px):** `padding: 240px 0 200px`
- **Tablet (768px):** `padding: 150px 0 200px`
- **Mobile (390px):** `padding: 100px 0 51px`
- **Breakpoint:** key shifts around 980px and 767px
