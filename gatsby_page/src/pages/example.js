import * as React from 'react';

import NavAndMainWithMenu from '../templates/structure/nav-and-main-with-menu';

const Example = () => {
  return (
    <NavAndMainWithMenu>
      <p>Example webpage.</p>
    </NavAndMainWithMenu>
  );
}

export const Head = () => <title>Página de ejemplo</title>

export default Example;
