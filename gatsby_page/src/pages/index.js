import * as React from 'react';
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import PageBody from '../templates/pagebody';
import SimpleNavigationMenu from '../templates/simple-navigation-menu';
import Content from '../templates/content';

const IndexPage = () => {
  return (
    <div>
      <h1>Introduction to Gatsby</h1>
      <StaticImage src="../images/icon.png" alt="An image of a logo of gatsby"/>
      <p>Esta es la página principal.</p>
      <PageBody navigationMenus={
            [
              <SimpleNavigationMenu links={
                  [
                    { to: 'about', text: 'Sobre esta página'},
                    { to: 'example', text: 'Página de ejemplo'}
                  ]
                }/>
            ]
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
