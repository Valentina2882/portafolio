# Portafolio de Zarella Burbano

Sitio personal de Zarella Burbano, ingeniera de software en Pasto, Colombia. Muestra proyectos, experiencia, educación, habilidades y contacto.

Es una sola ruta: `src/app/page.tsx`. La página se recorre con scroll y anclas. Antes del rediseño también había una sola ruta; lo que cambió es el diseño (se quitó el carrusel) y el contenido.

Producción, según Desarrollo: [https://portafoliozare.vercel.app/](https://portafoliozare.vercel.app/). Esa misma URL está en `metadataBase` de `src/app/layout.tsx`.

El rediseño «Terminal Andina» se fusionó a `main` el 22 de noviembre de 2026 a las 18:40 (hora de Colombia, UTC-5), squash `b29062e`. El mismo día, a las 19:30:08, entró el squash `1b5ef903` ([PR #2](https://github.com/Valentina2882/portafolio/pull/2)): CV descargable, WhatsApp, pie centrado y botón de volver arriba. El 23 de noviembre de 2026, a las 09:00:50, el squash `7215d70f` ([PR #3](https://github.com/Valentina2882/portafolio/pull/3)) dejó la línea de SITI Soluciones en la portada como «PHP · MySQL · Flutter». Se edita en el hero de `src/app/page.tsx`. Ver [CHANGELOG.md](CHANGELOG.md).

## Stack

Versiones declaradas en `package.json` y las que fija `package-lock.json` (lo que se instala):

| Paquete | package.json | package-lock.json |
| --- | --- | --- |
| next | ^15.3.4 | 15.5.9 |
| react | ^19.0.0 | 19.1.0 |
| react-dom | ^19.0.0 | 19.1.0 |
| tailwindcss | ^4 | 4.1.8 |
| typescript | ^5 | 5.8.3 |

También: ESLint 9 (`npm run lint` usa `next lint`) y las fuentes Space Grotesk y JetBrains Mono, cargadas con `next/font` en `src/app/layout.tsx`.

Next 15.5.9 pide Node `^18.18.0 || ^19.8.0 || >= 20.0.0`.

`next.config.ts` tiene `trailingSlash: true`. El PR no explica por qué.

## Cómo correrlo

```bash
npm install
npm run dev
```

`npm run dev` ejecuta `next dev --turbopack`. Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
npm run lint
```

No hay script de tests ni carpeta de pruebas.

## Estructura

```
src/app/page.tsx          todo el contenido
src/app/layout.tsx        metadatos, idioma y fuentes
src/app/globals.css       estilos
src/app/favicon.ico
src/components/MobileMenu.tsx
src/components/BackToTop.tsx
public/Zarella_Burbano_CV.pdf
public/og.png             imagen para redes
public/zare.jpg           ilustración de Sobre mí
public/projects/          capturas
design-ref/               maqueta HTML y capturas de referencia; la app no la sirve
```

No hay otras páginas ni API.

## Cómo agregar o editar un proyecto o una sección

Los textos viven en `src/app/page.tsx`. No hay CMS ni archivos de datos aparte.

Para un proyecto que ya está:

1. Edita su bloque en `src/app/page.tsx` (título, año, texto, tecnologías y enlaces).
2. Si tiene capturas, la lista está arriba del archivo: `agendaShots`, `rockyShots` o `learnmateShots`. ENERCHAIN arma las suyas directo en el JSX.
3. Pon la imagen en `public/projects/<carpeta>/` y usa esa ruta en `src` (por ejemplo `/projects/agenda/01_inicio.png`).

Para un proyecto nuevo: copia un bloque de la sección `Más proyectos` (`id="proyectos"`), dale un `id` propio y, si lleva fotos, crea `public/projects/<carpeta>/`.

Secciones y anclas:

| Sección en la página | Ancla | Dónde se edita |
| --- | --- | --- |
| Portada | `#inicio` | hero en `page.tsx` |
| Proyecto principal (AgendaPersonal) | `#agenda` | sección `#agenda` y `agendaShots` |
| Más proyectos | `#proyectos` | Rocky, LearnMate AI, ENERCHAIN, MedFinder, clasificador |
| Experiencia | `#experiencia` | sección `#experiencia` |
| Educación y logros | `#educacion` | sección `#educacion` |
| Habilidades | `#habilidades` | arreglo `skills` |
| Sobre mí | `#sobre-mi` | sección `#sobre-mi` e imagen `public/zare.jpg` |
| Contacto | `#contacto` | sección `#contacto` |
| CV | portada | `public/Zarella_Burbano_CV.pdf` y el enlace del hero |

El menú de escritorio llama «Proyectos» al enlace `#agenda`. El menú móvil (`src/components/MobileMenu.tsx`) separa «Proyecto principal» y «Más proyectos». Si cambias una ancla, actualiza los dos menús.

El botón «Menú» solo se ve por debajo de 700px (`src/app/globals.css`). Abre y cierra un panel con `aria-expanded` y `aria-controls`. Escape lo cierra y devuelve el foco al botón. No tiene `role="dialog"` ni una trampa de foco.

## CV

«Descargar CV ↓», en la portada, apunta a `/Zarella_Burbano_CV.pdf` y lleva `download`. El archivo es `public/Zarella_Burbano_CV.pdf`.

Para reemplazarlo, deja el PDF nuevo con ese mismo nombre en `public/`. Si cambias el nombre, actualiza también el `href` del hero en `src/app/page.tsx`.

## Qué hay hoy en proyectos

- AgendaPersonal: app en [https://agendapersonalz.vercel.app/](https://agendapersonalz.vercel.app/). Ya no dice «Código privado» ni habla de una cuenta demo. Seis capturas de celular.
- Rocky: sin enlace y sin la etiqueta «Código privado». Cuatro capturas de celular.
- LearnMate AI: código en [https://github.com/Valentina2882/LearnMateAI_frontend](https://github.com/Valentina2882/LearnMateAI_frontend). Seis capturas de celular. El párrafo de la portada lo nombra «LearnMate».
- ENERCHAIN: demo en [https://mte-frontend.vercel.app/](https://mte-frontend.vercel.app/). Dos capturas de celular. Las de escritorio ya no se muestran.
- MedFinder: sin URL de demo y sin capturas. El aviso «Falta enlace de demo» ya no está.
- Clasificador de cáncer de piel: código en [https://github.com/Valentina2882/RepoCancerPiel](https://github.com/Valentina2882/RepoCancerPiel). Sin capturas.

## Contacto, entorno y datos

Las tarjetas están en la sección `#contacto` de `src/app/page.tsx`, en este orden: correo, WhatsApp, LinkedIn y GitHub. En escritorio van en dos columnas; por debajo de 700px, en una.

- Correo: el que ya muestra la página (`burbanozarella05@gmail.com`).
- WhatsApp: hay una tarjeta. El `href` es un enlace `wa.me` y el texto visible es el número. Para un ejemplo de forma, `https://wa.me/57XXXXXXXXXX`. El número real no se copia en estos docs.
- LinkedIn: el texto visible es `/zarella-burbano`. El enlace sigue en `https://www.linkedin.com/in/zarella-burbano/`.
- GitHub: `Valentina2882`.

Para cambiar un dato, edita esa tarjeta en `page.tsx`.

El botón de volver arriba está en `src/components/BackToTop.tsx`. Busca `a.logo` para mover el foco. Si le cambias la clase al logo de la cabecera, el foco deja de encontrarlo.

La app no lee variables de entorno. `.gitignore` ignora `.env*`. Si más adelante hace falta una, documenta solo el nombre.

Este repo no tiene base de datos ni SQL. SQL aparece solo como texto (habilidad y experiencia).

## Más

- [CHANGELOG.md](CHANGELOG.md)
- [docs/decisiones.md](docs/decisiones.md)
- [docs/backlog.md](docs/backlog.md)
