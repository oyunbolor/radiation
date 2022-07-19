import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
