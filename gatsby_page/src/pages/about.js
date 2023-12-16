import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import NavAndMainWithMenu from '../templates/structure/nav-and-main-with-menu';

const About = () => {
  return (
    <NavAndMainWithMenu>
      <p>Marcos Jesús Barrios Lorenzo</p>
      <p>Creado el 03/12/2023</p>
      <StaticImage src="../images/author-picture.jpg" alt="Author image taken from it's github account"/>
      <p>En la asignatura de <em>Sistemas y Tecnologías Web: Cliente</em> se aprenden conceptos
      relacionados con tecnologías web utilizadas en empresas del mercado laboral. Es importante
      conocerlas porque este último está sometido a restricciones a los que un entorno académico
      no está sujeto, y una persona que quiera ser productiva debe de conocer las herramientas
      que se pueden utilizar para resolver cualquier problema que pueda suceder.</p>
    </NavAndMainWithMenu>
  )
}

export const Head = () => <title>Sobre esta página</title>

export default About
