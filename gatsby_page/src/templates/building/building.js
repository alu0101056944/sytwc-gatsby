import * as React from 'react';
import '../../styles/building/building.scss';
import Placeholder from './placeholder';
import CardWithScore from './card-with-score';
import { StaticImage } from 'gatsby-plugin-image';

import goods from '../../../content/bienes.json';

const Building = ({amountOfPlaceholders = 0, children}) => {
  const [allPlaceholderInfo, setAllPlaceholderInfo] = React.useState([]);

  // meant for allowing content to implement a score. Content receives this as
  // a prop.
  const notifyScoreChange = (newScore, arrayElementWrapper) => {
    arrayElementWrapper.count = newScore;
    setAllPlaceholderInfo(oldValue => {
          console.log(oldValue.sort((a, b) => b.count - a.count));
          return oldValue.sort((a, b) => b.count - a.count);
        });
  }

  const createCardFromGood = (good, arrayElementWrapper) => (
        <CardWithScore
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
        setAllPlaceholderInfo([
              ...goods.bienes
                  .map((bien) => {
                    const elementWrapper = {
                      count: 0,
                    }
                    elementWrapper.element =
                        createCardFromGood(bien, elementWrapper);
                    return elementWrapper;
                  }),
              ...React.Children.toArray(children)
                  .map(child => ({ count: 0, element: child }))
            ]);
      }, []);

  return (
    <div className="placeholders">
      {
       allPlaceholderInfo
            .reduce((allPlaceholder, info) => {
                  if (allPlaceholder.length < amountOfPlaceholders) {
                    const KEY = `placeholder-${allPlaceholder.length}`;
                    allPlaceholder.push((
                          <Placeholder key={KEY}>{info.element}</Placeholder>
                        ));
                  }
                  return allPlaceholder;
                }, [])
      }
    </div>
  )
}

export default Building
