import * as React from 'react';
import PageBody from '../templates/pagebody';

const Example = () => {
  return (
    <main>
      <h1>Introduction to Gatsby</h1>
      <p>Esta es la página example.</p>
      <PageBody>
        <p>This is more content for the main part of my card component layout.</p>
      </PageBody>
    </main>
  );
}

export const Head = () => <title>Página de ejemplo</title>

export default Example;
