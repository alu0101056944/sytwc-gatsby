# SYTWC Sass Theory

Marcos Barrios, alu0101056944

## Índice
  
  - [Tareas](#tareas)
  - [Haciendo un Layout con encabezado y zona principal](#haciendo-un-layout-con-encabezado-y-zona-principal)
  - [Creación del componente edificio](#creacion-del-componente-edificio)

## Tareas

### Tarea 1: Configurar el proyecto Gatsby

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

### Tarea 2: Página principal que enlaza a otras dos páginas

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

### Tarea 3: Página principal que enlaza a otras dos páginas

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

### Tarea 4: Usar el componente `StaticImage`

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

Y se utiliza en el cuerpo del componente:

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

## Haciendo un Layout con encabezado y zona principal

Se instala `node-sass` y el plugin `gatsby-plugin-sass`. Se configura el plugin `gatsby-config.js`.

Se define el template siguiente:

```js
const PageBody = ({navigationMenus, children}) => {
  return (
    <>
      <nav>
        {navigationMenus}
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}
```

Que incluye una etiqueta html `nav` y otra `main`. Para permitir tener más de un menú, recibe un prop `navigationMenus`.

Luego se define otro template que use `PageBody` pero que pase por props información para el menú de navegación:

```js
const PageBodyAdvanced = ({children}) => {
  return (
      <PageBody 
        navigationMenus={
            [
              <NavigationMenuWithLogo
                logoImage={<StaticImage src="../images/icon.png" alt="The logo of the webpage"/>}
                links={
                  [
                    { to: '/', text: 'Página principal' },
                    { to: '/about', text: 'Sobre esta página' },
                    { to: '/example', text: 'Página de ejemplo' }
                  ]
                }
              />
            ]
          }>

        {children}
      </PageBody>
  )
}
```

El template `PageBodyAdvanced` pasa por el prop `links` al template propio `NavigationMenuWithLogo` información para crear enlaces hacia las páginas `/`, `/about` y `/example`, además de un logo que utiliza `StaticImage` del plugin `gatsby-plugin-image` por el prop `logoImage`.

La definición del template `NavigationWithMenuLogo` es la siguiente:

```js
const NavigationMenuWithLogo = ({logoImage, links}) => {
  // **Aquí se comprueba que el tipo del prop links es adecuado**

  return (
    <div class="navigationFlexboxLayout">
      <div class="logoDiv">
        {logoImage}
      </div>
      {
        links.map((linkInfo, index) => (
              <Link className="simpleLink" key={index} to={linkInfo.to}>{linkInfo.text}</Link>
            ))
      }
    </div>
  );
}
```

Una vez creados esos templates `PageBody`, `PageBodyAdvanced`, `NavigationMenuWithLogo` se defined las tres páginas:

### `pages/index.js`

```js
const IndexPage = () => {
  return (
    <div>
      <PageBodyAdvanced>
        <p>El contenido de la plantilla de contenido se puede observar aquí.</p>
      </PageBodyAdvanced>
    </div>
  )
}
```

### `pages/example.js`

```js
const Example = () => {
  return (
    <PageBodyAdvanced>
      <p>Example webpage.</p>
    </PageBodyAdvanced>
  );
}
```

### `pages/about.js`

```js
const About = () => {
  return (
    <PageBodyAdvanced>
      <p>Marcos Jesús Barrios Lorenzo</p>
      <p>Creado el 03/12/2023</p>
      <StaticImage src="../images/author-picture.jpg" alt="Author image taken from it's github account"/>
      <p>En la asignatura de <em>Sistemas y Tecnologías Web: Cliente</em> se aprenden conceptos
      relacionados con tecnologías web utilizadas en empresas del mercado laboral. Es importante
      conocerlas porque este último está sometido a restricciones a los que un entorno académico
      no está sujeto, y una persona que quiera ser productiva debe de conocer las herramientas
      que se pueden utilizar para resolver cualquier problema que pueda suceder.</p>
    </PageBodyAdvanced>
  )
}
```

Se puede observar como se ha incluido la información en `About` especificada en el enunciado de la práctica.

### Estilos scss

Se hace un `import from '../styles/<archivo>.scss'` en el archivo de cada componente template, de forma que se incluyen globalmente los estilos necesarios para la página web.

#### `styles/navigation-menu-with-logo.scss`

```css
@import './simple-navigation-menu.scss';

.navigationFlexboxLayout {
  display: flex;
  align-items: flex-end;

  %allItems {
    margin: 5px 5px 5px 5px;
    padding: 5px 5px 5px 5px;
  }

  .logoDiv {
    @extend %allItems;
    width: 100px;
    height: 100px;
    margin-right: 25px;
  }
}

```

Se utiliza el scss de `./simple-navigation-menu.scss` porque previamente se utilizaba un template `SimpleNavigationMenu` en vez del template `NavigationMenuWithLogo` y se quizo reutilizar sus contenido.

Contenido de `./simple-navigation-menu.scss`:

```css
.simpleLink {
  background-color: lightblue;
  margin: 5px 5px 5px 5px;
  padding: 0px 5px 0px 5px;
}
```

#### `styles/pagebody.scss`

```css
@mixin setMarginAndPadding {
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
}

main {
  background-color: lightcyan;
  @include setMarginAndPadding;
}

body {
  margin: auto;
  width: 1000px;
}

nav {
  background-color: lightgray;
  @include setMarginAndPadding;
}
```

### Resultado final:

![page screenshot after body nav creation](./docs/page-screenshot-after-body-nav-creation.png)

### Creación del componente edificio

Se crean tres componentes `Card`, `Placeholder` y `Building`. El primero tiene un cuerpo y un pie en el que se espera que se introduzca cualquier contenido. En el segundo se espera que siga la mecánica de traspasar su contenido de un placeholder a otro. El último es un simple contenedor de placeholders y es el que se encargará de traspasar el contenido de un placeholder a otro.

```js
const IndexPage = () => {
  return (
    <>
      <PageBodyAdvanced>
        <Building>
          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>
        </Building>
      </PageBodyAdvanced>
    </>
  )
}
```

Con

```js
const Card = ({footContent, children}) => {
  return (
    <>
      <div className="card">
        <div className="card-main">
          {children}
        </div>

        <div className="card-foot">
          {footContent}
        </div>
      </div>
    </>
  )
}
```

```js
const Placeholder = ({children}) => {
  return (
    <div className="placeholder">
      {children}
    </div>
  )
}
```

```js
const Building = ({children}) => {
  return (
    <div className="placeholders">
      {children}
    </div>
  )
}
```

Se asignó el mismo `scss` que en la práctica anterior.
