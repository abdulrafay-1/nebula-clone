# Nebula.uy Behavior Sweep

## Environment

- Target URL: https://nebula.uy/
- Sweep date: 2026-03-28
- Browser automation: Chrome MCP
- Viewports tested: 1440w desktop, 768w tablet, 390w mobile

## Global Interaction Model

- Primary model: Scroll-driven page with static content sections.
- Secondary model: Hover/click on navigation links, CTA buttons, service cards, logo cards, and footer links.
- Smooth scrolling libs: Not detected (`lenis` and `locomotive` not present).
- Scroll-snap: Not detected on body or main containers.

## Scroll Sweep Findings

### Header shell

- Selector: `#main-header`
- Mechanism: fixed overlay header
- Trigger: N/A (fixed from load)
- Before/after (scroll 0 vs 500+): no meaningful style change detected
- Computed key styles:
  - position: fixed
  - z-index: 99999
  - height: 78px
  - background: linear-gradient(rgb(35, 5, 55) 0%, rgba(0, 0, 0, 0) 81%)

### Hero and section transitions

- Hero uses static gradient + decorative divider shape at bottom.
- No dynamic section activation, no sticky sidebar/tab switching.
- No carousel autoplay blocks detected.

### Floating WhatsApp button

- Selector: `.whatsapp-button`
- Behavior: persistent fixed action button during scroll
- Computed key styles:
  - position: fixed
  - width: 54px
  - z-index: 9
  - transition: all

## Click Sweep Findings

### Top navigation

- Links navigate to routes or in-page anchor behavior.
- Solutions menu has a submenu with 7 items.
- Submenu state probe:
  - display: block
  - opacity: 1
  - visibility: visible
  - pointer-events: auto

### CTA and service buttons

- Hero CTA navigates to `/contacto/`.
- Service card buttons navigate to each solution page.
- Buttons use rounded-pill style and transition animations.

### Footer links/social icons

- Social links route to Instagram/LinkedIn/Facebook/X/Wellfound/ProductHunt/Medium/YouTube.
- Footer utility links route to Nebula internal pages and email.

## Hover Sweep Findings

### Interactive transition patterns

- Nav links: `transition: 0.4s ease-in-out`
- Dropdown/nav submenu links: `transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out`
- CTA buttons: `transition: 0.3s`
- Service card buttons: `transition: all`
- Logo grid cards/images: `transition: 0.2s`

### Animated classes present

- `et_had_animation` appears on several modules.
- Floating astronaut image includes `animation-name: levitar`.

## Responsive Sweep Findings

### Desktop (1440)

- Header remains fixed.
- Hero padding: `240px 0 200px`.
- Services section padding: `64px 0 120px`.
- 3-column service card rows.

### Tablet (768)

- Hero padding reduces to `150px 0 200px`.
- Services section padding changes to `120px 0`.
- Navigation remains visible with mobile nav support rendered.

### Mobile (390)

- Hero padding: `100px 0 51px`.
- Services section padding: `50px 0 120px`.
- Why section padding: `50px 0`.
- Card buttons maintain pill style (`padding: 8px 32px`, `font-size: 16px`).

## Behavior Summary by Section

- Header: static fixed overlay + hover/click navigation.
- Hero: static visual with CTA click behavior.
- Services: static content cards with hover/click transitions.
- Reasons: static informational grid.
- Trust + CTA: logo hover transitions + CTA click behavior.
- Footer: static content + hover/click links.
- Floating WhatsApp: fixed persistent CTA.
