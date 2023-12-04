import * as React from 'react';
import '../../styles/building/card-placeholder.scss';

const CardPlaceholder = ({children}) => {
  return (
    <div className="placeholder">
      {children}
    </div>
  )
}

export default CardPlaceholder;
