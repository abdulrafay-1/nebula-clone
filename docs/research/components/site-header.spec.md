# SiteHeader Specification

## Overview

- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/nebula-desktop-1440.png`
- **Interaction model:** click-driven + hover-driven

## DOM Structure

- Fixed container wrapper
- Left: logo image link
- Right: nav list (Home, Soluciones, Clientes, Blog) + contact pill button
- Desktop-first horizontal alignment

## Computed Styles (exact values from getComputedStyle)

### Container (`#main-header`)

- position: fixed
- zIndex: 99999
- width: 1425px (viewport-relative in source)
- height: 78px
- background: `linear-gradient(rgb(35, 5, 55) 0%, rgba(0, 0, 0, 0) 81%)`
- transition: all

### Row wrapper (`.et_pb_row_0_tb_header`)

- display: flex
- alignItems: center
- padding: 16px 0px 16px 16px
- width: 1080px
- height: 78px

### Menu shell (`.et_pb_menu_0_tb_header`)

- padding: 8px 8px 8px 16px
- borderRadius: 16px
- height: 46px

### Link styles

- fontFamily: `"DM Sans", sans-serif`
- fontSize: 14px
- fontWeight: 500
- transition: `0.4s ease-in-out`

## States & Behaviors

### Fixed overlay mode

- **Trigger:** page load
- **State A (before):** N/A
- **State B (after):** fixed header visible throughout scroll
- **Transition:** immediate; internal link transitions on hover
- **Implementation approach:** CSS fixed positioning

### Hover states

- **Nav links:** color emphasis via transition `0.4s ease-in-out`
- **Dropdown links:** transition `opacity 0.2s ease-in-out, background-color 0.2s ease-in-out`

## Per-State Content (if applicable)

### State: Default

- Items: Home, Soluciones, Clientes, Blog, Contacto

## Assets

- Logo image: `public/images/sites/5/2026/02/nebula-logo.svg`

## Text Content (verbatim)

- Home
- Soluciones
- Clientes
- Blog
- Contacto

## Responsive Behavior

- **Desktop (1440px):** full horizontal nav with contact pill
- **Tablet (768px):** nav remains visible with compact spacing
- **Mobile (390px):** compact nav area; mobile nav support appears in source
- **Breakpoint:** compact behavior starts around <= 980px
