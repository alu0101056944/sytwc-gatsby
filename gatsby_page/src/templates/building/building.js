import * as React from 'react';
import '../../styles/building/building.scss';
import Placeholder from './placeholder';
import CardWithScore from './card-with-score';
import { StaticImage } from 'gatsby-plugin-image';

import goods from '../../../content/bienes.json';

const Building = ({amountOfPlaceholders = 0, children}) => {
  const [allPlaceholderInfo, setPlaceholderInfo] = React.useState([]);

  // meant for allowing content to implement a score. Content receives this as
  // a prop.
  const notifyScoreChange = (newScore, arrayElementWrapper) => {
    arrayElementWrapper.count = newScore;
    setPlaceholderInfo(allPlaceholderInfo.sort((a, b) => a.count - b.count));
  }

  const createCardFromGood = (good, indexForKey, arrayElementWrapper) => (
        <CardWithScore key={`cardgood${indexForKey}`}
            onScorePress={notifyScoreChange}
            arrayElementWrapper={arrayElementWrapper}>
          <StaticImage src={good.img} alt={"Foto del bien cultural."}/>
          <h5>{good.nombre}</h5>
          <p>{good.antecedentes}</p>
          <p>Tipo: {good.tipo.arquitectura}</p>
          <p>Época: {good.tipo.época}</p>
          <p>Localización: {
                `lat ${good.localizacion.lat}, long: ${good.localizacion.long}`
              }
          </p>
        </CardWithScore>
      )

  React.useEffect(() => {
        setPlaceholderInfo([
              ...goods.bienes
                  .map((bien, index) => {
                    const elementWrapper = {
                      count: 0,
                    }
                    elementWrapper.element =
                        createCardFromGood(bien, index, elementWrapper);
                    return elementWrapper;
                  }),
              ...React.Children.toArray(children)
                  .map(child => ({ element: child, count: 0 }))
            ]);
      }, [children]);

  return (
    <div className="placeholders">
      {
       allPlaceholderInfo
            .reduce((allPlaceholder, content) => {
                  if (allPlaceholder.length < amountOfPlaceholders) {
                    const KEY = `placeholder-${allPlaceholder.length}`;
                    allPlaceholder.push((
                          <Placeholder key={KEY}>{content}</Placeholder>
                        ));
                  }
                  return allPlaceholder;
                }, [])
      }
    </div>
  )
}

export default Building
