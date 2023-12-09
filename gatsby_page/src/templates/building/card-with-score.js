import * as React from 'react';
import UserScore from '../user-score';
import Card from './card';

// arrayElementWrapper is a variable reference to the object
// in the parent's content array. It has an "element" property
// referencing this component and another property "count"
// for sorting the arrayElementWrapper in the content array.
const CardWithScore = ({footContent, children, onIncreaseScore, onDecreaseScore,
    index, score = 0}) => {
  return (
    <Card footContent={(
          <>
            <UserScore onIncreaseScore={() => onIncreaseScore(index)}
                onDecreaseScore={() => onDecreaseScore(index)}
                score={score}/>
            {footContent}
          </>
        )}>
      {children}
    </Card>
  )
}

export default CardWithScore
