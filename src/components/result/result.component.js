import React from 'react';

const Result = ({ resultInfo }) => {
  const { language, name } = resultInfo;

  return (
    <div>
      <p>{name}</p>
      <p>{language}</p>
    </div>
  )
}

export default Result;