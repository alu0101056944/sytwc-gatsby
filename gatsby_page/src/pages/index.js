import * as React from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import PageBody from '../templates/pagebody';
import Navigation from '../templates/navigation';
import Content from '../templates/content';

const IndexPage = () => {
  return (
    <div>
      <h1>Introduction to Gatsby</h1>
      <StaticImage src="../images/icon.png" alt="An image of a logo of gatsby"/>
      <p>Esta es la página principal.</p>
      <PageBody intoNavigation={
            <Navigation>
              <Link to="about">Sobre esta página</Link>
              <Link to="example">Página de ejemeplo</Link>
            </Navigation>
          }>
        <Content>
          <p>El contenido de la plantilla de contenido se puede observar aquí.</p>
        </Content>
      </PageBody>
    </div>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
