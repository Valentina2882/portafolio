# Pendientes

Estado de cada uno en el código de `main` (`b29062e`), el 22 de noviembre de 2026.

## CV

El botón no es un enlace. Es un `span` con `aria-disabled="true"` y el texto «Descargar CV ↓», al lado de la etiqueta «Por confirmar». No hay PDF ni otra ruta de CV en el repo.

## Regenerar og.png

`public/og.png` existe y `src/app/layout.tsx` lo usa en Open Graph y Twitter (1200×630).

La imagen no coincide con la página. Todavía muestra el selector «ES / EN», la línea «$ whoami — ingeniera de software · Pasto, Colombia» y textos en minúscula («descargar CV», «por confirmar», «escribeme»). La página actual dice «Ingeniera de software · Pasto, Colombia», «Descargar CV ↓», «Por confirmar» y «Escríbeme», y ya no tiene «ES / EN».

## Cuenta demo de AgendaPersonal

La nota del proyecto lo dice: falta una cuenta demo para entrar sin usar una cuenta personal. No hay usuario ni clave en el repo. El botón «Ver app» sí apunta a [https://agendapersonalz.vercel.app/](https://agendapersonalz.vercel.app/).

Rocky no habla de cuenta demo. Solo dice «Código privado».

## Etiquetas de Habilidades

Hoy el arreglo `skills` en `src/app/page.tsx` usa `Ia-datos/` y `Devops-herramientas/`.

No coinciden con `IA-datos/` ni con `DevOps-herramientas/`. El commit que las dejó así dice que el listado usa los nombres oficiales. En el código no hay un TODO que pida cambiarlas. Queda anotado para decidir si se corrige la mayúscula.

El resto de carpetas, tal como están: `Lenguajes/`, `Frontend-mobile/`, `Backend-apis/`, `Bases-de-datos/`, `Blockchain-web3/`.

## Probar en iPhone

Según Desarrollo, no se probó en un iPhone. En el código no hay nota de esa prueba. El menú y varios ajustes de layout entran por debajo de 700px (`src/app/globals.css`).

## También visible en la página

MedFinder muestra «Falta enlace de demo». No tiene URL ni capturas.

El chat de la portada ya lleva la etiqueta «Cifras de ejemplo». El código no dice que haya que reemplazar esos números.
