# Datacenter Capitalinas — Design System

A brand manual reconstructed for **Datacenter Capitalinas**, a server-hosting and fiber-connectivity provider in **Córdoba, Argentina**, operating from inside the **Complejo Capitalinas** office towers (La Cañada). The brand had lain untouched for \~20 years; the only surviving artifact was the logo (a JPG). Everything here is derived from that mark, the live site copy, and the company's positioning.

> **Tagline:** *Innovando en tecnología, Capitalinas Datacenter.* The proveedor número uno en tecnología empresarial del interior del país.

## Sources

- **Logo:** `uploads/logodatacenter-medium.jpg` → `assets/logo-datacenter-capitalinas.jpg` (the wordmark over a vertical sky-portal aperture). The cloud/sky palette was sampled pixel-by-pixel from this file.
- **Website:** https://capitalinasdc.com — headline, subhead and service copy were lifted verbatim (formal Spanish). Social: Facebook / Twitter `@CapitalinasDC` / Foursquare.
- **Context:** Located within Complejo Capitalinas, La Cañada, Córdoba; tenants referenced in site metadata include Intel, Nokia and Telecom.

No codebase, Figma, or font files were provided — the visual foundations below are an informed reconstruction, not an archived spec. See **Caveats**.

---

## CONTENT FUNDAMENTALS

**Language:** Argentine Spanish (rioplatense), formal register.

**Address:** Third-person formal — *usted*. The reader is "su empresa" / "su compañía", never *vos* or *tú*. Example: *"su compañía puede reducir costos de infraestructura…"*

**Tone:** Sober, technical-corporate and quietly aspirational. The brand states capability plainly and lets precise numbers (1 Gbps, 24/7, alta disponibilidad) carry the confidence. It positions itself at the top ("el proveedor número uno") without hyperbole or exclamation.

**Casing:** The wordmark and display headings are **ALL CAPS** (engraved Roman capitals). Body copy is sentence case. Eyebrow labels are uppercase with wide tracking.

**Voice do / don't:**

- ✅ *"Servicios de conectividad en los complejos de oficinas más grandes del interior del país."*
- ✅ *"Entorno controlado y seguro, en un ambiente de alta disponibilidad."*
- ❌ No tuteo, no marketing slang, no exclamation marks, **no emoji**.

**Vocabulary the brand owns:** alojamiento, housing, conectividad, fibra óptica, alta disponibilidad, entorno controlado, racks AAA, UPS, IP, 1 Gbps, infraestructura, TI, negocio medular, complejo.

---

## VISUAL FOUNDATIONS

**The core motif — the portal.** The logo is a tall \~1:2 *aperture* cut into a black field, revealing blue sky and cumulus cloud. This "window to the sky" is the brand's signature device: openness, reach, reliability, the glass towers of the complex reflecting sky. Reuse it to frame heroes, section breaks and figure crops (`assets/portal-motif.jpg`).

**Ground.** The system is **dark-grounded by default** — pure black (`--ink-900`, the logo field) and near-blacks. Light surfaces (white / `--cloud-50`) exist for documents and forms but the canonical brand surface is black.

**Color.** Neutrals run from the black field to cloud-white and carry **almost the entire system**. The sky-blue family (primary `--sky-500 #3368B5`) is the brand accent but is **reserved for buttons / CTAs only** — it is the one thing allowed to be coloured. Everything else (headings, labels, eyebrows, icons, stats, badges, focus states) stays neutral. The photographic sky portal is the exception, as it is the brand mark itself. No purple, no rainbow gradients.

**Type.** **Cinzel is used at weight 400 only, and ONLY for `h1` and the wordmark.** Every other level — h2–h6, body, labels, UI, eyebrows — is **IBM Plex Sans** (no serif). Technical data, specs and figures are **IBM Plex Mono**. **No bold by default:** text is regular (400); medium (500) is used sparingly on buttons/labels, and 600–700 only to *resaltar* (emphasise) a word.

**Spacing & layout.** 4px base grid, generous architectural whitespace, `--container-max` 1200px, `--section-y` 96px rhythm. Calm, ordered, lots of air.

**Corners.** **Square everywhere — no curved corners in any case.** Every `--radius-*` token resolves to `0`: cards, buttons, inputs, badges, even avatars/circles. The portal is a sharp rectangle and so is the whole system.

