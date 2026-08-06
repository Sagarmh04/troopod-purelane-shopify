| Shopify product title | Local file | Prototype source token | Upload required | Notes |
| --- | --- | --- | --- | --- |
| Purelane Foaming Kitchen Cleaner | `reference/product-media/purelane-foaming-kitchen-cleaner.svg` | `--p-kitchen` | Yes | Extracted from the prototype CSS custom property. Upload manually and set as featured media. |
| Purelane Tap Cleaner & Limescale Remover | `reference/product-media/purelane-tap-cleaner-limescale-remover.svg` | `--p-tap` | Yes | Extracted from the prototype CSS custom property. Upload manually and set as featured media. |
| Purelane Non-Toxic Laundry Detergent | `reference/product-media/purelane-non-toxic-laundry-detergent.svg` | `--p-laundry` | Yes | Extracted from the prototype CSS custom property. Upload manually and set as featured media. |
| Purelane Natural Herbal Floor Cleaner | `reference/product-media/purelane-natural-herbal-floor-cleaner.svg` | `--p-floor` | Yes | Extracted from the prototype CSS custom property. Upload manually and set as featured media. |
| Purelane Non-Toxic Toilet Cleaner | `reference/product-media/purelane-non-toxic-toilet-cleaner.svg` | `--p-toilet` | Yes | Extracted from the prototype CSS custom property. Upload manually and set as featured media. |
| Purelane Gentle Hydrating Handwash | `reference/product-media/purelane-gentle-hydrating-handwash.svg` | `--p-handwash` | Yes | Extracted from the prototype CSS custom property. Upload manually and set as featured media. |
| Purelane Washing Machine Cleaner | `reference/product-media/purelane-washing-machine-cleaner.svg` | `--p-wm` | Yes | Extracted from the prototype CSS custom property. Upload manually and set as featured media. |
| Purelane Organic Dishwash Liquid Gel | None | `--p-dish` | No | Intentionally left without media for the recruiter-required no-image edge case. |

Rules:

- The extracted files are reference-derived product-media candidates.
- They must be uploaded to the matching Shopify products manually.
- The first uploaded media item must become the featured media.
- Product titles, prices and availability must continue to come from Shopify.
- Theme code must not map product handles directly to these local files after they are uploaded.
- The no-image product must use the theme’s branded generic fallback.
