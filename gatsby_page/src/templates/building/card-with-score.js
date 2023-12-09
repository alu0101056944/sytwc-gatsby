import * as React from 'react';
import UserScore from '../user-score';
import Card from './card';

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
