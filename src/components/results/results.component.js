import React from 'react';

//components
import Result from '../result/result.component';

//styles
import Styled from './results.styled';


const Results = ({ searchResults }) => {

  const createResultsCards = () => {
    if (searchResults) {
      return searchResults.map(result => {
        return (
          <Styled.ResultLink 
            key={result.id} 
            to={{
              pathname: `/${result.name}`,
              props: {result: result}
            }}  
          >
            <Result key={result.id} resultInfo={result} />
          </Styled.ResultLink>
        );
      });
    }
  };


  const results = createResultsCards();

  return (
    <Styled.Results>
      {results}
    </Styled.Results>
  );
};

export default Results;