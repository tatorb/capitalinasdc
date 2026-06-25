# Website UI kit — Datacenter Capitalinas

Interactive, single-page recreation of the marketing site (capitalinasdc.com), rebuilt on the design system.

## Files
- `index.html` — orchestrates the page; loads `_ds_bundle.js`, exposes primitives as globals, mounts the sections, handles smooth section nav and the contact-form submit.
- `Nav.jsx` — sticky header, frosts on scroll, anchor nav + CTA.
- `Hero.jsx` — sky-portal hero, headline "Innovando en tecnología", key stats.
- `Sections.jsx` — `Services`, `Infrastructure`, `Complejo` (the office complex + tenant references).
- `Contact.jsx` — `Contact` (request-access form with success state) and `Footer`.

## Composition
Section components consume the bundled primitives (`Button`, `Card`, `Badge`, `Input`, `StatBlock`, `Logo`) read from `window.DatacenterCapitalinasDesignSystem_239a4b`. They register themselves on `window` (no ES exports) so the in-browser Babel transformer can share them across `<script type="text/babel">` tags.

## Notes
- Copy is taken from the live site; tone is formal Spanish (usted).
- Icons are **Lucide** (CDN) — a documented substitute; the original brand shipped no icon set.
- The portal imagery uses `assets/portal-motif.jpg`, cropped from the logo.
