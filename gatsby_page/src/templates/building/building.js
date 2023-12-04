import * as React from 'react';
import '../../styles/building/building.scss';

const Building = ({children}) => {
  return (
    <div className="placeholders">
      {children}
    </div>
  )
}

export default Building;
