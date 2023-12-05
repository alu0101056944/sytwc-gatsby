import * as React from 'react';
import PageBodyAdvanced from '../templates/pagebody-advanced';
import Building from '../templates/building/building';
import Card from '../templates/building/card';

const IndexPage = () => {
  return (
    <>
      <PageBodyAdvanced>
        <Building amountOfPlaceholders={5}>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Building>
      </PageBodyAdvanced>
    </>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
