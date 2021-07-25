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
      <Switch>
      <div>
      <Navibar />
      <div>
      
      <Route exact path="/">
      <BrowsePage />
      </Route>
      <Route path="/works/:clipId">
      <ClipPage />
      </Route>
      
      </div>
        </div>
        </Switch>
      </Router>
  );
}

export default App;
