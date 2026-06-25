Brand lockup — the engraved Cinzel wordmark beside/over a sky-gradient portal. Scales and recolours, unlike the flat logo asset.

```jsx
<Logo layout="stacked" size={72} tone="light" />
<Logo layout="horizontal" size={48} />
<Logo layout="wordmark" tone="dark" />
```

`layout`: `stacked` (portal above wordmark, like the original), `horizontal`, `wordmark` (type only). `tone`: `light` for dark grounds, `dark` for white. Pass `portalSrc` to use the photographic aperture (`assets/portal-motif.jpg`). For pixel-exact original art, embed `assets/logo-datacenter-capitalinas.jpg` directly.
