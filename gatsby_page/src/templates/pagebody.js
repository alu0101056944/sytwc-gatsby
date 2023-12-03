import * as React from 'react';
import '../styles/pagebody.scss'

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
