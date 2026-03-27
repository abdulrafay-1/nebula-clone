# WhatsappFloatingButton Specification

## Overview

- **Target file:** `src/components/WhatsappFloatingButton.tsx`
- **Screenshot:** `docs/design-references/nebula-desktop-1440.png`
- **Interaction model:** click-driven

## DOM Structure

- Single fixed anchor with icon image

## Computed Styles (exact values from getComputedStyle)

### Button (`.whatsapp-button`)

- position: fixed
- width: 54px
- zIndex: 9
- transition: all
- background: transparent

## States & Behaviors

### Action

- **Trigger:** click button
- **State A (before):** idle floating button
- **State B (after):** opens WhatsApp deep link
- **Transition:** `all`
- **Implementation approach:** fixed-position anchor at bottom-right

### Hover states

- mild transform/opacity affordance with transition

## Per-State Content (if applicable)

- N/A

## Assets

- Icon: `public/images/sites/5/2025/06/whatsapp.png`

## Text Content (verbatim)

- Alt text: WhatsApp

## Responsive Behavior

- **Desktop (1440px):** fixed at bottom-right with standard offset
- **Tablet (768px):** same fixed behavior
- **Mobile (390px):** same fixed behavior with reduced offsets
- **Breakpoint:** spacing adjustment around 767px
