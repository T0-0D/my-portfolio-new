import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import of components
import Header from './components/Header.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Leaning />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
