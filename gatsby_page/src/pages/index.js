import * as React from 'react';
import PageBodyAdvanced from '../templates/pagebody-advanced';
import Building from '../templates/building/building';
import Card from '../templates/building/card';
import UserScore from '../templates/user-score';

const IndexPage = () => {
  return (
    <>
      <PageBodyAdvanced>
        <Building amountOfPlaceholders={5}>
          <Card><p>some card</p></Card>
          <Card footContent={<UserScore></UserScore>}></Card>
        </Building>
      </PageBodyAdvanced>
    </>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
