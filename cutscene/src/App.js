import './App.css';
import Navibar from './Navbar.js';
import BrowsePage from './BrowsePage.js';
import ClipPage from './ClipPage.js';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
      <div>
      <Navibar />
      <div>
      <Switch>
      <Route exact path="/browse">
      <BrowsePage />
      </Route>
      <Route exact path="/works">
      <ClipPage />
      </Route>
      </Switch>
      </div>
      </div>
      </Router>
  );
}

export default App;
