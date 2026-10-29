# Homepage feature audit

## Verification performed
- Next.js production export succeeded for domain root and /kairo-test repository subpath.
- Export check passed: 15 local asset references, prefix consistency, Dutch document language, one h1, review count and navigation structure.
- Browser preview: 1440px desktop visual comparison against reference; no overflow at 1024, 768, 390 or 375px; images loaded at the tested root-page widths.
- Mobile menu opens, focuses first link, closes with Escape and returns focus to trigger.
- Single-review previous/next controls are disabled as intended.
- Repository-subpath page renders; contact CTA expands details and focuses its summary.
- Screenshot captures stored in docs/screenshots/.

| Feature | Status | Evidence / limits |
| --- | --- | --- |
| HP-01 fixed navigation | Implemented, checked | Fixed computed position; mobile open/Escape behavior checked. Full keyboard trap sweep remains. |
| HP-02 hero | Implemented | Supplied image, heading, copy and CTAs; desktop visual review. |
| HP-03 introduction | Implemented | Two-column desktop / stacked mobile; supplied italic. |
| HP-04 services | Implemented | Three supplied images and captions; CSS clipped zoom. Hover animation not measured in browser. |
| HP-05 reviews | Implemented for one review | Genuine quote, background, disabled arrows, 01 / 01. Multiple-review cycling needs genuine records to exercise. |
| HP-06 footer/contact | Partial content | Screenshot layout and pending contact disclosure work. Social/contact/legal destinations still needed. |
| HP-07 typography/fidelity | Implemented for local review | Montserrat and supplied regular/Light Italic. Production font rights remain unconfirmed. Visual approximation, not a pixel-diff pass. |
| HP-08 motion | Implemented; partially verified | CSS zoom/button states and rAF parallax. Reduced-motion branches inspected in source, not exercised through an OS setting. |
| HP-09 responsive/accessibility | Partially verified | Tested widths, image loading, mobile menu and semantic structure. No full screen-reader or contrast audit claimed. |
| HP-10 export/maintenance | Locally verified | Root/subpath builds, export checker and CI workflow. Live GitHub deployment pending connection. |

## Deliberate differences
One review instead of fabricated three. NL is an indicator until translations exist. Contact disclosure adds a small footer line. Navigation uses existing homepage anchors. Social/legal labels are not links. Mobile design is inferred from desktop. Hero crop includes overscan for parallax. No separate pages or form backend are included.
