import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import NavAndMain from './nav-and-main';
import NavigationMenuWithLogo from '../navigation-menu-with-logo';

const NavAndMainWithMenu = ({children}) => {
  return (
      <NavAndMain 
        navigationMenus={
            [
              <NavigationMenuWithLogo
                key={`navigation1`}
                logoImage={<StaticImage src="../../images/icon.png" alt="The logo of the webpage"/>}
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
      </NavAndMain>
  )
}

export default NavAndMainWithMenu
