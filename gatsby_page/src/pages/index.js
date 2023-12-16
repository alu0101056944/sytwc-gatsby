import * as React from 'react';

import PageBodyAdvanced from '../templates/structure/pagebody-advanced';
import Building from '../templates/building/building';
import BuildingWithAPI from '../templates/building/building_with_api';
import ContentAndSidebar from '../templates/structure/content-and-sidebar';

import goods from '../../content/bienes.json';

const IndexPage = () => {
  const contentTransform = (bien) => {
      return (
          <>
            <h5>{bien.nombre}</h5>
            <p>{bien.antecedentes}</p>
            <p>Tipo: {bien.tipo.arquitectura}</p>
            <p>Época: {bien.tipo.época}</p>
            <p>Localización: {
                  `lat ${bien.localizacion.lat}, long: ${bien.localizacion.long}`
                }
            </p>
          </>
        )
      }
  return (
    <PageBodyAdvanced>
      <h1>Usos del componente edificio</h1>
      <ContentAndSidebar>
        <h2>Con datos obtenidos de archivo .json:</h2>
        <Building amountOfPlaceholders={5} content={goods.bienes}
            contentTransform={contentTransform}/>
      </ContentAndSidebar>
      <h2>Con datos de API</h2>
      <BuildingWithAPI amountOfPlaceholders={12}></BuildingWithAPI>
    </PageBodyAdvanced>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
