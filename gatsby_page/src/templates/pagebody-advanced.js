import * as React from 'react';
import PageBody from '../templates/pagebody';
import SimpleNavigationMenu from '../templates/simple-navigation-menu';
import { StaticImage } from 'gatsby-plugin-image';

const PageBodyAdvanced = ({children}) => {
  return (
      <PageBody 
        logoImage={<StaticImage src="../images/icon.png" alt="The logo of the webpage"/>}
        navigationMenus={
            [
              <SimpleNavigationMenu links={
                  [
                    { to: '/', text: 'Página principal'},
                    { to: '/about', text: 'Sobre esta página'},
                    { to: '/example', text: 'Página de ejemplo'}
                  ]
                }/>
            ]
          }>
        {children}
      </PageBody>
  )
}

export default PageBodyAdvanced
