import React from 'react';
import Styled from './result.styled';

//components
import Text from '../text/text.component';

const Result = ({ resultInfo }) => {
  const { language, name, stargazers_count } = resultInfo;
  
  return (
    <Styled.Result>
      <Text>{name}</Text>
      <Text>{`Language: ${language}`}</Text>
      <Text>{`Stars: ${stargazers_count}`}</Text>
    </Styled.Result>
  );
};

export default Result;