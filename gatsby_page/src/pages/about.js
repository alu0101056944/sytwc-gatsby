import * as React from 'react';
import PageBody from '../templates/pagebody';

const About = () => {
  return (
    <main>
      <h1>Introduction to Gatsby</h1>
      <p>En la asignatura de <em>Sistemas y Tecnologías Web: Cliente</em> se aprenden conceptos
      relacionados con tecnologías web utilizadas en empresas del mercado laboral. Es importante
      conocerlas porque este último está sometido a restricciones a los que un entorno académico
      no está sujeto, y una persona que quiera ser productiva debe de conocer las herramientas
      que se pueden utilizar para resolver cualquier problema que pueda suceder.</p>
      <PageBody>
        <p>This is a third use of the SomeTemplate layout.</p>
      </PageBody>
    </main>
  )
}

export const Head = () => <title>Sobre esta página</title>

export default About
