//Dependencies
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Routes
//Components
//Context
//Pages
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </Router>
  );
}

export default App;
