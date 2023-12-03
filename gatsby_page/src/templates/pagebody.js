import * as React from 'react';
import '../styles/pagebody.scss'

const PageBody = ({logoImage, navigationMenus, children}) => {
  return (
    <>
      <div class='logoDiv'>
        {logoImage}
      </div>
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
