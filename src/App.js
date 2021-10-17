import React, { useState } from 'react';

//styles
import './App.css';

//components
import DetailsPage from './pages/details-page/details-page.component';
import LandingPage from './pages/landing-page/landing-page.component';

//packages
import { Switch, Route, withRouter } from 'react-router-dom';

function App() {  

  const [filterLanguage, setFilterLanguage] = useState(false);
  const [filterStars, setFilterStars] =useState(false);
  const [languageInput, setLanguageInput] = useState('');
  const [results, setResults] = useState();
  const [topicInput, setTopicInput] = useState('');

  //State Object
  const params = {
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
  }

  return (
    <Switch>
      <Route path='/:repoName' render={(routeProps) => {
          const result = routeProps.location.props.result;
          return <DetailsPage result={result} />
          }
        } 
      />
      <Route path='/' render={() => <LandingPage params={params} />}  />
    </Switch>
  );
}

export default withRouter(App);
