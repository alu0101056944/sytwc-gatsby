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

## Tarea 2: Página principal que enlaza a otras dos páginas

Página principal

 - [Enlace a la página principal escrito como componente react gatsby](gatsby_page/src/pages/index.js)

```js
const IndexPage = () => {
return (
  <div>
    <h1>Introduction to Gatsby</h1>
    <StaticImage src="../images/icon.png" alt="An image of a logo of gatsby"/>
    <p>Esta es la página principal.</p>
    <p><Link to="/example">An example</Link></p>
    <p><Link to="/about">About</Link></p>
    <SomeTemplate>
      <p>This is the content I want to insert into the card main</p>
    </SomeTemplate>
  </div>
)
}
```

 - [Enlace a la página de ejemplo escrito como componente react gatsby](gatsby_page/src/pages/example.js)


```js
 const Example = () => {
  return (
    <main>
      <h1>Introduction to Gatsby</h1>
      <p>Esta es la página example.</p>
      <SomeTemplate>
        <p>This is more content for the main part of my card component layout.</p>
      </SomeTemplate>
    </main>
  );
}
```

 - [Enlace a la página de "sobre esta página" escrito como componente react gatsby](gatsby_page/src/pages/example.js)

```js
const About = () => {
  return (
    <main>
      <h1>Introduction to Gatsby</h1>
      <p>Esta es otra página para cumplir el requerimiento de tener dos páginas enlazadas en otra.</p>
      <SomeTemplate>
        <p>This is a third use of the SomeTemplate layout.</p>
      </SomeTemplate>
    </main>
  )
}
```

## Tarea 3: Página principal que enlaza a otras dos páginas

El layout utilizado es el siguiente:

```js
const SomeTemplate = ({children}) => {
  return (
    <div>
      <div>
        {children}
      </div>
      <div>
        <p>This is the foot of the card</p>
      </div>
    </div>
  );
}
```

Se puede observar en [la tarea 2](#tarea-2-página-principal-que-enlaza-a-otras-dos-páginas) que las páginas web contienen la plantilla, utilizándola como `SomeTemplate`.

Este es el resultado final:

### Página principal

![Captura de pantalla de la página principal](docs/main_page.png)

### Página de ejemplo

![Captura de pantalla de la página de ejemplo](docs/example_page.png)

### Página de "sobre esta página"

![Captura de pantalla de la página de "sobre esta página"](docs/about_page.png)

