import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SportsHomePage } from './components/Pages/SportsHomePage';
import { SportsDetailsPage } from './components/Pages/SportsDetailsPage/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SportsHomePage />
        </Route>
        <Route path="/sport/:id">
          <SportsDetailsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
