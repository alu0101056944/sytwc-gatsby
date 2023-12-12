import * as React from 'react';
import PageBodyAdvanced from '../templates/pagebody-advanced';
import Building from '../templates/building/building';

import goods from '../../../content/bienes.json';

const IndexPage = () => {
  return (
    <>
      <PageBodyAdvanced>
        <Building amountOfPlaceholders={5} goods={goods.bienes}/>
      </PageBodyAdvanced>
    </>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
