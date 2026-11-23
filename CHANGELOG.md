# Changelog

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).
Las fechas están en hora de Colombia (America/Bogota, UTC-5).

`package.json` sigue en `0.1.0`. Esta bitácora usa la fecha del cambio, no ese número.

## [Sin publicar]

Nada de producto pendiente de fusionar. Lo que falta está en [docs/backlog.md](docs/backlog.md).

## [2026-11-22 19:30]

CV, WhatsApp y botón de volver arriba. Fusionado a `main` a las 19:30:08, squash `1b5ef903` ([PR #2](https://github.com/Valentina2882/portafolio/pull/2)). La cabeza del PR era `3349b566`.

### Añadido

- «Descargar CV ↓» es un enlace a `/Zarella_Burbano_CV.pdf` con `download`. El archivo está en `public/Zarella_Burbano_CV.pdf`.
- Tarjeta de WhatsApp en Contacto, en `src/app/page.tsx`, después del correo. El enlace es un `wa.me` y el texto visible es el número. No se copia aquí.
- Botón «Volver arriba» (`src/components/BackToTop.tsx`). Aparece al bajar más de una pantalla, fijo abajo a la derecha. Sube con scroll suave, o de un salto si el sistema pide menos movimiento. Antes de subir, mueve el foco al logo (`a.logo`).

### Cambiado

- Contacto queda en grilla de dos columnas iguales. Por debajo de 700px pasa a una columna.
- El texto visible de LinkedIn es `/zarella-burbano`. El `href` sigue siendo `https://www.linkedin.com/in/zarella-burbano/`.
- El pie solo tiene «© 2026 Zarella Burbano · Hecho en Pasto, Colombia», centrado (`justify-content: center` y `text-align: center`).

### Eliminado

- «Por confirmar» junto al CV.
- La nota de AgendaPersonal sobre el repositorio privado y la cuenta demo.
- «Código privado» en AgendaPersonal y en Rocky.
- «Falta enlace de demo» en MedFinder. No se agregó una URL.
- «Cifras de ejemplo» en el chat. Los números del ejemplo siguen en la portada, sin esa etiqueta.
- «Build ok · Next.js + Vercel» del pie.

En el CSS quedó `footer .ok`. El pie ya no usa esa clase. La clase `.ok` del chat («Sí te alcanza.») es otra y sigue en uso.

Según Desarrollo, Calidad y Pruebas aprobaron, Zare confirmó el cambio (incluido que el celular sea público) y producción quedó en success. El PR no tiene reviews ni ese texto. El bot de Vercel marcó Ready el preview de la rama a las 19:24, antes del merge.

## [2026-11-22 18:40]

Rediseño «Terminal Andina», fusionado a `main` a las 18:40, squash `b29062e` ([PR #1](https://github.com/Valentina2882/portafolio/pull/1)).

### Añadido

- Cabecera con «Zarella Burbano» y título «Desarrollo aplicaciones para el día a día.». Debajo del nombre, en la portada, va la línea «Ingeniera de software · Pasto, Colombia».
- Secciones con ancla: Proyecto principal (AgendaPersonal), Más proyectos (Rocky, LearnMate AI, ENERCHAIN, MedFinder y Clasificador de cáncer de piel), Experiencia, Educación y logros, Habilidades, Sobre mí y Contacto.
- Capturas en marco de celular para AgendaPersonal, Rocky, LearnMate AI y ENERCHAIN. ENERCHAIN también tiene dos capturas de escritorio. MedFinder y el clasificador no tienen fotos.
- Menú móvil en `src/components/MobileMenu.tsx`, visible por debajo de 700px. Lista las siete secciones, usa `aria-expanded` y `aria-controls`, se cierra con Escape y devuelve el foco al botón.
- Etiqueta «Código privado» en AgendaPersonal y Rocky. Solo AgendaPersonal avisa que el repositorio sigue privado y que falta una cuenta demo.
- Botón de CV deshabilitado (`aria-disabled`) con la etiqueta «Por confirmar». No hay archivo de CV.
- `public/og.png`, usado en Open Graph y Twitter desde `src/app/layout.tsx`. La imagen no coincide con la página actual: todavía muestra «ES / EN», «$ whoami» y textos en minúscula.
- Carpeta `design-ref/` con la maqueta HTML y dos capturas de referencia. La app no la sirve. La maqueta todavía muestra «ES / EN».
- Chat de ejemplo de Agenda Bot, marcado en la página como «Cifras de ejemplo».

### Cambiado

- El sitio ya era una sola ruta (`src/app/page.tsx`). El rediseño la dejó en scroll por anclas y quitó el carrusel Swiper (`swiper` y `src/app/swiper-custom.css`).
- El nombre de la cabecera pasó de «Zarella Burbano Vallejo» a «Zarella Burbano».
- El primer corte del rediseño tenía un texto fijo «ES / EN» (un `span`, sin lógica para cambiar de idioma). El commit de revisión lo quitó. La página queda en español (`<html lang="es">`). En Educación siguen «Español · Nativo» e «Inglés · Básico».
- Habilidades, como listado de terminal. Carpetas en el código: `Lenguajes/`, `Frontend-mobile/`, `Backend-apis/`, `Bases-de-datos/`, `Ia-datos/`, `Blockchain-web3/`, `Devops-herramientas/`.
- El artículo de blockchain quedó en Educación, no como proyecto.
- `next.config.ts` ahora tiene `trailingSlash: true`.

### Eliminado

- De la página anterior: U2Group, Task Manager y Predicción de Precios de Viviendas.
- El enlace de WhatsApp que estaba en la cabecera anterior. En ese corte el sitio quedó sin teléfono. El [corte de las 19:30](#2026-11-22-1930) lo volvió a poner en Contacto.
- Archivos de `public/` que el commit de revisión quitó por no usarse: `Planta arquitectónica.jpeg`, `Tasks.jpeg`, `casa.jpeg`, `hack.jpg`, `logo.png`, `perfilLink.jpg`, y los SVG de la plantilla (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`). En el `main` anterior no estaban referenciados desde el código.
- Variantes de captura que el mismo PR agregó y luego borró: `public/projects/enerchain/01_mobile_inicio_full.png`, `02_mobile_registro_full.png`, `03_desktop_inicio_full.png` y `public/projects/learnmate/best_06_mobile_perfil_v3.png`.
