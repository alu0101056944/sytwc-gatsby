import * as React from 'react';
import { Link } from 'gatsby'
import SomeTemplate from '../templates/sometemplate';

const IndexPage = () => {
  return (
    <div>
      <h1>Introduction to Gatsby</h1>
      <p>Esta es la página principal.</p>
      <p><Link to="/example">An example</Link></p>
      <p><Link to="/about">About</Link></p>
      <p>
        <SomeTemplate>
          <p>This is the content I want to insert into the card main</p>
        </SomeTemplate>
      </p>
    </div>
  )
}
export default IndexPage;