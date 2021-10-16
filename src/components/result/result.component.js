import React from 'react';
import Styled from './result.styled';

//components
import Text from '../text/text.component';

const Result = ({ resultInfo }) => {
  const { language, name, stargazers_count } = resultInfo;
  
  return (
    <Styled.Result>
      <Text color="white" >{name}</Text>
      <Text color="white" >{`Language: ${language}`}</Text>
      <Text color="white" >{`Stars: ${stargazers_count}`}</Text>
    </Styled.Result>
  );
};

export default Result;