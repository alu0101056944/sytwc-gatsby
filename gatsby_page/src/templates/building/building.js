import * as React from 'react';
import '../../styles/building/building.scss';
import Placeholder from './placeholder';
import CardWithScore from './card-with-score';

const Building = ({amountOfPlaceholders = 0, content = [],
      contentTransform = () => {}}) => {
  const [allScore, setAllScore] =
      React.useState(new Array(content.length).fill(0));
  const [allContent, setAllContent] =
      React.useState(content.map(contentTransform));

  return (
    <div className="placeholders">
      {
       allContent.reduce((allPlaceholder, content, index) => {
          if (allPlaceholder.length < amountOfPlaceholders) {
            const sort = () => {
              const allCombined =
                  allScore.map((score, index) => {
                        return {
                            score,
                            element: allContent[index],
                          }
                      });
              const allSorted =
                  [...allCombined.sort((a, b) => b.score - a.score)];
              setAllContent([...allSorted.map(_ => _.element)]);
              setAllScore([...allSorted.map(_ => _.score)]);
            }

            const increaseScore = (index) => {
              allScore[index]++;
              sort();
            }

            const decreaseScore = (index) => {
              if (allScore[index] >= 1) {
                allScore[index]--;
                sort();
              }
            }

            allPlaceholder.push((
                <Placeholder
                    key={`placeholder-${allPlaceholder.length}`}>
                  <CardWithScore
                      onIncreaseScore={increaseScore}
                      onDecreaseScore={decreaseScore}
                      index={index}
                      score={allScore[index]}>
                    {content}
                  </CardWithScore>
                </Placeholder>
              ));
          }
          return allPlaceholder;
        }, [])
      }
    </div>
  )
}

export default Building
