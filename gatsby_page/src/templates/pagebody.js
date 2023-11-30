import * as React from 'react';

import Navigation from './navigation'
import Content from './content'

const PageBody = ({navigationItems, children}) => {
  return (
    <>
      <Navigation></Navigation>
      <Content>
        {children}
      </Content>
    </>
  )
}

export default PageBody
