import * as React from 'react';
import PageBodyAdvanced from '../templates/pagebody-advanced';
import Building from '../templates/building/building';

import goods from '../../content/bienes.json';
import BuildingWithAPI from '../templates/building/building_with_api';

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
    <>
      <PageBodyAdvanced>
        <h3>Usos del componente edificio</h3>
        <h4>Con datos obtenidos de archivo .json:</h4>
        <Building amountOfPlaceholders={5} content={goods.bienes}
            contentTransform={contentTransform}/>
        <h4>Con datos de API</h4>
        <BuildingWithAPI amountOfPlaceholders={12}></BuildingWithAPI>
      </PageBodyAdvanced>
    </>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
