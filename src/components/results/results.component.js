import React from 'react';
import Result from '../result/result.component';

const Results = ({ searchResults }) => {

  const createResultsCards = () => {
    if (searchResults) {
      return searchResults.map(result => <Result key={result.id} resultInfo={result} />)
    }
  }


  const results = createResultsCards();

  return (
    <div>
      {results}
    </div>
  )
}

export default Results;