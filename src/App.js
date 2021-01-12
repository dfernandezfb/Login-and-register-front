//Dependencies
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
//Routes
//Components
import Header from './components/Header/Header'
//Context
import AuthState from './context/Auth/authState'
import UserState from './context/Users/userState'
//Pages
import LandingPage from './pages/LandingPage'
import UsersPage from './pages/UsersPage'
import GraphsPage from './pages/GraphsPage'
//Routes
import PrivateRoute from './routes/PrivateRoute'
import PublicRoute from './routes/PublicRoute'

function App() {
  return (
    <Router>
      <AuthState>
        <Header />
        <UserState>
          <Switch>
            <PublicRoute exact path="/" component={LandingPage} />
            <PrivateRoute exact path="/users" component={UsersPage} />
            <PrivateRoute exact path="/graphs" component={GraphsPage} />
          </Switch>
        </UserState>
      </AuthState>
    </Router>
  );
}

export default App;
