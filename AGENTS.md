# AGENTS.md — Purelane Troopod Shopify Assignment

## 0. Authority and precedence

This file is the authoritative instruction set for every AI coding agent working in this repository.

These project-specific rules override generic guidance whenever there is a conflict. Obey the scope of the current prompt exactly.

## 1. Mission

Rebuild `reference/purelane-homepage.html` as a production-quality Shopify homepage on the existing Dawn theme.

The prototype is the visual and behavioural specification. Its HTML, CSS and JavaScript are reference implementation material only and must not be copied blindly.

## 2. Mandatory scope

The five recruiter-required sections are:

1. Hero
2. Shop / product grid
3. Best-selling combos
4. Bundles
5. Reviews rail

Everything else is secondary unless required to reproduce the visual context of a mandatory section, such as shared backgrounds, scene transitions or fixed visual layers.

Do not implement bonus sections until the five mandatory sections pass all acceptance criteria.

## 3. Visual fidelity lock

The prototype's visible UI is locked.

Preserve:

- section order and composition;
- widths, heights and proportions;
- spacing and alignment;
- typography, weights, line heights and letter spacing;
- colours and gradients;
- borders, radii, opacity, blur and shadows;
- product scale and placement;
- clipping, overflow and layering;
- responsive rearrangement and visible states.

Do not redesign, modernize, simplify, restyle or reinterpret the page.

Do not replace the Purelane presentation with ordinary Dawn styling.

## 4. Motion fidelity lock

All normal-mode visible animations and effects are part of the specification.

Preserve:

- animated subjects;
- initial and final states;
- direction and trajectory;
- distance;
- duration and delay;
- easing;
- sequence and overlap;
- trigger;
- looping and pauses;
- layering;
- interaction response;
- perceived intensity.

This includes:

- scene crossfades;
- water layers;
- bubbles;
- parallax;
- scroll reveals;
- header/navigation movement;
- hero product rotation and entrance sequencing;
- hero dots;
- reviews rail;
- product rotators;
- horizontal rails;
- sticky CTA behaviour;
- hover and focus transitions.

Performance work may change only invisible implementation details.

Never remove, simplify, replace, shorten, slow, accelerate, restage, reduce or perceptibly alter an animation without explicit human approval.

`prefers-reduced-motion` is a separate accessibility experience and does not authorize changes to normal mode.

## 5. Performance rule

The reported problem is scroll stutter and moments that feel stuck.

Improve smoothness while keeping the same human-visible result.

Allowed internal optimizations include:

- caching DOM references;
- coordinating scroll-linked work through `requestAnimationFrame`;
- coalescing scroll and resize handlers;
- avoiding repeated layout reads;
- separating reads and writes;
- using compositor-friendly properties where visually identical;
- preventing duplicate timers, observers and listeners;
- explicit section lifecycle cleanup;
- extracting embedded assets without changing appearance;
- avoiding duplicated CSS;
- isolating painted layers;
- responsive Shopify images;
- loading code only where needed;
- stopping invisible work only when resumption remains visually continuous;
- computing elapsed animation state where necessary.

Forbidden shortcuts include:

- deleting effects;
- weakening blur or shadows;
- changing timing or easing;
- reducing animated elements;
- changing mobile composition;
- replacing moving content with static content.

## 6. Shopify constraints

Use:

- Liquid;
- HTML;
- CSS;
- justified vanilla JavaScript;
- Shopify sections and blocks;
- native products, collections, variants, media and product forms;
- Dawn cart infrastructure;
- metafields or metaobjects only where necessary.

Do not introduce React, Next.js, Vue, Svelte, Tailwind, TypeScript, Vite, a custom backend, a Shopify app, external carousel libraries, external animation libraries or unnecessary packages.

Do not publish a theme.

Do not modify the published Dawn theme directly.

Do not commit secrets or storefront passwords.

## 7. Current environment

Store: `purelane-8ntzlxqs.myshopify.com`

Development theme ID: `145028153457`

Collection handle: `purelane-bestsellers`

The collection contains eight products and deliberately includes:

- one sold-out product;
- one product without an image;
- one product with an unusually long title.

Use real Shopify data for names, prices, compare-at prices, availability, variants, media and cart actions.

## 8. Required source files

Read before planning or editing:

- `AGENTS.md`
- `ASSIGNMENT.md`
- `IMPLEMENTATION_PLAN.md`
- `QA_CHECKLIST.md`
- `docs/CODEX_ASSIGNMENT_BRIEF.md`
- `docs/THEME_CHECK_BASELINE.md`
- `reference/purelane-homepage.html`

Never modify `reference/purelane-homepage.html`.

## 9. Dawn capabilities to inspect and reuse

Inspect before rebuilding:

- `snippets/card-product.liquid`
- `snippets/price.liquid`
- `snippets/buy-buttons.liquid`
- `assets/product-form.js`
- `assets/quick-add.js`
- `assets/cart-drawer.js`
- `assets/cart-notification.js`
- `assets/component-card.css`
- `assets/component-price.css`
- `assets/component-slider.css`
- `assets/animations.js`
- `assets/theme-editor.js`
- `sections/featured-collection.liquid`
- `templates/index.json`
- `layout/theme.liquid`

