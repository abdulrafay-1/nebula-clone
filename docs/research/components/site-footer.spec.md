# SiteFooter Specification

## Overview

- **Target file:** `src/components/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/nebula-desktop-1440.png`
- **Interaction model:** click-driven + hover-driven

## DOM Structure

- Left: logo + social icon row + partner badges
- Middle: useful links list
- Right: contact information list
- Bottom legal line and policy items

## Computed Styles (exact values from getComputedStyle)

### Container (`.et_pb_section_0_tb_footer`)

- display: block
- position: relative
- padding: `54px 0px`
- background: `linear-gradient(rgb(54, 6, 77) 16%, rgb(21, 3, 19) 100%)`

### Link style family

- fontFamily: `"DM Sans", sans-serif`
- transition: `all` (footer list items)
- color: white/light foreground

## States & Behaviors

### Footer links

- **Trigger:** hover and click on links
- **State A (before):** idle link
- **State B (after):** route externally/internally
- **Transition:** `all`
- **Implementation approach:** semantic anchors with hover styles

## Per-State Content (if applicable)

- N/A

## Assets

- Main logo: `public/images/sites/5/2026/02/nebula-logo.svg`
- Social icons: `public/images/sites/5/2025/04/*.svg`, `public/images/sites/5/2025/11/medium-fill-full.svg`
- Badges: `public/images/sites/5/2025/10/*.svg`
- Flag icon: `public/images/sites/5/2025/05/flag-us.svg`

## Text Content (verbatim)

- Enlaces útiles
- Desarrollo liviano
- Integraciones con IA
- Diseño UX
- Comparar sitios
- Clientes
- Sobre nosotros
- Blog
- Glosario
- Contacto
- Sierra de la Ballena s/n, Punta Ballena, Uruguay
- hello@nebula.uy
- bitskingdom.com
- ©2026 Bits Kingdom. All rights reserved.
- Privacy Policy
- Cookie Policy

## Responsive Behavior

- **Desktop (1440px):** 3-column footer layout
- **Tablet (768px):** compressed spacing with stacked groups
- **Mobile (390px):** vertical stack with centered social row
- **Breakpoint:** around 980px and 767px
