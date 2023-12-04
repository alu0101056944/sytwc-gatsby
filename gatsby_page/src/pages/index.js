import * as React from 'react';
import PageBodyAdvanced from '../templates/pagebody-advanced';
import Building from '../templates/building/building';
import Placeholder from '../templates/building/placeholder';
import Card from '../templates/building/card';

const IndexPage = () => {
  return (
    <>
      <PageBodyAdvanced>
        <Building>
          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>

          <Placeholder>
            <Card></Card>
          </Placeholder>
        </Building>
      </PageBodyAdvanced>
    </>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
