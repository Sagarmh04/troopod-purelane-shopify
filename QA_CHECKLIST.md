# QA Checklist

## Baseline

- [ ] Original prototype is unchanged.
- [ ] Published theme has not been edited directly.
- [ ] Development uses the development theme.
- [ ] Theme Check baseline is 8 warnings and 0 errors.
- [ ] New warnings are separated from baseline warnings.

## Viewports

Test every mandatory section at:

- [ ] 375 px
- [ ] 390 px
- [ ] 768 px
- [ ] 1024 px
- [ ] 1440 px

At each width verify:

- [ ] section and container dimensions
- [ ] spacing
- [ ] typography
- [ ] colour and gradients
- [ ] blur and shadows
- [ ] radii
- [ ] product scale and placement
- [ ] clipping and overlap
- [ ] responsive order
- [ ] touch targets
- [ ] no horizontal overflow

## Pixel comparison

For each mandatory section:

- [ ] capture original at exact viewport
- [ ] capture Shopify version
- [ ] align scroll position
- [ ] compare side by side
- [ ] overlay where useful
- [ ] check bounding boxes
- [ ] check typography baselines
- [ ] check product proportions
- [ ] document unavoidable differences
- [ ] receive human approval

## Motion comparison

For each animation:

- [ ] record original
- [ ] record Shopify version
- [ ] use same viewport and interaction
- [ ] compare initial state
- [ ] compare trigger
- [ ] compare direction and distance
- [ ] compare duration and delay
- [ ] compare easing
- [ ] compare sequence and overlap
- [ ] compare loop and pause
- [ ] compare layering
- [ ] verify no simplification
- [ ] verify no extra jitter
- [ ] verify no duplication after editor reload

## Hero

- [ ] desktop composition matches
- [ ] mobile composition matches
- [ ] copy and CTAs are editable
- [ ] real Shopify products and prices
- [ ] one-product stage matches
- [ ] two-product stage matches
- [ ] three-product stage matches
- [ ] entrance sequence matches
- [ ] dots match
- [ ] timing matches
- [ ] cleanup works
- [ ] reload does not duplicate
- [ ] reduced-motion mode works separately

## Product grid

- [ ] collection picker works
- [ ] all eight products render
- [ ] titles, media, prices and availability are real
- [ ] product links work
- [ ] Add to Cart works
- [ ] cart drawer or notification works
- [ ] sold-out state is correct
- [ ] no-image fallback is stable
- [ ] long title does not overflow
- [ ] badges use approved data
- [ ] rail/grid behaviour matches
- [ ] no hardcoded commerce data

## Reviews

- [ ] entries are editable
- [ ] blocks add/remove/reorder
- [ ] direction and speed match
- [ ] loop matches
- [ ] keyboard access works
- [ ] reduced motion works
- [ ] no duplicate marquee
- [ ] one-review and maximum-block states are stable

## Combos

- [ ] approved Shopify data model
- [ ] product references and prices work
- [ ] included products are editable
- [ ] savings source is documented
- [ ] missing reference is safe
- [ ] layout and movement match
- [ ] shared snippet is used

## Bundles

- [ ] tiers are editable
- [ ] product selections work
- [ ] price source is correct
- [ ] actions work
- [ ] visual and responsive layout match
- [ ] animation matches
- [ ] missing data is safe
- [ ] shared architecture is used

## Shared effects

- [ ] scene crossfades match
- [ ] water layers match
- [ ] bubbles match
- [ ] parallax matches
- [ ] depth changes match
- [ ] blur and shadows match
- [ ] no effect removed or weakened
- [ ] no effect restaged
- [ ] offscreen handling has no visible jump
- [ ] no accumulating loops, listeners or observers

## Theme editor

Repeat at least three times:

- [ ] add/remove/re-add section
- [ ] reorder section
- [ ] change settings
- [ ] add/remove/reorder blocks

After each cycle:

- [ ] no duplicate timers
- [ ] no duplicate listeners
- [ ] no duplicate observers
- [ ] no duplicate DOM clones
- [ ] no stale state
- [ ] no console errors
- [ ] animation still matches
- [ ] cart still works

## Accessibility

- [ ] logical headings
- [ ] correct button/link semantics
- [ ] keyboard reachability
- [ ] visible focus
- [ ] meaningful labels
- [ ] suitable alt text
- [ ] decorative graphics hidden appropriately
- [ ] no keyboard trap
- [ ] sold-out state communicated
- [ ] valid disabled controls
- [ ] acceptable contrast
- [ ] reduced-motion mode works

## Performance

Using Chrome Performance tools:

- [ ] record original
- [ ] record implementation
- [ ] compare scroll response
- [ ] inspect long tasks
- [ ] inspect layout and style recalculation
- [ ] inspect paint and compositor layers
- [ ] confirm no duplicate intervals
- [ ] confirm no runaway animation frames
- [ ] confirm no expensive repeated query in frame loop
- [ ] confirm no avoidable layout shift
- [ ] confirm intrinsic image sizing
- [ ] confirm no unnecessary dependency

Success means smoother execution with the same visible output.

## Code quality

- [ ] run `shopify theme check`
- [ ] zero new errors
- [ ] zero avoidable warnings
- [ ] inspect `git diff`
- [ ] no unrelated Dawn changes
- [ ] no secrets or password
- [ ] no giant copied prototype
- [ ] no fake commerce data
- [ ] no accidental publishing

## Submission

- [ ] store URL and password ready privately
- [ ] GitHub repository accessible
- [ ] commit history clear
- [ ] metafield/metaobject definitions documented
- [ ] build notes complete
- [ ] AI workflow notes complete
- [ ] gaps stated honestly
- [ ] more-time work stated
