import * as React from 'react';
import '../../styles/structure/pagebody.scss'

const PageBody = ({navigationMenus, children}) => {
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

export default PageBody
