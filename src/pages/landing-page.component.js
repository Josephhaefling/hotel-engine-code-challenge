import React, { useState } from 'react';

//styles
import Styled from './landing-page.styled';

//api calls
import { getRepos } from '../api/index';

//components
import Button from '../components/button/button.component';
import Heading from '../components/heading/heading.component';
import Input from '../components/input/input.components';
import Text from '../components/text/text.component';
import Results from '../components/results/results.component';
import { useEffect } from 'react/cjs/react.development';

const LandingPage = () => {
  const [filterLanguage, setFilterLanguage] = useState(false);
  const [filterStars, setFilterStars] =useState(false);
  const [languageInput, setLanguageInput] = useState('');
  const [results, setResults] = useState();
  const [topicInput, setTopicInput] = useState('');

  const searchGitHub = async () => {
    const queryParams = {filterStars, languageInput, topicInput}
    const data = await getRepos(queryParams) 
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

  useEffect(() => {
      console.log('useEffect ran', { results })
  }, [results, setResults])

  return (
    <Styled.LandingPage>
      <Styled.SearchContainer>
        <Styled.Header>
          <Heading level={1}>Welcome to Git Search</Heading>
        </Styled.Header>
        <Styled.Body>
          <Text>What are you looking for today?</Text>
          <Styled.ButtonContainer>
            <Button 
              label="language" 
              onClick={() => setFilterLanguage(!filterLanguage)} 
              selected={filterLanguage}
              size="small"
            />
            <Button 
              label="stars" 
              onClick={() => setFilterStars(!filterStars)} 
              selected={filterStars}
              size="small"
            />
          </Styled.ButtonContainer>
          
          <Input handleChange={handleChange} name="topic" value={topicInput} />
          {
            filterLanguage && 
              <Input handleChange={handleChange} name="language" value={languageInput} />
          }
          <Button 
            label="Search" 
            onClick={searchGitHub} 
            size="large"
          />
        </Styled.Body>
      </Styled.SearchContainer>
      <Results searchResults={results} />
    </Styled.LandingPage>
  )
};

export default LandingPage;