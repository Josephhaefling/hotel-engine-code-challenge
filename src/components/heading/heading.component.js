import React, { createElement } from 'react';

import Styled from './heading.styled';

const validLevels = [1, 2, 3, 4, 5];

const Heading = ({ children, level }) => {

  const TagType = validLevels.includes(level) ? `h${level}` : 'h1';

  return (
    <Styled.Heading>
      {createElement(TagType, null, children)}
    </Styled.Heading>
  );
};

export default Heading