import * as React from 'react';
import PageBodyAdvanced from '../templates/pagebody-advanced';
import Building from '../templates/building/building';
import CardPlaceholder from '../templates/building/card-placeholder';
import Foo from '../templates/foo';

const IndexPage = () => {
  return (
    <div>
      <PageBodyAdvanced>
        <Building>
          <CardPlaceholder style={{width: '50px', height: '50px', backgroundColor: "blue"}}>
            <p>do</p>
          </CardPlaceholder>
          <CardPlaceholder><p>Foo2</p></CardPlaceholder>
          <CardPlaceholder><p>Foo3</p></CardPlaceholder>
        </Building>
      </PageBodyAdvanced>
    </div>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
