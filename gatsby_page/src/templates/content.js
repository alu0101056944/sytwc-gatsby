import * as React from 'react';

const Content = ({children}) => {
  return (
    <main>
      {
        React.children.map(children, domNode => {
          if (domNode.classList.includes('mainItem')) {
            return domNode;
          } else {
            return null;
          }
        })
      }
    </main>
  )
}

export default Content
