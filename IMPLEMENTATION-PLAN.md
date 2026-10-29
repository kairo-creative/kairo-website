# Kairo Creative — implementation plan

Status: proposed homepage; no application or deployment has been created.

## Scope
Recreate HOME.jpg as a responsive Next.js homepage. Preserve Dutch copy, warm photography, cream/espresso palette, editorial typography, thin separators, generous spacing and italic emphasis. Implement fixed navigation, image hover zoom, hero scroll parallax and button states. Later screenshots define later pages.

## Delivery sequence
1. Initialize Next.js App Router and TypeScript; pin supported stable dependencies and commit a lockfile. Use CSS Modules, global design tokens, and small client components for interactions.
2. Import reference and supplied assets; record original filenames in an asset manifest. Generate optimized responsive image variants without overwriting originals. Keep the reference outside production assets.
3. Establish shared typography, colors, spacing, header and footer. Use Montserrat Medium (500) for body text and The Seasons for headings. Obtain a suitable web font before production embedding: the supplied heading font is a DEMO file, and a Light Italic DEMO file is now supplied. Document temporary fallbacks.
4. Implement the six homepage sections in screenshot order, first at desktop size, then responsive layouts.
5. Add accessible interactions and reduced-motion behavior.
6. Compare screenshots; run type checks, production build, focused behavior tests and static-host checks.
7. Once GitHub is connected, add the code and planning documents to the repository, configure GitHub Pages deployment, and verify the live URL.

## Architecture
- src/app/layout.tsx: shared shell, Dutch language, fonts and metadata.
- src/app/page.tsx: homepage composition.
- src/components/: SiteHeader, MobileMenu, Hero, Intro, ServiceGrid, ServiceCard, ReviewCarousel, ContactFooter, ArrowLink.
- src/content/home.ts: typed copy, services, genuine testimonials and destinations.
- src/styles/: design tokens and global styles; component CSS Modules.
- public/images/ and public/fonts/: distributable production assets.
- reference/HOME.jpg; docs/asset-manifest.md; openspec/; prompts/.
- .github/workflows/pages.yml: build and deployment.

Keep content statically rendered; add client boundaries only for menu, reviews and parallax. Prefer CSS transitions and requestAnimationFrame over a large animation library.

## Screenshot measurements and layout
Original reference: 1440 × 2582. Approximate vertical bands: navigation 90px, hero 810px, introduction 300px, services 610px, reviews 450px, footer 320px. Use these as desktop starting measurements, not rigid heights across devices. Main gutters are approximately 6.7vw. Initial palette estimates: espresso #24160F, cream #F6F1E9, taupe #A48C73; sample and refine against the original.

Desktop: centered navigation with logo left and NL control right; full-width hero with left copy; two-column introduction; three equal image cards; review copy left and controls right; wide footer CTA and lower link/social rows.

Mobile/tablet design is inferred: accessible menu button, stacked introduction and cards, fluid display sizes, stacked footer, repositioned review controls, readable hero copy and intentional image crop. Verify 1440, 1024, 768, 390 and 375px widths. No horizontal scrolling.

## Asset mapping
Source directory: /Users/JMS/Downloads/Designed by JMS/Kairo Creative /Rebranding/img/
Reference: /Users/JMS/Downloads/Designed by JMS/Kairo Creative /Rebranding/website/HOME.jpg
Font: /Users/JMS/Library/Fonts/Fontspring-DEMO-theseasons-reg.otf (duplicate in Downloads/Demo_Fonts).

| Supplied file | Role | Match |
| --- | --- | --- |
| hero foto home.jpg | Hero | Newly supplied reference-matching scene; primary hero. |
| home-hero.png | Reserve | Superseded for this homepage. |
| Unknown-52.png | Branding card | Tablet scene matches. |
| Unknown-54.png | Creative Direction card | Laptop scene matches. |
| client review.jpg | Reviews | Newly supplied books-and-pen background. |
| mockup golden.jpg | Design card | Newly supplied shopping-website tablet image. |
| Kairo Creative monogram logo - creme 2.png | Header logo | Supplied cream monogram; inspect transparency and trim empty margins for display. |
| Fontspring-DEMO-theseasons-ltit.otf | Heading emphasis | Supplied Light Italic; pair with regular, preserving its actual weight. |
| Unknown-203.png | Reserve | Superseded for homepage reviews. |
| Unknown-51.png, Unknown-53.png, Unknown-49.png | Reserve for later pages | Do not add homepage sections to use every image. |
| kernwaarden.png | Reserve for later pages | Not shown on homepage. |