**Borders & elevation.** On the dark ground, depth comes from **hairline neutral borders** (`rgba(255,255,255,.10–.22)`) and a soft neutral **shadow**. The sky **glow** (`--glow-sky-*`) is reserved for the **primary CTA** on hover — it is not used on cards or other surfaces.

**Cards.** Flat and borderless by default. The canonical feature layout is a **divider grid**: columns separated by hairline gray rules (top + bottom + between), a bare thin-stroke neutral icon, an uppercase mono label, muted-gray body — no fills, no shadows, no rounded corners, no colour (see the "Feature grid" card). The `Card` primitive is likewise flat (hairline border, no shadow).

**Backgrounds.** Black fields, occasionally lifted by a very faint **neutral** radial wash (white at ~4–6% opacity) behind hero/infra content. The only photographic imagery is the sky portal — cool, bright, optimistic blue. No textures, no noise, no full-bleed stock.

**Transparency & blur.** Used sparingly: the sticky nav frosts (`backdrop-filter: blur(12px)`) once scrolled; borders use translucent white.

**Motion.** Calm and minimal. Standard ease is `cubic-bezier(0.22,0.61,0.36,1)` (ease-out), durations 140/240/480ms. Hover = brighten + glow; press = a 1px downward nudge. No bounces, no looping decorative animation. Respect `prefers-reduced-motion`.

**Hover / press states.**

- Primary button (CTA): hover → `--sky-400` + sky glow; press → `translateY(1px)`.
- Secondary/ghost: hover → border & text brighten to neutral white.
- Card (interactive): hover → lift `-2px` + neutral shadow.
- Input: focus → neutral border brightens (`--border-strong`), no colour.

---

## ICONOGRAPHY

The original brand shipped **no icon system** — only the logo and a handful of social PNGs (Facebook, Twitter, Foursquare) survive. There is no icon font, sprite, or SVG set.

**Substitute (flagged):** the UI kit uses **[Lucide](https://lucide.dev)** via CDN — thin, even-stroke line icons that match the system's architectural, technical feel. They are loaded with `<i data-lucide="…">` + `lucide.createIcons()`. Treated as a placeholder until a real icon direction is chosen. **Emoji are never used.** Unicode glyphs are not used as icons.

Keep icons line-only, \~1.5px stroke, **neutral** (muted ink or white) — never coloured — sized 16–26px.

---

## INDEX

**Foundations / tokens** (linked from `styles.css`):

- `tokens/fonts.css` — webfont imports (Cinzel, IBM Plex Sans, IBM Plex Mono)
- `tokens/colors.css` — ink/cloud neutrals + sky palette + semantic aliases
- `tokens/typography.css` — families, scale, weights, tracking
- `tokens/spacing.css` — 4px grid, layout, portal ratio
- `tokens/effects.css` — radii, borders, shadows, sky glow, gradients, motion

**Specimen cards** (`guidelines/cards/`, shown in the Design System tab): Colors (sky · neutrals · semantic), Type (display · body · mono · eyebrows), Spacing (scale · radii), Brand (logo · portal · elevation · voice).

**Components** (`components/core/`): `Button`, `Card`, `Badge`, `Input`, `StatBlock`, `Logo`. Each has `.jsx` + `.d.ts` + `.prompt.md`; the directory card is `core.card.html`.

**UI kit** (`ui_kits/website/`): interactive recreation of the marketing site — see its own `README.md`.

**Assets** (`assets/`): `logo-datacenter-capitalinas.jpg` (original mark), `portal-motif.jpg` (sky aperture cropped from the logo).

**Other:** `SKILL.md` (Agent Skills entry point), `styles.css` (global entry — import this).

---

## CAVEATS

- **Font substitution.** The original wordmark font is unknown. **Cinzel** (Google Fonts) is used as the nearest Trajan-style match. If you have the real logo typeface, drop the files in and update `tokens/fonts.css` + `tokens/typography.css`.
- **Icons substituted** with Lucide (see Iconography).
- **Palette & system are reconstructed** from one low-res JPG + site copy — not an archived brand spec. Colors, spacing and motion are an informed proposal, open to direction.
- **Client references** (Intel/Nokia/Telecom) come from site metadata as complex tenants, shown as muted type — not endorsements. Remove if not desired.
