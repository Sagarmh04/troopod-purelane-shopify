# First Codex Prompt — Strict Analysis Only

Read these files completely:

- `AGENTS.md`
- `ASSIGNMENT.md`
- `IMPLEMENTATION_PLAN.md`
- `QA_CHECKLIST.md`
- `docs/CODEX_ASSIGNMENT_BRIEF.md`
- `docs/THEME_CHECK_BASELINE.md`
- `reference/purelane-homepage.html`

Inspect the current Dawn repository, especially:

- `layout/theme.liquid`
- `templates/index.json`
- `sections/featured-collection.liquid`
- `sections/slideshow.liquid`
- `snippets/card-product.liquid`
- `snippets/price.liquid`
- `snippets/buy-buttons.liquid`
- `assets/base.css`
- `assets/animations.js`
- `assets/theme-editor.js`
- `assets/product-form.js`
- `assets/quick-add.js`
- `assets/cart-drawer.js`
- `assets/cart-notification.js`
- `assets/component-card.css`
- `assets/component-price.css`
- `assets/component-slider.css`

## Mode

This is an ANALYSIS-ONLY task.

You are strictly forbidden from:

- modifying, creating, deleting, renaming or formatting files;
- installing packages;
- changing Shopify data;
- creating metafields or metaobjects;
- modifying Git;
- committing or pushing;
- pushing a theme;
- publishing;
- running mutating commands.

Read-only inspection is allowed.

Before inspecting, confirm in one sentence that you understand no file will be changed.

## Core interpretation

The prototype is the visual and behavioural specification.

Preserve the human-visible UI and every normal-mode visible animation and effect.

Do not recommend removing, simplifying, replacing, shortening, slowing, accelerating or perceptibly changing an animation for performance.

Performance recommendations must keep the same visible result and motion.

The task is to translate the prototype into production Shopify sections using real Shopify data, merchant-editable schemas, reusable Liquid, working cart behaviour, accessibility and theme-editor-safe JavaScript.

## Required report

Return one structured report in your response. Do not write it to a file.

### 1. Source confirmation

Report:

- files read;
- files unavailable or incomplete;
- Dawn version clues;
- instruction/repository mismatches;
- uncertainties affecting implementation.

### 2. Complete prototype section map

For every major section provide:

- visible name;
- HTML ID;
- important classes;
- approximate source line range;
- mandatory or bonus;
- desktop behaviour;
- mobile behaviour;
- animations;
- dependencies on global scene systems.

Explicitly identify Hero, Shop, Combos, Bundles and Reviews.

### 3. Mandatory-section DOM map

For each mandatory section identify:

- root and child hierarchy;
- repeated elements;
- controls;
- product placeholders;
- text and pricing;
- artwork sources;
- animation hooks;
- JavaScript selectors;
- accessibility attributes;
- responsive branches.

### 4. Pixel-fidelity specification

Extract:

- colours and gradients;
- fonts, weights and responsive sizes;
- line heights and letter spacing;
- containers and section spacing;
- breakpoints;
- card dimensions;
- radii and borders;
- blur and shadows;
- clipping;
- z-index and layering;
- mobile changes.

Separate exact values from inferred values.

### 5. Motion-fidelity specification

For every animation report:

- name;
- element;
- CSS or JS origin;
- trigger;
- initial and final state;
- direction and distance;
- duration and delay;
- easing;
- loop;
- sequence and layering;
- responsive variation;
- reduced-motion variation;
- offscreen behaviour;
- scroll or input relationship.

Include scene crossfades, water, bubbles, reveals, header movement, parallax, hero rotation and entrances, reviews rail, product rotator, horizontal rails, sticky CTA and hover effects.

Do not propose removing or simplifying them.

### 6. Performance diagnosis

Identify exact expensive patterns:

- fixed full-screen layers;
- backdrop filters;
- shadows and gradients;
- paint-heavy animation;
- layout reads;
- scroll handlers;
- timers;
- observers;
- DOM queries;
- frame loops;
- offscreen work;
- duplicate work;
- embedded base64 assets.

For each, propose invisible optimizations that preserve the same visible output and timing. State why the user should not perceive a difference.

### 7. Hardcoded-commerce audit

Identify every hardcoded product, price, compare-at price, discount, availability, image, rating, review count, badge, bundle/combination composition, product link and Add to Cart control.

Map each to native product data, variants, collection, section settings, blocks, metafields or metaobjects.

### 8. Reusable-component inventory

Identify patterns for snippets, shared CSS and shared controllers:

- product card;
- product media;
- price;
- badge;
- button;
- review card;
- combo card;
- bundle tier;
- headings;
- glass surfaces;
- rails;
- animation utilities.

Explain what should reuse Dawn logic and what requires Purelane markup.

### 9. Dawn integration map

Explain:

- reusable functionality;
- reusable snippets;
- product forms;
- cart drawer/notification events;
- theme-editor events;
- files not to modify;
- files that may need minimal changes.

Do not recommend replacing Dawn globally.

### 10. Shopify data model

For every editable value recommend:

- native product field;
- collection picker;
- product picker;
- product-list setting;
- section setting;
- block;
- metafield;
- metaobject.

For each proposed metafield/metaobject give owner type, namespace, key, type, purpose and justification.

Do not create definitions.

### 11. Proposed file architecture

List:

- exact new paths and responsibilities;
- exact existing paths needing minimal changes;
- exact existing paths reused unchanged.

Keep changes narrow and avoid one giant file.

### 12. Theme-editor lifecycle

Design exact handling for:

- normal load;
- `shopify:section:load`;
- `shopify:section:unload`;
- block selection where relevant;
- idempotent initialization;
- cleanup of timers, observers, frames and listeners;
- section IDs;
- duplicate prevention;
- faithful animation state after reload.

### 13. Validation strategy

Explain exact tests for:

- pixel parity;
- motion parity;
- 375, 390, 768, 1024 and 1440 widths;
- cart;
- sold-out product;
- no-image product;
- long title;
- reduced motion;
- keyboard;
- editor lifecycle;
- performance;
- Theme Check baseline.

### 14. Incremental implementation sequence

For each task provide:

- objective;
- likely files;
- prerequisites;
- acceptance criteria;
- Theme Check requirement;
- manual tests;
- visual comparison;
- motion comparison;
- rollback boundary.

The first task must be small and confidently reviewable.

### 15. Risks and unanswered questions

List missing assets, ambiguous interactions, unclear mobile behaviour, Shopify limitations, data uncertainties, dynamic-data differences and anything needing a human decision.

## End format

End with:

1. `Recommended architecture`
2. `Recommended first implementation task`
3. `Files proposed for the first task`
4. `Questions requiring human approval`
5. `Confirmation that no files were changed`

Do not edit anything. Wait for approval.