Reuse Dawn's data, forms, events and accessibility patterns where appropriate, while preserving the locked Purelane visual output.

## 10. Merchant editability

Anything a marketing team would reasonably change must use the appropriate data source:

- native product fields for commerce data;
- collection pickers for grids;
- product or product-list settings for curated products;
- section settings for headings, copy, links and section options;
- blocks for repeatable merchant-managed content;
- metafields for product-specific structured attributes;
- metaobjects for reusable structured records when justified.

Adding, removing, reordering and reconfiguring sections or blocks must not break layout or animations.

## 11. Theme-editor lifecycle

Each interactive custom section must:

- initialize on normal page load;
- initialize on `shopify:section:load`;
- clean up on `shopify:section:unload`;
- avoid duplicate timers, observers, listeners and animation loops;
- tolerate reordering and missing blocks;
- support design mode;
- use idempotent initialization;
- use explicit cleanup;
- preserve faithful visible animation state after reload.

Prefer controllers keyed by section ID.

## 12. Accessibility

Preserve visual fidelity while supporting:

- semantic headings;
- keyboard operation;
- visible focus;
- meaningful labels;
- suitable ARIA only where needed;
- useful alt text;
- decorative imagery hidden appropriately;
- contrast;
- accessible moving content;
- sold-out and unavailable announcements;
- valid disabled states;
- no keyboard traps;
- reduced motion.

Do not use accessibility as a reason to redesign normal mode.

## 13. Responsive verification

The required widths are:

- 375 px
- 390 px
- 768 px
- 1024 px
- 1440 px

Record and reproduce stacking, ordering, alignment, rail behaviour, clipping, typography, touch interaction and motion at each width.

## 14. Required edge states

Support:

- sold-out products;
- no-image products;
- long titles;
- empty collection selection;
- removed product references;
- missing optional content;
- one-item rails;
- fewer or maximum blocks;
- products with variants;
- unavailable selected variants.

## 15. Architecture

Prefer small reviewable files.

Likely architecture may include:

- five section files;
- shared Purelane snippets;
- scoped CSS;
- scoped JavaScript controllers;
- extracted prototype assets;
- minimal `templates/index.json` changes;
- minimal global changes only when required.

Do not create one enormous Liquid file.

Do not paste the prototype into Custom Liquid.

Do not duplicate card markup.

Do not modify unrelated Dawn files.

## 16. CSS rules

- Namespace custom selectors with `purelane-` or a section root.
- Avoid broad unscoped selectors.
- Preserve exact prototype values.
- Document unavoidable deviations.
- Avoid `!important` as the default strategy.
- Make mobile rules explicit.
- Prevent layout shifts.
- Use intrinsic media dimensions and appropriate aspect ratios.

## 17. JavaScript rules

- Vanilla JavaScript only.
- No new dependency without approval.
- Use isolated controllers.
- Do not use uncontrolled global state.
- Do not poll continuously.
- Do not query the DOM expensively inside animation frames.
- Separate layout reads and writes.
- Use passive listeners where appropriate.
- cancel animation frames;
- clear intervals and timeouts;
- disconnect observers;
- remove listeners;
- make initialization idempotent;
- preserve exact visible motion.

## 18. Theme Check baseline

Untouched Dawn currently reports:

- 169 files;
- 8 warnings;
- 0 errors.

Accepted baseline warning files:

- `layout/password.liquid`
- `layout/theme.liquid`
- `sections/main-article.liquid`
- `sections/main-list-collections.liquid`
- `sections/main-product.liquid`
- `sections/main-search.liquid`
- `snippets/quick-order-product-row.liquid`

Do not fix unrelated baseline warnings unless explicitly requested.

New work must add zero errors and zero avoidable warnings.

## 19. Git rules

Do not commit or push unless explicitly instructed.

Before and after editing:

- run `git status`;
- inspect `git diff`;
- report changed files.

Do not rewrite history or delete user work.

## 20. Analysis-only mode

When a prompt says analysis-only:

- do not modify, create, delete, rename or format files;
- do not install dependencies;
- do not change Shopify data;
- do not alter Git;
- do not push or publish;
- do not run mutating commands.

Read-only inspection is allowed.

If an edit is required, explain it and wait.

## 21. Editing-task protocol

Before editing, report:

1. understanding;
2. exact proposed files;
3. reason for each file;
4. Shopify data sources;
5. merchant controls;
6. visual and motion risks;
7. lifecycle plan;
8. acceptance criteria.

After editing, report:

1. modified and created files;
2. architecture;
3. merchant settings;
4. Shopify objects;
5. lifecycle handling;
6. accessibility;
7. fidelity decisions;
8. Theme Check result;
9. remaining manual tests;
10. limitations.

## 22. Uncertainty rule

Do not guess about prototype behaviour, Shopify APIs, Dawn event contracts, animation values or mobile behaviour.

Inspect evidence first. If evidence is missing, clearly request the exact file or browser observation needed.

## 23. Current phase

The project is in analysis and architecture mode.

Do not implement theme sections until explicit human approval.

The first Codex task is analysis-only.
