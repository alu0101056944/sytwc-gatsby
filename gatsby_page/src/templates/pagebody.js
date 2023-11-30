import * as React from 'react';

const PageBody = ({children}) => {
  return (
    <>
      <nav>
        {
          children.map(domNode => {
            if (domNode.classList.includes('navigationItem')) {
              return domNode;
            } else {
              return null;
            }
          })
        }
      </nav>
      <main>
        {
          children.map(domNode => {
            if (domNode.classList.includes('mainItem')) {
              return domNode;
            } else {
              return null;
            }
          })
        }
      </main>
    </>
  )
}

export default PageBody
