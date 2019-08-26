import React from 'react';
import './App.scss';
import Header from './Header/Header';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import Shorten from './pages/Shorten/Shorten';
import Expand from './pages/Expand/Expand';

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Switch>
          <Route path="/shorten" component={Shorten} />
          <Route path="/expand" component={Expand} />
          <Redirect from="*" to="/shorten" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
