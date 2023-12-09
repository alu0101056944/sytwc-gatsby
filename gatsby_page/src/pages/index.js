import * as React from 'react';
import PageBodyAdvanced from '../templates/pagebody-advanced';
import Building from '../templates/building/building';

const IndexPage = () => {
  return (
    <>
      <PageBodyAdvanced>
        <Building amountOfPlaceholders={5}/>
      </PageBodyAdvanced>
    </>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
