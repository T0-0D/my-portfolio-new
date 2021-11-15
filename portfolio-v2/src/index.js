import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import Header from './components/Header.js'
import Home from './Home'
import Activities from './Activities'
import Music from './Music'



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/Activities" component={Activities} />
        <Route exact path="/Music" component={Music} />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();