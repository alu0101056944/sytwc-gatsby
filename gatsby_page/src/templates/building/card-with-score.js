import * as React from 'react';
import UserScore from '../user-score';
import Card from './card';

// arrayElementWrapper is a variable reference to the object
// in the parent's content array. It has an "element" property
// referencing this component and another property "count"
// for sorting the arrayElementWrapper in the content array.
const CardWithScore = ({footContent, children, onScorePress,
    arrayElementWrapper}) => {
  return (
    <Card footContent={(
          <>
            <UserScore onScorePress={onScorePress}
                arrayElementWrapper={arrayElementWrapper}></UserScore>
            {footContent}
          </>
        )}>
      {children}
    </Card>
  )
}

export default CardWithScore
