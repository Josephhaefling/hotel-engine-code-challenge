import React from 'react';

//components
import Result from '../result/result.component';
import Text from '../text/text.component';

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

  const getResults = () => {
    if(searchResults) { 
      return searchResults.length > 0 ?
        createResultsCards(searchResults) :
        <Text>
          Opps, it looks like there are no results for that search.
        </Text>
    } else {
      return ''
    }
  }

  const results = getResults();
  return (
    <Styled.Results>
      {results}
    </Styled.Results>
  );
};

export default Results;