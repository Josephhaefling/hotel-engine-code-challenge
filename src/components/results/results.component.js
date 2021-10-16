import React from 'react';

//components
import Result from '../result/result.component';

//styles
import Styled from './results.styled';

//packages
import { Link } from 'react-router-dom'

const Results = ({ searchResults }) => {

  const createResultsCards = () => {
    if (searchResults) {
      return searchResults.map(result => {
        return (
          <Link 
            key={result.id} 
            style={{ border: '5px solid white', width: '80%', textDecoration: 'none', color: 'inherit'}}
            to={{
              pathname: `/${result.name}`,
              props: {result: result}
            }}  
          >
            <Result key={result.id} resultInfo={result} />
          </Link>
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