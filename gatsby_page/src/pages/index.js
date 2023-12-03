import * as React from 'react';
import PageBodyAdvanced from '../templates/pagebody-advanced';

const IndexPage = () => {
  return (
    <div>
      <PageBodyAdvanced>
        <p>El contenido de la plantilla de contenido se puede observar aquí.</p>
      </PageBodyAdvanced>
    </div>
  )
}

export const Head = () => <title>Página principal</title>

export default IndexPage
