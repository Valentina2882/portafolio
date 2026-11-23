# Pendientes

Estado en `main` después del squash `556b3eff` (23 de noviembre de 2026, 10:32:01, hora de Colombia).

## Cerrados

### CV

Cerrado en el PR #2. «Descargar CV ↓» enlaza a `/Zarella_Burbano_CV.pdf` con `download`. El archivo es `public/Zarella_Burbano_CV.pdf`. Ya no está «Por confirmar».

### Nota de cuenta demo de AgendaPersonal

Cerrada en el PR #2: se quitó la nota. También se quitó «Código privado» en AgendaPersonal y en Rocky. No hay usuario ni clave de demo en el repo. «Ver app» sigue en [https://agendapersonalz.vercel.app/](https://agendapersonalz.vercel.app/).

## Abiertos

### Limpiar CSS e imágenes de escritorio de ENERCHAIN

La página ya no usa `DeskShot` ni `desk-row`. En `src/` las clases `.desk`, `.desk-row`, `.desk-bar` y `.desk-cap` solo quedan en `src/app/globals.css`.

Los archivos `public/projects/enerchain/03_desktop_inicio.png` y `04_desktop_registro.png` siguen en el repo. `src/` no los nombra. Sí los usa la maqueta `design-ref/terminal-andina-v4.html`, que también conserva su propio CSS `.desk*` y el bloque de escritorio. La app no sirve esa maqueta.

### Revisar la demo de ENERCHAIN

«Ver demo» sigue en [https://mte-frontend.vercel.app/](https://mte-frontend.vercel.app/). Según Desarrollo, el backend de registro de Julian está caído. El PR no lo dice. Hay que revisarlo antes de dar el enlace por bueno.

### Regenerar og.png

`public/og.png` no cambió en el PR #2 ni en el PR #3. `src/app/layout.tsx` lo sigue usando en Open Graph y Twitter (1200×630).

La imagen sigue en el corte viejo: selector «ES / EN», «$ whoami — ingeniera de software · Pasto, Colombia», textos en minúscula (incluido «por confirmar») y el stack «React · Flutter · NestJS · Supabase». La portada ya dice «PHP · MySQL · Flutter», no tiene «ES / EN» ni «Por confirmar», y el CV se descarga.

### Stack viejo de SITI fuera del hero

El PR #3 solo cambió el hero. La frase «React · Flutter · NestJS · Supabase» sigue en:

- `public/og.png`
- `design-ref/terminal-andina-v4.html` (la maqueta; la app no la sirve)

Experiencia no tiene esa frase. El puesto de SITI Soluciones sigue con las pastillas PHP, SQL, Flutter, Dart, React, Gemini AI y HeidiSQL. El texto dice backend con PHP y SQL, apps en Flutter y lectura con Gemini. No dice MySQL. No coincide con la línea nueva del hero.

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
