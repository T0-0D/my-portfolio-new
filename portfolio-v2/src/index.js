import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import components
import App from './components/About.js';
import Header from './components/Header.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();