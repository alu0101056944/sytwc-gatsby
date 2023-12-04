import * as React from 'react';
import '../../styles/building/card.scss';

const Card = ({footContent, children}) => {
  return (
    <>
      <div className="card">
        <div className="card-main">
          {children}
        </div>

        <div className="card-foot">
          {footContent}
        </div>
      </div>
    </>
  )
}

export default Card;
