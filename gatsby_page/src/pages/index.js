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
