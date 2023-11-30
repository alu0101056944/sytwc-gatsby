import * as React from 'react';

const Navigation = ({children}) => {
  return (
    <nav>
      {
        React.Children.map(children, domNode => {
          if (domNode.classList.contains('navigationItem')) {
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
