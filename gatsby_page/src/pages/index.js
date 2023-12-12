import * as React from 'react';
import PageBodyAdvanced from '../templates/pagebody-advanced';
import Building from '../templates/building/building';

import goods from '../../../content/bienes.json';

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
        <Building amountOfPlaceholders={5} goods={goods.bienes}
            contentTransform={contentTransform}/>
      </PageBodyAdvanced>
    </>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
