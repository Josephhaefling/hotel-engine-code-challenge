import React, { useEffect, useState } from 'react';

//api calls
import { getRetros } from '../api/index';

//components
import Button from '../components/button/button.component';
import Card from '../components/card/card.component';
import Checkbox from '../components/checkbox/checkbox.component';
import Heading from '../components/heading/heading.component';
import Input from '../components/input/input.components';
import Text from '../components/text/text.component';
import Results from '../components/results/results.component';

const LandingPage = () => {
  const [results, setResults] = useState([]);
  const [topicInput, setTopicInput] = useState('');

  const searchGitHub = async () => {
    const queryParams = {topicInput}
    const data = await getRetros(queryParams) 
    setResults(data?.data?.items)
  }

  const handleChange = (e) => {
    setTopicInput(e.target.value)
  };

  return (
    <div>
      <Card>
        <form>
          <Card.Header>
            <Heading level={1}>Welcome to Git Search</Heading>
          </Card.Header>
          <Card.Body>
            <Text>What are you looking for?</Text>
            <Button label="language" />
            <Button label="stars" />
            <Input handleChange={handleChange} value={topicInput} />
          </Card.Body>
          <Card.Footer>
            <Button label="Search" onClick={searchGitHub} />
          </Card.Footer>
      </form>
      </Card>
      <Results searchResults={results} />
    </div>
  )
};

export default LandingPage;