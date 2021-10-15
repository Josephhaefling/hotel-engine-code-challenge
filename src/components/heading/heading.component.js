import React, { createElement } from 'react';

const validLevels = [1, 2, 3, 4, 5];

const Heading = ({ children, level }) => {

  const TagType = validLevels.includes(level) ? `h${level}` : 'h1';

  return (
    <div>
      {createElement(TagType, null, children)}
    </div>
  )
}

export default Heading