import * as React from 'react';
import '../../styles/structure/content-and-sidebar.scss'

const ContentAndSidebar = ({sidebarContent, children}) => {
  return (
    <div className='contentAndSidebar'>
      <div className='content'>
        {children}
      </div>
      <div className='sidebar'>
        {sidebarContent}
      </div>
    </div>
  )
}

export default ContentAndSidebar
