import React from 'react';
import './App.scss';
import Header from './Header/Header';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Shorten from './pages/Shorten/Shorten';
import Expand from './pages/Expand/Expand';

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Switch>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Route path="/shorten" exact component={Shorten} />
            <Route path="/expand" exact component={Expand} />
            <Route path="/" exact component={Shorten} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
