# Nebula.uy Page Topology

## Overall Layout Model

- Long-form single-page marketing layout.
- Fixed header overlay at top (`#main-header`), high z-index.
- Content sections stacked in normal flow below the hero.
- Floating fixed WhatsApp button overlays all sections near viewport bottom.

## Visual Order (Top to Bottom)

1. Header Overlay

- Selector: `#main-header`
- Type: fixed overlay
- Interaction model: click + hover
- Notes: logo on left, nav and contact CTA on right, gradient background.

2. Hero Section

- Selector: `.et_pb_section_0_tb_body`
- Type: flow content
- Interaction model: static + click CTA
- Notes: large radial purple gradient background, two-line headline, primary CTA, decorative bottom divider.

3. Services / Pricing Cards

- Selector: `#servicios`
- Type: flow content
- Interaction model: click + hover
- Notes: heading, two rows of card columns (6 cards), card CTAs, closing helper CTA strip.

4. Reasons Section

- Selector: `.why-section`
- Type: flow content
- Interaction model: static
- Notes: reasons heading, 5 reason items, decorative asteroid images.

5. Trust Logos + Main CTA

- Selector: `.et_pb_section_3_tb_body`
- Type: flow content
- Interaction model: hover + click
- Notes: trust heading + logo grid + large CTA block with astronaut image.

6. Footer

- Selector: `.et_pb_section_0_tb_footer`
- Type: flow content
- Interaction model: click + hover
- Notes: brand/logo + social icons + useful links + contact/address + compliance/copyright text.

7. Floating WhatsApp

- Selector: `.whatsapp-button`
- Type: fixed overlay
- Interaction model: click
- Notes: persistent external action link.

## Section Dependencies

- Header and WhatsApp rely on fixed positioning and must overlay all content.
- Hero starts below header but remains visually integrated via dark gradient.
- Services, reasons, and trust sections use independent background themes.
- Footer uses a final dark gradient with dense link content.

## Layering and z-index Summary

- Header: z-index `99999` (dominant).
- Hero section: z-index `500`.
- Services: z-index `999`.
- WhatsApp: z-index `9`.

## Interaction Model Classification

- Header: click-driven + hover-driven.
- Hero: static + click-driven.
- Services: click-driven + hover-driven.
- Reasons: static.
- Trust/CTA: hover-driven + click-driven.
- Footer: click-driven + hover-driven.
- WhatsApp: click-driven (fixed).
