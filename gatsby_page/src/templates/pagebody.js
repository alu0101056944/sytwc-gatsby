import * as React from 'react';

const PageBody = ({intoNavigation, children}) => {
  return (
    <>
      <nav>
        {intoNavigation}
      </nav>
      <main>
        {children}
      </main>
    </>
  )
}

export default PageBody
