import * as React from 'react';
import { Link } from 'gatsby'
import PageBody from '../templates/pagebody';
import SimpleNavigationMenu from '../templates/simple-navigation-menu';
import Content from '../templates/content';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <div>
      <h1>Introduction to Gatsby</h1>
      
      <PageBody 
        logoImage={<StaticImage src="../images/icon.png" alt="The logo of the webpage"/>}
        navigationMenus={
            [
              <SimpleNavigationMenu links={
                  [
                    { to: 'about', text: 'Sobre esta página'},
                    { to: 'example', text: 'Página de ejemplo'}
                  ]
                }/>
            ]
          }>
        <p>El contenido de la plantilla de contenido se puede observar aquí.</p>
      </PageBody>
    </div>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
