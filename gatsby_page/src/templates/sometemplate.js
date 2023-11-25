import * as React from 'react';

const SomeTemplate = ({children}) => {
  return (
    <div>
      <div>
        {children}
      </div>
      <div>
        <p>This is the foot of the card</p>
      </div>
    </div>
  );
}

export default SomeTemplate;
