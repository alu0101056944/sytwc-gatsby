# Troubleshooting a problem with graphql in webpage

In the following `pages/index.js` file: 

```js
import * as React from 'react';
import { Link } from 'gatsby'
import SomeTemplate from '../templates/sometemplate';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const IndexPage = ({data}) => { 
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
      {
        data.allFile.nodes.map((node) => {
              return <p key={node.name}>{node.name}</p>
            })
      }
    </div>
  )
}

export const query = graphql(`
query {
  allFile {
    nodes {
      name
    }
  }
}
`)

export const Head = () => <title>SYTWC práctica de gatsby.</title>

export default IndexPage

```

On `gatsby develop` call, Gatsby says that there was a runtime error with the Graphql query.

Annotations found while investigating:

 - Gatsby looks for any export variable that is a `graphql` string, so the name of the variable itself does not matter.
 - Only one `graphql` string per page.
 - JS has string template functions which receive a string template (the one string that allows interpolation) and the output is a new string. Then, a new syntax can be used: <expression><string template>, so:
 
 ```js
 someFunction`some template literal with ${interpolation} mechanics`
 ```
 
 ... which results in `someFunction` receiving the parts inbetween interpolation values as a string array, so the first parameter is `['some template literal with ', 'mechanics']`, and then it is expected one second parameter with the value of the variable `interpolation`.

**Fixed the problem. It seems that the problem was caused by calling the `graphql` function directly and not as a template literal function.**
