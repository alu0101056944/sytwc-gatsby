import * as React from 'react';

const Navigation = ({children}) => {
  return (
    <nav>
      {
        React.children.map(children, domNode => {
          if (domNode.classList.includes('navigationItem')) {
            return domNode;
          } else {
            return null;
          }
        })
      }
    </nav>
  )
}

export default Navigation
