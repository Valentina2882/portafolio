# Decisiones

Solo lo que está escrito en el [PR #1](https://github.com/Valentina2882/portafolio/pull/1) o se ve en el código. Si el motivo no está escrito, no se inventa.

## Una sola página con scroll

El commit del rediseño dice: «Una sola página con scroll, los textos y proyectos aprobados, y la animación del chat.» El cuerpo del PR dice que Zare aprobó la maqueta.

En el código solo existe `src/app/page.tsx`. Antes del rediseño también era así. El cambio visible es el scroll por anclas y la salida del carrusel Swiper.

## Sin selector de idioma

El primer corte pintaba «ES / EN» en la cabecera. Era un `span`, sin código que tradujera la página. El commit «Corregir el menú móvil, los repos privados y la revisión» dice que se quita.

La página queda en español (`lang="es"` en `src/app/layout.tsx`). Español e inglés de la sección Educación son idiomas de Zare, no un interruptor del sitio.

No hay otro motivo escrito. La maqueta `design-ref/terminal-andina-v4.html` y `public/og.png` todavía muestran «ES / EN».

## Capturas de celular

El PR las agregó junto con la referencia Terminal Andina. `PhoneShot` en `src/app/page.tsx` las mete en un marco de celular.

ENERCHAIN usa además `DeskShot` para dos capturas de escritorio. No hay un motivo escrito para elegir celular, más allá de seguir esa referencia. MedFinder y el clasificador no tienen capturas.

## Código privado

El mismo commit de revisión dice que AgendaPersonal y Rocky quedan como código privado. En la página los dos muestran «Código privado».

AgendaPersonal, además, tiene esta nota: el repositorio sigue privado y falta una cuenta demo para entrar sin una cuenta personal. Aun así hay enlace a la app. Rocky no tiene enlace a código ni a demo.

## Menú móvil

El commit de revisión dice que el menú abre y cierra las siete secciones. Un commit posterior dice que Escape devuelve el foco al botón. Eso está en `src/components/MobileMenu.tsx`.

El botón solo aparece por debajo de 700px. El menú de escritorio no repite las mismas etiquetas: dice «Proyectos» y apunta a `#agenda`.
