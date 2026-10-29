# Kairo Creative

Next.js App Router homepage based on the supplied HOME.jpg. Responsive Dutch design with fixed navigation, image hover zoom, scroll parallax, reduced-motion styles and button/focus states.

## Run locally
Requires Node.js 24 and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:3000. For a production export:

```sh
pnpm typecheck
pnpm build
pnpm check:export
```

The static site is generated in out/. It needs a static HTTP server to preview; opening index.html directly is not supported.

## GitHub Pages
Upload the contents of this project directory to the repository root. The workflow expects the main branch. In repository Settings → Pages, choose GitHub Actions. The workflow obtains the correct base path from GitHub, builds and checks the export, then deploys it. No GitHub repository or live deployment has been created in this chat.

To simulate a repository URL locally:

```sh
NEXT_PUBLIC_BASE_PATH=/kairo-test pnpm build
NEXT_PUBLIC_BASE_PATH=/kairo-test pnpm check:export
```

Serve out/ mounted at /kairo-test/. For a custom domain configure it in Pages and rebuild; do not manually add a repository prefix to links.

## Content and future pages
- src/content/home.ts: services, navigation and genuine review content.
- src/app/page.tsx: page composition and footer.
- src/app/globals.css: responsive layout, brand tokens and motion.
- src/components/: navigation, hero parallax, reviews and shared controls.
- public/images/: optimized image variants and tightly cropped transparent logo.
- openspec/changes/add-homepage/: requirements, design and implementation tasks.
- docs/FEATURE-AUDIT.md: verification and remaining work.

Only the homepage is implemented. Work links point to the service examples; About/Services/Contact link to corresponding homepage sections until their separate designs arrive. Contact CTA opens a clear pending-contact notice. Social icons and legal labels remain noninteractive until real destinations/content are supplied. Only one genuine review is used; its controls are intentionally disabled.

The supplied The Seasons DEMO regular and Light Italic files are included for local design review. Confirm permitted web embedding or replace them with suitable production files before public release. Montserrat 500/600 is self-hosted through @fontsource/montserrat (its license is in the installed package). All image originals and screenshot were supplied by the user.

Use the reusable prompt in prompts/build-and-review.md for future changes. Create separate OpenSpec changes for new page screenshots. The homepage change remains active until release inputs and remaining validation are resolved.
