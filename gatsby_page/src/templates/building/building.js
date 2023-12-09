import * as React from 'react';
import '../../styles/building/building.scss';
import Placeholder from './placeholder';
import CardWithScore from './card-with-score';
import { StaticImage } from 'gatsby-plugin-image';

import goods from '../../../content/bienes.json';

const Building = ({amountOfPlaceholders = 0}) => {
  const [allScore, setAllScore] =
      React.useState(new Array(goods.bienes.length).fill(0));
  const [allContent, setAllContent] =
      React.useState(
          goods.bienes
              .map((bien, index) => {
                  return (
                      <>
                        <StaticImage src={`../images/bien${index + 1}.png`}
                                  alt={"Foto del bien cultural."}/>
                        <h5>{bien.nombre}</h5>
                        <p>{bien.antecedentes}</p>
                        <p>Tipo: {bien.tipo.arquitectura}</p>
                        <p>Época: {bien.tipo.época}</p>
                        <p>Localización: {
                              `lat ${bien.localizacion.lat}, long: ${bien.localizacion.long}`
                            }
                        </p>
                      </>
                    )
                })
          );

  // const sort = () => {
  //   setAllPlaceholderInfo(oldValue => {
  //       return [...oldValue.sort((a, b) => b.count - a.count)];
  //     });
  // }

  return (
    <div className="placeholders">
      {
       allContent
          .reduce((allPlaceholder, content, index) => {
              if (allPlaceholder.length < amountOfPlaceholders) {
                const increaseScore = (index) => {
                  allScore[index]++;
                  setAllScore([...allScore]);
                  console.log('increased score');
                  // sort();
                }
                const decreaseScore = (index) => {
                  if (allScore[index] >= 1) {
                    allScore[index]--;
                    setAllScore([...allScore]);
                    // sort();
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
