# Portafolio de Zarella Burbano

Sitio personal de Zarella Burbano, ingeniera de software en Pasto, Colombia. Muestra proyectos, experiencia, educación, habilidades y contacto.

Es una sola ruta: `src/app/page.tsx`. La página se recorre con scroll y anclas. Antes del rediseño también había una sola ruta; lo que cambió es el diseño (se quitó el carrusel) y el contenido.

Producción, según Desarrollo: [https://portafoliozare.vercel.app/](https://portafoliozare.vercel.app/). Esa misma URL está en `metadataBase` de `src/app/layout.tsx`.

El rediseño «Terminal Andina» se fusionó a `main` el 22 de noviembre de 2026 a las 18:40 (hora de Colombia, UTC-5), squash `b29062e`. Ver [CHANGELOG.md](CHANGELOG.md).

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

El menú de escritorio llama «Proyectos» al enlace `#agenda`. El menú móvil (`src/components/MobileMenu.tsx`) separa «Proyecto principal» y «Más proyectos». Si cambias una ancla, actualiza los dos menús.

El botón «Menú» solo se ve por debajo de 700px (`src/app/globals.css`). Abre y cierra un panel con `aria-expanded` y `aria-controls`. Escape lo cierra y devuelve el foco al botón. No tiene `role="dialog"` ni una trampa de foco.

## Qué hay hoy en proyectos

- AgendaPersonal: app en [https://agendapersonalz.vercel.app/](https://agendapersonalz.vercel.app/). La página dice «Código privado» y que falta una cuenta demo. Seis capturas de celular.
- Rocky: «Código privado», sin enlace. Cuatro capturas de celular.
- LearnMate AI: código en [https://github.com/Valentina2882/LearnMateAI_frontend](https://github.com/Valentina2882/LearnMateAI_frontend). Seis capturas de celular. El párrafo de la portada lo nombra «LearnMate».
- ENERCHAIN: demo en [https://mte-frontend.vercel.app/](https://mte-frontend.vercel.app/). Dos capturas de celular y dos de escritorio.
- MedFinder: sin demo. La página dice «Falta enlace de demo». Sin capturas.
- Clasificador de cáncer de piel: código en [https://github.com/Valentina2882/RepoCancerPiel](https://github.com/Valentina2882/RepoCancerPiel). Sin capturas.

## Contacto, entorno y datos

Contacto, en `src/app/page.tsx`: el correo que ya muestra la página (`burbanozarella05@gmail.com`), LinkedIn (`/in/zarella-burbano`) y GitHub (`Valentina2882`). No hay teléfono.

La app no lee variables de entorno. `.gitignore` ignora `.env*`. Si más adelante hace falta una, documenta solo el nombre.

Este repo no tiene base de datos ni SQL. SQL aparece solo como texto (habilidad y experiencia).

## Más

- [CHANGELOG.md](CHANGELOG.md)
- [docs/decisiones.md](docs/decisiones.md)
- [docs/backlog.md](docs/backlog.md)
