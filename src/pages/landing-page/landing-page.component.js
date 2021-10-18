import React from 'react';

//styles
import Styled from './landing-page.styled';

//api calls
import { getRepos } from '../../api/index';

//components
import Button from '../../components/button/button.component';
import Heading from '../../components/heading/heading.component';
import Input from '../../components/input/input.components';
import Text from '../../components/text/text.component';
import Results from '../../components/results/results.component';

const LandingPage = ({ params }) => {
  const {
    filterLanguage, 
    setFilterLanguage,
    filterStars, 
    setFilterStars,
    languageInput,
    setLanguageInput, 
    results,
    setResults,
    topicInput, 
    setTopicInput
  } = params

  const searchGitHub = async () => {
    const queryParams = {filterStars, languageInput, topicInput}
    const data = await getRepos(queryParams) 
    setResults(data?.data?.items)
  }

  const clearSearch = () => {
    setResults()
    setFilterStars(false)
    setFilterLanguage()
    setLanguageInput('')
    setTopicInput('')
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
              label="Language" 
              onClick={() => setFilterLanguage(!filterLanguage)} 
              selected={filterLanguage}
              size="small"
            />
            <Button 
              label="Stars" 
              onClick={() => setFilterStars(!filterStars)} 
              selected={filterStars}
              size="small"
            />
          </Styled.ButtonContainer>
          
          <Input 
            handleChange={handleChange} 
            name="topic" 
            value={topicInput} 
          />
          {
            filterLanguage && 
              <Input 
                handleChange={handleChange} 
                name="language" 
                value={languageInput} 
              />
          }
          <Styled.SearchClearContainer>
            <Button 
              label="Search" 
              onClick={searchGitHub} 
              size="large"
            />
            <Button 
              label="Clear Search" 
              onClick={clearSearch} 
              size="large"
            />
          </Styled.SearchClearContainer>
        </Styled.Body>
      </Styled.SearchContainer>
      <Styled.ResultsContainer>
        <Results searchResults={results} />
      </Styled.ResultsContainer>
    </Styled.LandingPage>
  );
};

export default LandingPage;