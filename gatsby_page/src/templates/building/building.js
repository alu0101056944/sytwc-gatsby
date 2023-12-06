import * as React from 'react';
import '../../styles/building/building.scss';
import Placeholder from './placeholder';
import Card from './card';
import { StaticImage } from 'gatsby-plugin-image';

import goods from '../../../content/bienes.json';

const createCardFromGood = (good) => (
  <Card>
    <StaticImage src={good.img} alt={"Foto del bien cultural."}/>
    <h2>{good.nombre}</h2>
    <p>{good.antecedentes}</p>
    <p>Tipo: {good.tipo.arquitectura}</p>
    <p>Época: {good.tipo.época}</p>
    <p>Localización: {`lat ${good.localizacion.lat}, long: ${good.localizacion.long}`}</p>
  </Card>
)

const Building = ({amountOfPlaceholders = 0, children}) => {
  const [allPlaceholderContent, setPlaceholderContent] = React.useState([]);

  React.useEffect(() => {
        const withExtraContent = [
              ...goods.bienes.map(bien => createCardFromGood(bien)),
              ...React.Children.toArray(children)
            ];
        setPlaceholderContent(withExtraContent);
      }, [children]); // empty array means only run this once per component mount

  return (
    <div className="placeholders">
      {
       allPlaceholderContent
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
