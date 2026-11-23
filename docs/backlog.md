# Pendientes

Estado en `main` después del squash `1b5ef903` (22 de noviembre de 2026, 19:30:08, hora de Colombia).

## Cerrados

### CV

Cerrado en el PR #2. «Descargar CV ↓» enlaza a `/Zarella_Burbano_CV.pdf` con `download`. El archivo es `public/Zarella_Burbano_CV.pdf`. Ya no está «Por confirmar».

### Nota de cuenta demo de AgendaPersonal

Cerrada en el PR #2: se quitó la nota. También se quitó «Código privado» en AgendaPersonal y en Rocky. No hay usuario ni clave de demo en el repo. «Ver app» sigue en [https://agendapersonalz.vercel.app/](https://agendapersonalz.vercel.app/).

## Abiertos

### Regenerar og.png

`public/og.png` no cambió en el PR #2. `src/app/layout.tsx` lo sigue usando en Open Graph y Twitter (1200×630).

La imagen sigue en el corte viejo: selector «ES / EN», «$ whoami — ingeniera de software · Pasto, Colombia» y textos en minúscula, incluido «por confirmar». La página ya no tiene «ES / EN» ni «Por confirmar», y el CV se descarga.

### Etiquetas de Habilidades

Sin cambio en el PR #2. `skills` en `src/app/page.tsx` sigue en `Ia-datos/` y `Devops-herramientas/`.

No coinciden con `IA-datos/` ni con `DevOps-herramientas/`. El commit del rediseño las llama nombres oficiales. No hay un TODO en el código.

El resto: `Lenguajes/`, `Frontend-mobile/`, `Backend-apis/`, `Bases-de-datos/`, `Blockchain-web3/`.

### Probar en iPhone

Según Desarrollo, no se probó en un iPhone. El PR #2 tampoco lo dice. El menú, la grilla de contacto y el pie en una columna entran por debajo de 700px (`src/app/globals.css`).

### Homepage del repo en GitHub

La ficha del repo, leída en el PR #2, sigue en [https://portafolio-psi-two-22.vercel.app](https://portafolio-psi-two-22.vercel.app). El código usa [https://portafoliozare.vercel.app/](https://portafoliozare.vercel.app/) (`metadataBase` en `src/app/layout.tsx`).

### Enlace de demo de MedFinder

No cerrado. Se quitó el texto «Falta enlace de demo» y no se puso una URL. MedFinder sigue sin demo y sin capturas.

### Etiqueta del chat

El PR #2 quitó «Cifras de ejemplo». Los números del ejemplo siguen en la portada, sin esa etiqueta. El código no dice si hay que volver a marcarlos o cambiarlos.
