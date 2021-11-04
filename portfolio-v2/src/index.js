import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import Header from './components/Header.js'
import Home from './Home'
import Product from './Product'
import Music from './Music'



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/Product" component={Product} />
        <Route exact path="/Music" component={Music} />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();