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
  const [filterLanguage, setFilterLanguage] = useState(false);
  const [filterStars, setFilterStars] =useState(false);
  const [languageInput, setLanguageInput] = useState('');
  const [results, setResults] = useState([]);
  const [topicInput, setTopicInput] = useState('');

  const searchGitHub = async () => {
    const queryParams = {filterStars, languageInput, topicInput}
    const data = await getRetros(queryParams) 
    setResults(data?.data?.items)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'topic':
        setTopicInput(value);
        break;
      case 'language':
        setLanguageInput(value)
        break;
      case 'stars':
        setFilterStars(value)
        break;
      default:
        return null; 
    }
  };
  console.log('filters', filterStars)
  return (
    <div>
      <Card>
        <form>
          <Card.Header>
            <Heading level={1}>Welcome to Git Search</Heading>
          </Card.Header>
          <Card.Body>
            <Text>What are you looking for?</Text>
            <Button label="language" onClick={() => setFilterLanguage(!filterLanguage)} />
            <Button label="stars" onClick={() => setFilterStars(!filterStars)} />
            <Input handleChange={handleChange} name="topic" value={topicInput} />
            {
              filterLanguage && 
                <Input handleChange={handleChange} name="language" value={languageInput} />
            }
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