# Decisiones

Solo lo que está escrito en el [PR #1](https://github.com/Valentina2882/portafolio/pull/1), el [PR #2](https://github.com/Valentina2882/portafolio/pull/2) o se ve en el código. Si el motivo no está escrito, no se inventa.

## Una sola página con scroll

El commit del rediseño dice: «Una sola página con scroll, los textos y proyectos aprobados, y la animación del chat.» El cuerpo del PR dice que Zare aprobó la maqueta.

En el código solo existe `src/app/page.tsx`. Antes del rediseño también era así. El cambio visible es el scroll por anclas y la salida del carrusel Swiper.

## Sin selector de idioma

El primer corte pintaba «ES / EN» en la cabecera. Era un `span`, sin código que tradujera la página. El commit «Corregir el menú móvil, los repos privados y la revisión» dice que se quita.

La página queda en español (`lang="es"` en `src/app/layout.tsx`). Español e inglés de la sección Educación son idiomas de Zare, no un interruptor del sitio.

No hay otro motivo escrito. La maqueta `design-ref/terminal-andina-v4.html` y `public/og.png` todavía muestran «ES / EN».

## Capturas de celular

El PR las agregó junto con la referencia Terminal Andina. `PhoneShot` en `src/app/page.tsx` las mete en un marco de celular.

En el corte del PR #1, ENERCHAIN también usaba `DeskShot` para dos capturas de escritorio. El PR #4 las quitó de la página. MedFinder y el clasificador no tienen capturas.

## ENERCHAIN solo con capturas de celular

El cuerpo del [PR #4](https://github.com/Valentina2882/portafolio/pull/4) dice: «Por pedido de Zare, quita las dos capturas de escritorio de ENERCHAIN y deja solo las de celular y el botón de demo.»

En el código se fue el bloque `desk-row` y la función `DeskShot`. Quedan dos `PhoneShot`, las pills y el enlace «Ver demo».

Según Desarrollo, el backend de registro de Julian está caído y por eso Zare prefirió dejar solo el celular. Ese motivo no está en el PR.

## Código privado

El commit de revisión del PR #1 dice que AgendaPersonal y Rocky quedan como código privado. En ese corte la página mostraba «Código privado» en los dos. AgendaPersonal, además, avisaba que el repositorio seguía privado y que faltaba una cuenta demo.

El PR #2 quitó esas etiquetas y la nota. El commit dice que quita los avisos de pendiente. No explica otro motivo. AgendaPersonal conserva el enlace «Ver app». Rocky sigue sin enlace.

## Menú móvil

El commit de revisión dice que el menú abre y cierra las siete secciones. Un commit posterior dice que Escape devuelve el foco al botón. Eso está en `src/components/MobileMenu.tsx`.

El botón solo aparece por debajo de 700px. El menú de escritorio no repite las mismas etiquetas: dice «Proyectos» y apunta a `#agenda`.

## Volver arriba mueve el foco al logo

`src/components/BackToTop.tsx` hace dos cosas al pulsar: busca `a.logo` y le hace `focus({ preventScroll: true })`, y después `window.scrollTo({ top: 0 })`.

El commit «Mueve el foco al logo antes de volver arriba» dice por qué: «Así Chrome no cancela el scroll suave cuando el botón se oculta a mitad de camino.»

El scroll es `smooth`, salvo si `prefers-reduced-motion: reduce`, en cuyo caso es `auto`. El botón se muestra cuando `scrollY` pasa el alto de la ventana. El `aria-label` es «Volver arriba».
