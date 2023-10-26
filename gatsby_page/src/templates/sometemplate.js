import * as React from 'react';

const SomeTemplate = ({children}) => {
  return (
    <div class="card">
      <div class="card-main">
        {children}
      </div>
      <div class="card-foot">
        <p>This is the foot of the card</p>
      </div>
    </div>
  )
}

export default SomeTemplate;
