//Dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
//Routes
//Components
import Header from './components/Header/Header'
//Context
import AuthState from './context/Auth/authState'
import authToken from './config/token'
//Pages
import LandingPage from './pages/LandingPage'
import UsersPage from './pages/UsersPage'
//PrivateRoute
import PrivateRoute from './routes/PrivateRoute'

const token= localStorage.getItem('token');
if(token)
{
  authToken(token);
}
function App() {
  return (
    <Router>
      <AuthState>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute exact path="/users" component={UsersPage}/>
        </Switch>
      </AuthState>
    </Router>
  );
}

export default App;
