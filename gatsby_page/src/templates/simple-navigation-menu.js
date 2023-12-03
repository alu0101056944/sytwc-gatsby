import * as React from 'react';
import { Link } from 'gatsby';
import '../styles/simple-navigation-menu.scss';

const SimpleNavigationMenu = ({links}) => {
  if (!links) {
    throw new TypeError('Did not pass any link info object into links for' +
        'the simple navigation menu');
  } else if (!Array.isArray(links)) {
    throw new TypeError('Passed non array as prop to Navigatio component.');
  } else if ((links.length !== 0 && !links[0].to) ||
             (links.length !== 0 && !links[0].text)) {
    throw new TypeError('links prop is an array but elements do not contain to or text.');
  }

  return (
    <>
      {
        links.map((linkInfo, index) => (
              <Link className="simpleLink" key={index} to={linkInfo.to}>{linkInfo.text}</Link>
            ))
      }
    </>
  );
}

export default SimpleNavigationMenu
