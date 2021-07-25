import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
