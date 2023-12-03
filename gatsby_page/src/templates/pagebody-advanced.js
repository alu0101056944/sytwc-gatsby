import * as React from 'react';
import PageBody from '../templates/pagebody';
import NavigationMenuWithLogo from '../templates/navigation-menu-with-logo';
import { StaticImage } from 'gatsby-plugin-image';

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

export default PageBodyAdvanced
