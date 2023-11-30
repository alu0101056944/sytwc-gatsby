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
      <PageBody
          navigationItems = {[
              <Link to="/about">Sobre esta página</Link>,
              <Link to="/example">Página de ejemplo</Link>
            ]}
          >
      </PageBody>
    </div>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
