# SYTWC Sass Theory

Marcos Barrios, alu0101056944

## Tarea 1: Configurar el proyecto Gatsby

Se instala gatsby y se utiliza `gatsby new` para comenzar una nueva página web de gatsby con la estructura básica. A continuación se observa la estructura hasta la tarea 3 completada:

```bash
.
├── README.md
├── docs
└── gatsby_page
    ├── README.md
    ├── gatsby-config.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── page-data
    │   │   ├── 404.html
    │   │   │   └── page-data.json
    │   │   ├── about
    │   │   │   └── page-data.json
    │   │   ├── dev-404-page
    │   │   │   └── page-data.json
    │   │   ├── example
    │   │   │   └── page-data.json
    │   │   └── index
    │   │       └── page-data.json
    │   ├── static
    │   └── ~partytown
    │       ├── debug
    │       │   ├── partytown-atomics.js
    │       │   ├── partytown-media.js
    │       │   ├── partytown-sandbox-sw.js
    │       │   ├── partytown-sw.js
    │       │   ├── partytown-ww-atomics.js
    │       │   ├── partytown-ww-sw.js
    │       │   └── partytown.js
    │       ├── partytown-atomics.js
    │       ├── partytown-media.js
    │       ├── partytown-sw.js
    │       └── partytown.js
    └── src
        ├── images
        │   └── icon.png
        ├── pages
        │   ├── 404.js
        │   ├── about.js
        │   ├── example.js
        │   └── index.js
        └── templates
            └── sometemplate.js
```

Solo está presente un repositorio. Se puede observar que solo hay una carpeta .git:

![bash ls -la command showing only one repository is present](docs/git_proof.png)

## Tarea 2: Primeros pasos en Gatsby


