//Dependencies
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
//Routes
//Components
import Header from './components/Header/Header'
//Context
//Pages
import LandingPage from './pages/LandingPage'
function App() {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
    </Router>
  );
}

export default App;
