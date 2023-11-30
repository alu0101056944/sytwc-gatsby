import * as React from 'react';

const Content = ({children}) => {
  return (
    <main>
      {
        React.Children.map(children, domNode => {
          if (domNode.classList.contains('mainItem')) {
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
