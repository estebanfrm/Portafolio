# Portafolio personal

Portafolio profesional creado con Vue 3, Vite y CSS moderno.

El inicio y la sección de proyectos enlazan a [Doble Toma](https://doble-toma.vercel.app), el portafolio de videos publicitarios con IA. Su código y despliegue se mantienen en un [repositorio independiente](https://github.com/estebanfrm/doble-toma); la carpeta local `portafolio-videos/` está excluida de este repositorio. El enlace se configura en `studio.url` y sus textos en ambos idiomas dentro de `src/data/portfolio.js`.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

Luego abre la URL local que muestre Vite, normalmente `http://localhost:5173`.

## Editar contenido

La mayoría del contenido se modifica desde:

```txt
src/data/portfolio.js
```

Ahí puedes cambiar nombre, enlaces, skills, proyectos, educación y datos de contacto.

## Idiomas

La página está en inglés por defecto y tiene un selector EN/ES en la barra de navegación. Los textos de cada idioma viven en `content.en` y `content.es` dentro de `src/data/portfolio.js`; al agregar o cambiar contenido, actualiza ambos. El idioma por defecto se define con `defaultLocale` y la elección del visitante se recuerda en su navegador.

## Reemplazar CV

Coloca tu hoja de vida en:

```txt
public/cv-esteban.pdf
```

El botón "Descargar CV" ya apunta a ese archivo.
