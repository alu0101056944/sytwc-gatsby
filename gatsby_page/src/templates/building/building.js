import * as React from 'react';
import '../../styles/building/building.scss';
import Placeholder from './placeholder';

const Building = ({amountOfPlaceholders = 0, children}) => {
  return (
    <div className="placeholders">
      {
        React.Children.toArray(children)
            .reduce((allPlaceholder, child) => {
                  if (allPlaceholder.length < amountOfPlaceholders) {
                    const KEY =
                        `placeholder-${allPlaceholder.length}`;
                    allPlaceholder.push((
                          <Placeholder key={KEY}>{child}</Placeholder>
                        ));
                  }
                  return allPlaceholder;
                }, [])
      }
    </div>
  )
}

export default Building
