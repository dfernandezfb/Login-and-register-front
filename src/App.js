//Dependencies
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
//Routes
//Components
import Header from './components/Header/Header'
//Context
import AuthState from './context/Auth/authState'
import UserState from './context/User/userState'
//Pages
import LandingPage from './pages/LandingPage'
import UsersPage from './pages/UsersPage'
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
          </Switch>
        </UserState>
      </AuthState>
    </Router>
  );
}

export default App;
