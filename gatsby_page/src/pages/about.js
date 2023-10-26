import * as React from 'react';
import SomeTemplate from '../templates/sometemplate';

const About = () => {
  return (
    <main>
      <h1>Introduction to Gatsby</h1>
      <p>Esta es otra página para cumplir el requerimiento de tener dos páginas enlazadas en otra.</p>
      <SomeTemplate>
        <p>This is a third use of the SomeTemplate layout.</p>
      </SomeTemplate>
    </main>
  )
}

export default About;
