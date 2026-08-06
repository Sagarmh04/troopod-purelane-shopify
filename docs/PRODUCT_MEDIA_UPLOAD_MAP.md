| Shopify product title | Local file | Prototype source token | Upload required | Notes |
| --- | --- | --- | --- | --- |
| Purelane Foaming Kitchen Cleaner | `reference/product-media/purelane-foaming-kitchen-cleaner@2x.png` | `--p-kitchen` | No | PNG manually converted from the extracted prototype artwork and successfully uploaded to the matching Shopify product as native media. |
| Purelane Tap Cleaner & Limescale Remover | `reference/product-media/purelane-tap-cleaner-limescale-remover@2x.png` | `--p-tap` | No | PNG manually converted from the extracted prototype artwork and successfully uploaded to the matching Shopify product as native media. |
| Purelane Non-Toxic Laundry Detergent | `reference/product-media/purelane-non-toxic-laundry-detergent@2x.png` | `--p-laundry` | No | PNG manually converted from the extracted prototype artwork and successfully uploaded to the matching Shopify product as native media. |
| Purelane Natural Herbal Floor Cleaner | `reference/product-media/purelane-natural-herbal-floor-cleaner@2x.png` | `--p-floor` | No | PNG manually converted from the extracted prototype artwork and successfully uploaded to the matching Shopify product as native media. |
| Purelane Non-Toxic Toilet Cleaner | `reference/product-media/purelane-non-toxic-toilet-cleaner@2x.png` | `--p-toilet` | No | PNG manually converted from the extracted prototype artwork and successfully uploaded to the matching Shopify product as native media. |
| Purelane Gentle Hydrating Liquid Handwash | `reference/product-media/purelane-gentle-hydrating-handwash@2x.png` | `--p-handwash` | No | PNG manually converted from the extracted prototype artwork and successfully uploaded to the matching Shopify product as native media. |
| Purelane Plant-Based Washing Machine Deep Cleaner and Hard-Water Descaler Tablets for Front-Load and Top-Load Machines | `reference/product-media/purelane-washing-machine-cleaner@2x.png` | `--p-wm` | No | PNG manually converted from the extracted prototype artwork and successfully uploaded to the matching Shopify product as native media. |
| Purelane Organic Dishwash Liquid Gel | None | `--p-dish` | No | Intentionally left without media for the recruiter-required no-image edge case. |

Rules:

- The extracted files were used as source artwork for manually converted `@2x.png` product-media reference artefacts.
- The matching PNGs were successfully uploaded to the corresponding Shopify products as native media.
- The first uploaded Shopify media item must remain the featured media.
- Product titles, prices and availability must continue to come from Shopify.
- Theme code must render Shopify product media and must not map product handles directly to these local reference files.
- The no-image product must use the theme's branded generic fallback.
- The local `reference/product-media/*.png` files are reference artefacts only and must not be loaded directly by theme code.
