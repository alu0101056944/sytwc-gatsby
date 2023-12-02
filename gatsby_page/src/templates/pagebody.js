import * as React from 'react';

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
