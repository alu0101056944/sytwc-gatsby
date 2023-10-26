import * as React from 'react';
import SomeTemplate from '../templates/sometemplate';

const Example = () => {
  return (
    <main>
      <h1>Introduction to Gatsby</h1>
      <p>Esta es la página example.</p>
      <SomeTemplate>
        <p>This is more content for the main part of my card component layout.</p>
      </SomeTemplate>
    </main>
  )
}

export default Example;
