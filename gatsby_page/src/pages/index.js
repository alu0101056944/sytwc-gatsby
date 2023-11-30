import * as React from 'react';
import { Link } from 'gatsby'
import PageBody from '../templates/pagebody';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => { 
  return (
    <div>
      <h1>Introduction to Gatsby</h1>
      <StaticImage src="../images/icon.png" alt="An image of a logo of gatsby"/>
      <p>Esta es la página principal.</p>
      <p><Link to="/example">An example</Link></p>
      <p><Link to="/about">About</Link></p>
      <PageBody>
        <p>This is the content I want to insert into the card main</p>
      </PageBody>
    </div>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
