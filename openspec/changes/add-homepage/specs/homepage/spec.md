# Homepage delta specification

Status: proposed. Screenshot-derived requirements and explicitly requested interactions; mobile behavior and motion values are design decisions documented in IMPLEMENTATION-PLAN.md.

## ADDED Requirements

### Requirement: HP-01 Fixed navigation
The homepage SHALL show a fixed espresso header with the supplied cream KO monogram at left, HOME, SERVICES, WORK, ABOUT, CONTACT centrally, and an outlined rounded NL indicator at right. Navigation text SHALL be uppercase with generous letter spacing. Content SHALL not be obscured by the fixed header.

#### Scenario: Desktop scrolling
- **WHEN** the visitor scrolls the homepage
- **THEN** the header remains visible and anchor targets clear its height.

#### Scenario: Mobile navigation
- **WHEN** the visitor opens the mobile menu
- **THEN** destinations are keyboard accessible, expanded state is announced, Escape closes it, focus returns to the trigger on dismissal, and selecting an available destination closes it.

### Requirement: HP-02 Hero
The hero SHALL use hero foto home.jpg with a carefully tuned cover crop and dark treatment for legible cream text. It SHALL contain the eyebrow “KAIRO CREATIVE AGENCY”, the display heading “Creativity in God’s Timing.” on the reference's two lines at desktop, and the copy “Wij brengen merken tot leven met doordacht design, creative direction en visuele storytelling.” It SHALL include a cream filled “BEKIJK ONS WERK” CTA and an outlined “ONZE SERVICES” CTA with right arrows.

#### Scenario: Hero rendering
- **WHEN** the desktop page loads
- **THEN** copy sits left over the warm photograph, image dimensions reserve space, and the heading, body and two buttons follow the reference hierarchy.

### Requirement: HP-03 Introduction
A cream section SHALL show “Ontworpen met intentie. Gebouwd voor impact.” as a large left heading with italic “impact.” The right column SHALL contain “Kairo Creative is een branding- en designbureau dat merken helpt hun visie tot leven te brengen. Met strategisch denken, creatieve direction en een duidelijke visuele identiteit creëren we merken die impact maken en blijven hangen.” and a “LEES VERDER” arrow link. Exact wording SHALL be checked against the original reference during visual review.

#### Scenario: Responsive introduction
- **WHEN** the viewport narrows
- **THEN** the two columns stack in reading order without clipping the heading or copy.

### Requirement: HP-04 Services
The services section SHALL have three equal desktop image cards with thin cream dividers, dark lower text overlays and the “ONZE DIENSTEN” label near the top-left of the first card. It SHALL show these numbered entries and a “LEES VERDER” arrow on each:
1. 01 BRANDING — Strategie · Visuele Identiteit · Logo’s · Brand Systemen.
2. 02 DESIGN — Grafische Vormgeving · Packaging · Print · Digitaal.
3. 03 CREATIVE DIRECTION — Concept · Art direction · Visuele storytelling · Campagnes.
Use Unknown-52.png for Branding and Unknown-54.png for Creative Direction. Use mockup golden.jpg for Design.

#### Scenario: Card hover and focus
- **WHEN** an available service card is hovered on a hover-capable device or keyboard focused
- **THEN** its image receives a subtle clipped zoom or equivalent focus treatment, text remains stable, and no layout shift occurs.

### Requirement: HP-05 Reviews
The review section SHALL show “KLANTEN REVIEW”, “Vertrouwen in creatie.” with italic “creatie.”, the quote below, a short rule, “GOLDEN ANGEL SOCIETY” and “ONDERNEMER”. The supplied quote is: “De samenwerking met Kairo Creative was zo fijn. Er wordt echt met je meegedacht en alles is tot in detail verzorgd. Mijn merk voelt nu echt als mij. Professioneel, creatief en heel betrokken!” The section SHALL use client review.jpg as its light photographic background with shadows, books and pen. Circular previous/next controls and a zero-padded count SHALL sit to the right at desktop.

