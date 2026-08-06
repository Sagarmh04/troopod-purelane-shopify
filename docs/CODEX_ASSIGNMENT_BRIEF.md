# Codex Assignment Brief

## Project

Purelane homepage implementation for the Troopod AI Product Engineer build assignment.

## Platform

- Shopify development store
- Existing stock Dawn foundation
- Liquid, HTML, CSS and vanilla JavaScript
- Shopify theme editor
- Real Shopify product and collection data

## Store

- Store: `purelane-8ntzlxqs.myshopify.com`
- Development theme ID: `145028153457`
- Collection: `purelane-bestsellers`

## Catalogue

Eight products exist and deliberately include:

- one sold-out product;
- one product without an image;
- one product with a very long title.

The implementation must use real Shopify data and survive these states.

## Prototype

Source: `reference/purelane-homepage.html`

The prototype is the visual and behavioural specification, not production Shopify architecture.

The human-visible UI and all normal-mode animations must remain faithful.

## Mandatory sections

1. Hero
2. Shop / product grid
3. Best-selling combos
4. Bundles
5. Reviews rail

Other sections are bonus unless needed to support the visual context of the mandatory sections.

## Correct interpretation

The task is not to paste HTML into Shopify.

Translate the prototype into:

- production Shopify sections;
- merchant-editable settings and blocks;
- native Shopify products, prices, availability and media;
- reusable Liquid components;
- functional cart actions;
- accessible interactions;
- section-safe JavaScript;
- smooth execution.

## Pixel fidelity

Match layout, size, spacing, typography, colour, gradients, blur, glass surfaces, shadows, product placement, responsive behaviour, clipping, overlap and visible states.

The result should be visually indistinguishable to a human at the required viewport sizes, allowing only natural browser-rendering differences and dynamic content variation.

## Motion fidelity

Motion is locked.

Preserve animated subjects, timing, delay, easing, direction, distance, sequence, overlap, trigger, loop, layering and perceived intensity.

Do not remove or simplify animations for performance.

## Reported problem

The prototype feels laggy and can appear stuck while scrolling.

Investigate:

- fixed full-screen animated layers;
- overlapping backdrop filters;
- paint-heavy gradients and shadows;
- independent infinite animations;
- scroll-linked work;
- repeated layout reads;
- multiple timers and observers;
- hero rotation;
- reviews marquee;
- product rotators;
- parallax;
- duplicate lifecycle initialization;
- large embedded assets.

The required result is the same experience rendered more smoothly.

## Shopify requirements

Use native Shopify and Dawn functionality where appropriate:

- collection and product objects;
- product availability;
- product media;
- price rendering;
- product forms;
- cart drawer or notification;
- section settings;
- blocks;
- metafields;
- metaobjects.

Do not hardcode commerce data.

## Merchant experience

A marketing team must be able to manage reasonable content without a developer, including:

- headings and copy;
- button labels and links;
- selected products or collections;
- reviews;
- combo and bundle composition;
- badges and promotional labels.

Keep schemas focused and understandable.

## Quality gates

The work must pass:

- pixel comparison;
- motion comparison;
- Theme Check;
- real cart behaviour;
- sold-out state;
- no-image state;
- long-title state;
- responsive testing;
- keyboard testing;
- reduced-motion testing;
- theme-editor add/remove/reorder testing;
- section reload testing;
- duplicate-initialization testing.

## Baseline

Fresh Dawn currently reports eight warnings and no errors.

These are accepted baseline warnings. New work must not add errors or avoidable warnings.

## Workflow

1. Analyse
2. Record visual and motion specifications
3. Map Shopify data
4. Define architecture
5. Obtain human approval
6. Implement one small task
7. Validate
8. Compare visual and motion parity
9. Commit only when instructed
10. Continue section by section

## Forbidden shortcuts

- one giant copied Liquid file;
- Custom Liquid paste;
- fake product data;
- fake Add to Cart controls;
- replacing the design with Dawn cards;
- removing animations;
- new frontend frameworks;
- external slider or animation packages;
- publishing without permission.
