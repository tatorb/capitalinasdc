# Data Center Capitalinas — Sitio web

Landing estática de **Data Center Capitalinas** (Córdoba, Argentina): infraestructura
crítica, redundante y operada todos los días, con venta consultiva (sin precios ni
autoservicio — todo lleva al formulario o a WhatsApp).

Es un **sitio estático** (HTML/CSS/JS, sin servidor ni build step), listo para publicar
en GitHub Pages. Está construido sobre el sistema de diseño de la marca (tokens de color,
tipografía, espaciado y efectos) que vive en `tokens/` y se enlaza desde `styles.css`.

## Estructura

```
index.html        — la landing (una sola página, scroll largo)
styles.css        — entry point del CSS: sólo @imports a tokens/
tokens/           — fundaciones del sistema de diseño (CSS custom properties)
  fonts.css       —   webfonts (Cinzel 400 + IBM Plex Sans/Mono vía Google Fonts)
  colors.css      —   paleta (neutros + azul cielo de marca) y alias semánticos
  typography.css  —   familias, escala, pesos, tracking
  spacing.css     —   grilla de 4px, contenedores, ritmo de secciones
  effects.css     —   radios (todos en 0), bordes, sombras, glow, gradientes, motion
assets/           — logo y motivo "portal" de la marca
.nojekyll         — evita el procesamiento Jekyll en GitHub Pages
project/          — bundle de diseño original (fuente de verdad: specimens, componentes
                    React, guidelines, SKILL.md). No se publica; queda como referencia.
chats/            — transcripts del proceso de diseño.
```

## Reglas de marca aplicadas

- **Neutral por defecto.** El azul de marca (`--sky-500`) se reserva para CTAs y para el
  bloque de contacto invertido (fondo acento, texto negro, inputs blancos).
- **Esquinas rectas siempre** (todos los `--radius-*` son `0`).
- **Cinzel 400 sólo en el H1** (y el wordmark). El resto usa IBM Plex Sans.
- **Sin bold por defecto** — peso 400; 500 en botones; 600/700 sólo para resaltar.
- **Cards = grilla con divisores grises** (sin rellenos, sombras ni color), bordes neutros.
- Copy en **voseo**, tono formal-cercano.

## Ver en local

Es estático, así que cualquier servidor estático sirve. Por ejemplo:

```bash
python3 -m http.server 8000
# luego abrí http://localhost:8000
```

(También se puede abrir `index.html` directo en el navegador; sólo las webfonts y los
íconos Lucide necesitan conexión a internet.)

## Publicar en GitHub Pages

1. Subí el repo a GitHub.
2. En **Settings → Pages**, elegí *Deploy from a branch* → rama `main` → carpeta `/ (root)`.
3. Para usar el dominio `capitalinasdc.com`, agregá un archivo `CNAME` con esa línea y
   apuntá el DNS según la guía de GitHub Pages (custom domains).

`.nojekyll` ya está incluido para que se sirvan todos los archivos tal cual.

## Pendientes de contenido (placeholders)

Marcados en `index.html` con `TODO(asset)` / `TODO(content)` y bloques visibles:

- Fotos reales del data center (hero) y del equipo (sección "Quiénes somos").
- Logo de **CARGO** (sección "Caso real") y confirmación del texto del caso.
- **Número de WhatsApp** en el link `wa.me/<número>`.
- **Dirección** del data center en el footer.

## Fuentes e íconos (sustituciones)

- **Cinzel** (Google Fonts) sustituye la tipografía original del wordmark, hoy desconocida.
- **IBM Plex Sans / Mono** para UI/body y datos técnicos.
- Íconos vía **Lucide** (CDN), como sustituto documentado — la marca no tenía set propio.