Remaining inputs: Montserrat Medium font file; two other reviews; social URLs; contact destination; legal page content; translations. All main homepage images and the monogram are now supplied. Use documented font fallbacks only where needed during development. Never fabricate reviews, URLs, or unpublished page designs. Obtain permitted web-font files before publicly committing the supplied demo font.

## Interaction design
- Header: fixed, full-width, solid dark background; reserve its height and set scroll-margin for anchors. Mobile menu supports Escape, focus handling, expanded state and closing after selection.
- Hero: image moves about 0–40px on desktop scroll; copy stays stationary. Overscan and clipping prevent exposed edges. requestAnimationFrame updates stop offscreen. Disable parallax for reduced motion and small touch layouts.
- Cards: image scale 1 → 1.04 over about 450ms within clipped wrapper; text does not move. Hover only on hover-capable devices; keyboard focus has a clear equivalent state.
- Buttons: color/border transitions over 180–250ms, optional 4px arrow shift, visible focus and active state.
- Reviews: previous/next cycle real records and synchronize quote, author and counter; accessible announcement, no auto-rotation. Only one review is supplied: show 01 / 01 with disabled arrows until genuine additional reviews arrive.
- Language: show NL as current language until a second language exists; no inert dropdown presented as functional.

Intended future destinations: /, /services/, /work/, /about/, /contact/. For homepage-only development, use anchors for existing sections and clearly unavailable noninteractive labels for destinations without content. Never ship dead links or empty placeholder pages. Confirm social/contact/legal destinations before release.

## GitHub Pages hosting
Assumption: “host on GitHub” means GitHub Pages. Configure output: 'export', trailingSlash: true, and build-time basePath '/repository-name' for project hosting; use empty basePath for a user site or custom domain. Ensure images, CSS background URLs, fonts and icons respect that prefix. Next Link handles its prefix; avoid double-prefixing it.

Use pre-generated responsive images or next/image with unoptimized: true; Pages cannot run the default server image optimizer. No runtime API, server action or contact backend is required for this phase. Future forms need an external endpoint or different hosting.

GitHub Actions: install from lockfile, check types, run focused tests, build out/, upload Pages artifact and deploy to the github-pages environment. Use a supported Node version compatible with selected Next.js, minimal permissions including pages:write and id-token:write for deployment, and deployment concurrency. Configure repository Pages source as GitHub Actions. Verify both root and repository-subpath builds, asset loading, route reloads and the actual live URL.

## Validation and ongoing changes
Capture desktop at 1440px with fonts loaded, no hover and scroll at top. Compare against HOME.jpg section by section: headline wraps, crop, color, spacing, service overlays, review composition and footer alignment. Record missing-asset differences rather than claiming exact parity.

Test keyboard navigation, mobile menu, fixed-header overlap, reduced motion, card clipping, review bounds, touch behavior, all links, console errors and image/font requests. Add focused browser tests for interactive behavior and repository-subpath loading. Check types and production export. Do not mark tasks complete without evidence.

Keep changes in Git: new screenshot → OpenSpec proposal/spec/design/tasks → implementation → validation → reviewable PR → merge and archive. Copy this pack into the future repository root. Proposed requirements remain under changes; after implementation, merge them into openspec/specs/homepage/spec.md and archive the change. This preserves context beyond any one chat.

## References
- [Next.js static export](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)
- [GitHub Pages workflows](https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically)
- [OpenSpec structure](https://github.com/Fission-AI/OpenSpec/blob/main/docs/getting-started.md)

## Asset intake update
The newly supplied hero, review background, Design card, monogram and Light Italic font replace the earlier missing-asset assumptions. See docs/asset-manifest.md for portable copies and metadata. Font presence does not establish web embedding rights. Planning remains separate from application implementation.
