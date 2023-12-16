import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import Building from './building';

const BuildingWithAPI = ({amountOfPlaceholders = 0}) => {
  const data = useStaticQuery(graphql`
        query {
          allRecords {
            nodes {
              title
              body
            }
          }
        }
      `);

  const contentTransform = (content) => {
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
          content={data.allRecords.nodes}/>
    )
}

export default BuildingWithAPI