#### Scenario: Only one supplied review
- **WHEN** only the supplied review exists
- **THEN** the counter is 01 / 01 and arrows are disabled; no reviews are fabricated to reproduce 01 / 03.

#### Scenario: Additional genuine reviews
- **WHEN** multiple genuine records exist and an arrow is activated
- **THEN** quote, author, role and count change together, wrap at either end, and the update is announced without moving keyboard focus.

### Requirement: HP-06 Contact and footer
The espresso footer SHALL show “KLAAR OM SAMEN TE WERKEN?”, “Samen jouw visie versterken.” with italic “versterken.”, an outlined “NEEM CONTACT OP” arrow CTA, a thin divider, HOME/ABOUT/SERVICES/WORK/CONTACT navigation, Instagram/TikTok/LinkedIn icons, “© 2026 Kairo Creative Agency. Alle rechten voorbehouden.” and “Privacy · Algemene voorwaarden”. Icons SHALL have accessible names; destinations SHALL use supplied URLs only.

#### Scenario: Unprovided destinations
- **WHEN** a destination or future page is unavailable
- **THEN** development uses a documented noninteractive availability state or a valid relevant homepage anchor, never an empty href, guessed URL or dead link; unresolved launch destinations are reported.

### Requirement: HP-07 Typography and visual fidelity
Body text SHALL use Montserrat Medium 500. Display headings SHALL use The Seasons with true italic emphasis when suitable font files are available. The supplied regular font and Light Italic font SHALL be mapped to their actual styles and weights; synthetic italic SHALL not replace the supplied italic. Production web-font status SHALL be documented. The supplied cream monogram SHALL be used without redrawing it, preserving its aspect ratio and removing excess transparent margins from its display area. Page sections, crops, colors, line breaks and spacing SHALL be compared against the original 1440 × 2582 reference.

#### Scenario: Asset limitations
- **WHEN** an exact font, logo or image is unavailable
- **THEN** development continues with an explicit substitution record and the final review identifies the visual difference.

### Requirement: HP-08 Motion and controls
The hero image SHALL have subtle scroll-linked parallax with stationary copy, clipped overscan and offscreen update suspension. Buttons SHALL have hover, focus-visible and active states; arrows may move subtly. Motion SHALL not be necessary to discover or read content.

#### Scenario: Reduced motion
- **WHEN** prefers-reduced-motion is enabled
- **THEN** parallax, animated zoom and optional entrance effects are disabled while all content and controls remain usable.

### Requirement: HP-09 Responsive accessibility
The homepage SHALL use semantic header/nav/main/section/footer structure, one h1, meaningful heading order, descriptive image alternatives where needed and empty alternatives for decorative images. It SHALL provide visible keyboard focus, a skip link, readable contrast and touch targets of at least 44px for principal controls. Dutch SHALL be the document language. Mobile layouts SHALL stack content without horizontal overflow.

#### Scenario: Viewport and keyboard checks
- **WHEN** tested at 1440, 1024, 768, 390 and 375px widths and with keyboard-only interaction
- **THEN** content stays readable, controls stay reachable, image crops remain intentional, and the fixed header does not cover focused content.

### Requirement: HP-10 Static export and maintainability
The homepage SHALL export through Next.js for GitHub Pages with correctly prefixed links, images, fonts and CSS assets. It SHALL not depend on a runtime Next.js server or default server image optimization. Shared shell and typed content SHALL support later pages. NL SHALL remain an honest current-language indicator until translations are implemented.

#### Scenario: Release verification
- **WHEN** the production export is served at both a domain root and a repository subpath
- **THEN** navigation and assets resolve, reloads work for built routes, type checks and build pass, and interactive behavior tests pass.

#### Scenario: Deployment
- **WHEN** a connected repository deploys via GitHub Actions
- **THEN** it publishes the verified static artifact to Pages and the live URL is smoke-tested before deployment is reported as verified.
