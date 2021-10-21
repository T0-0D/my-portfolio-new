import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css';
import Header from './components/Header.js'
import About from './pages/About'
import Learning from './pages/Learning'
import Music from './pages/Music'



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/Learning" component={Learning} />
        <Route exact path="/Music" component={Music} />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();