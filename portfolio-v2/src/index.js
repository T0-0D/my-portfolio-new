import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import of components
import Header from './components/Header.js'
import Section from './components/Section.js'
import ContentBox from './components/ContentBox.js'
import About from './About.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="contents">
      <Section name="About"/>
      <ContentBox>
        <About />
      </ContentBox>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
