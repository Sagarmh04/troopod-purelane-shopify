# Implementation Plan

## Phase 0 — Baseline

Completed:

- Development store created
- Dawn installed
- Shopify CLI authenticated
- Local development theme running
- GitHub repository created
- Clean Git baseline pushed
- Eight-product catalogue created
- `purelane-bestsellers` collection created
- Sold-out, no-image and long-title cases verified
- Fresh Dawn Theme Check baseline recorded

No theme implementation begins before analysis approval.

## Phase 1 — Read-only analysis

Codex must produce, in its response only:

1. complete prototype section map;
2. mandatory-section source map;
3. visual token inventory;
4. responsive behaviour inventory;
5. complete motion inventory;
6. animation timing and trigger inventory;
7. hardcoded-commerce audit;
8. reusable-component inventory;
9. performance bottleneck analysis;
10. Dawn integration map;
11. Shopify data-model recommendation;
12. proposed file architecture;
13. incremental implementation tasks;
14. risks and unknowns.

No file changes are allowed.

## Phase 2 — Reference capture

Before implementing each mandatory section:

- capture the original at required viewport widths;
- record layout measurements where practical;
- record animation timing, delays, sequence and triggers;
- record desktop and mobile states;
- note prototype defects separately from intended behaviour.

The original HTML must remain unchanged.

## Phase 3 — Architecture approval

Approve before coding:

- new files;
- Dawn files to reuse;
- Dawn files to modify;
- schemas and blocks;
- metafields or metaobjects;
- shared snippets;
- CSS strategy;
- JavaScript controller strategy;
- theme-editor lifecycle;
- cart integration.

## Phase 4 — Shared foundation

Create only the minimum shared foundation needed by the five sections:

- scoped design tokens;
- typography strategy;
- shared containers and headings;
- glass and button primitives;
- product media fallback;
- price wrapper;
- section-controller utilities;
- common motion infrastructure.

Acceptance:

- no unrelated Dawn changes;
- scoped selectors;
- no perceptible motion changes;
- no new Theme Check errors;
- editor reload does not duplicate handlers.

## Phase 5 — Shop / product grid

Implement first to prove Shopify commerce integration.

Requirements:

- collection-driven products;
- real titles, images, prices and availability;
- working cart action;
- sold-out handling;
- no-image fallback;
- long-title stability;
- prototype card layout and motion;
- responsive rail/grid behaviour;
- merchant-selectable content.

Acceptance:

- all eight products render;
- no hardcoded commerce values;
- cart works;
- edge cases pass;
- visual parity at 375, 390, 768, 1024 and 1440;
- motion parity passes;
- editor reload is safe;
- Theme Check adds no errors.

## Phase 6 — Hero

Implement:

- exact desktop and mobile composition;
- merchant-editable text and CTAs;
- real selected products and prices;
- one-, two- and three-product stages;
- exact sequencing, delays, easing and looping;
- dots;
- correct layering;
- theme-editor-safe rotation.

Acceptance:

- stages, timing and motion match;
- no duplicate timer after reload;
- Shopify data is real;
- reduced motion works separately;
- visual and motion parity pass.

## Phase 7 — Reviews rail

Implement:

- merchant-managed review entries;
- exact rail design and movement;
- keyboard and focus handling;
- reduced-motion alternative;
- safe editor lifecycle.

Acceptance:

- blocks add/remove/reorder safely;
- loop matches;
- no duplicate marquee;
- visual and motion parity pass.

## Phase 8 — Best-selling combos

Implement:

- approved Shopify data model;
- real product references and prices;
- included-product data;
- prototype card and rail behaviour;
- reusable combo snippet;
- missing-reference handling.

Acceptance:

- no fake commerce data;
- merchant can manage entries;
- layout and motion match;
- Theme Check passes.

## Phase 9 — Bundles

Implement:

- prototype bundle tiers;
- approved product representation;
- real pricing;
- merchant-editable labels and selections;
- working action;
- shared media and price components;
- responsive behaviour.

Acceptance:

- data is editable and correct;
- layout and motion match;
- architecture is reused;
- Theme Check passes.

## Phase 10 — Shared scene system

Implement only the visual context required by mandatory sections.

Preserve:

- scene transitions;
- water layers;
- bubbles;
- depth changes;
- parallax;
- fixed-layer behaviour;
- normal-mode timing and intensity.

Optimize only internal execution.

Acceptance:

- scene positions and timing match;
- no accumulating loops or observers;
- no perceptible change;
- offscreen handling creates no jump;
- mobile execution is smooth.

## Phase 11 — Homepage assembly

Minimally update the homepage template.

- Add five sections
- Configure defaults
- Preserve merchant reordering
- Avoid hardcoded section IDs in JavaScript
- Retain Dawn header/footer unless approved fidelity work requires scoped changes

## Phase 12 — Full QA

Run `QA_CHECKLIST.md`.

Also:

- compare original and Shopify screenshots;
- compare animation recordings;
- use Chrome Performance tools;
- test editor lifecycle repeatedly;
- test cart behaviour;
- verify console;
- compare Theme Check with baseline.

## Phase 13 — Documentation

Create:

- `docs/BUILD_NOTES.md`
- `docs/AI_WORKFLOW_NOTES.md`
- metafield/metaobject notes
- final README instructions
- known limitations
- more-time notes

Do not publish without explicit human approval.
