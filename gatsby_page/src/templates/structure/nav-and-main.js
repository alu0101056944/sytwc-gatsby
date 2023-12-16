import * as React from 'react';
import '../../styles/structure/nav-and-main.scss'

const NavAndMain = ({navigationMenus, children}) => {
  return (
    <>
      <nav>
        {navigationMenus}
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}

export default NavAndMain
