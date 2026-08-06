# Theme Check Baseline

Command: `shopify theme check`

Untouched Dawn result:

- Files inspected: 169
- Total offences: 8
- Errors: 0
- Warnings: 8

Accepted baseline warnings:

1. `layout/password.liquid`
   - `UndefinedObject`
   - `scheme_classes`

2. `layout/theme.liquid`
   - `UndefinedObject`
   - `scheme_classes`

3. `sections/main-article.liquid`
   - `VariableName`
   - `anchorId`

4. `sections/main-list-collections.liquid`
   - `VariableName`
   - `moduloResult`

5. `sections/main-product.liquid`
   - `UnusedAssign`
   - `seo_media`
   - `UndefinedObject`
   - `offset: continue`

6. `sections/main-search.liquid`
   - `UnusedAssign`
   - `product_settings`

7. `snippets/quick-order-product-row.liquid`
   - `OrphanedSnippet`

Do not modify unrelated Dawn files solely to remove these warnings.

All later Theme Check output must be compared with this baseline.

New work must introduce:

- zero errors;
- zero avoidable warnings in new files;
- no unexplained increase in the warning count.
