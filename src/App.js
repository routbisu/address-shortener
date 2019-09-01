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
  console.log('Environment', process.env.NODE_ENV);
  console.log('Base Url', process.env.BASE_URL);

  return (
    <div className="main-container">
      <Router>
        <Header />
        <Switch>
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Route path="/shorten" component={Shorten} />
            <Route path="/expand" component={Expand} />
            <Redirect from="*" to="/shorten" />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
