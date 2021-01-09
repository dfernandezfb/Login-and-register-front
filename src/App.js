//Dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
//Routes
//Components
import Header from './components/Header/Header'
//Context
import AuthState from './context/Auth/authState'
//Pages
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <AuthState>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </AuthState>
    </Router>
  );
}

export default App;
