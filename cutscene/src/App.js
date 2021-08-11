import Navibar from './Navbar.js';
import Footer  from './Footer.js';
import SignUp from './SignupPage';
import Login from './LoginPage';
import BrowsePage from './BrowsePage.js';
import ClipPage from './ClipPage.js';
import CreatePage from './CreatePage.js'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext.js'

function App() {
  return (
    <Router>
      <AuthProvider>
      <div>
      <Navibar />
      <div>
      <Switch>
      <Route exact path="/" component={BrowsePage} />
      <Route exact path="/works/:clipId" component={ClipPage} />
      <Route exact path="/create" component={CreatePage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      </Switch>
      </div>
      <Footer />
      </div>
      </AuthProvider>
      </Router>
  );
}

export default App;
