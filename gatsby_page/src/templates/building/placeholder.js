import * as React from 'react';
import '../../styles/building/placeholder.scss';

const Placeholder = ({children}) => {
  return (
    <div className="placeholder">
      {children}
    </div>
  )
}

export default Placeholder
