import * as React from 'react';
import Building from './building';

const BuildingWithAPI = ({amountOfPlaceholders = 0, data}) => {
  contentTransform = (content) => {
        return (
          <>
            <h5>{content.title}</h5>
            <p>{content.body}</p>
          </>
        )
      }

  return (
    <Building amountOfPlaceholders={amountOfPlaceholders}
        contentTransform={contentTransform}
        content={data.allRecords}/>
  )
}

export const query = graphql`
query {
  allRecords {
    title
    body
  }
}
`

export default BuildingWithAPI
