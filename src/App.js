import './App.css';

//components
import DetailsPage from './pages/details-page.component';
import LandingPage from './pages/landing-page.component';

//packages
import { Switch, Route, withRouter } from 'react-router-dom';


function App() {  
  return (
    <Switch>
      <Route path='/:repoName' render={(routeProps) => {
          const result = routeProps.location.props.result;
          return <DetailsPage result={result} />}
        } 
      />
      <Route path='/' render={(routeProps) => <LandingPage />} />
    </Switch>
  );
}

export default withRouter(App);
