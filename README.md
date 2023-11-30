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

## Tarea 4: Usar el componente `StaticImage`

Se instaló `gatsby-plugin-image` y se especificó en `gatsby-config.js` lo siguiente:

```js
module.exports = {
  siteMetadata: {
    title: `SYTWC Gatsby Assignment`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ]
};
```

Es necesario instalar `gatsby-plugin-sharp` porque es una dependencia de `gatsby-plugin-image`. Se puede ver en las capturas de pantalla de la [tarea 3](#tarea-3-página-principal-que-enlaza-a-otras-dos-páginas) cómo se ve la imagen [Imagen del logo de gatsby](images/icon.png). En la [tarea 2](#tarea-2-página-principal-que-enlaza-a-otras-dos-páginas) están los fragmentos de código donde se ve como se utiliza el componente `StaticImage`.

## Usando GraphQL

Tras haber instalado el plugin `gatsby-source-filesystem`, se configura en gatsby.config.js:

```js
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'all page components',
        path: `${__dirname}/src/pages`
      }
    }
```

Luego se agrega la siguiente consulta a [gatsby_page/src/pages/index.js](gatsby_page/src/pages/index.js):

```js
export const query = graphql`
query {
  allFile {
    nodes {
      name
    }
  }
}
`
```

I se utiliza en el cuerpo del componente:

```js
  // (...)
  {
    data.allFile.nodes.map((node) => {
          return <p key={node.name}>{node.name}</p>
        })
  }
  // (...)
```

El resultado es:

![index.html webpage with the graphql query to get the webpage list](docs/graphql-result.png)
