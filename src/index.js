import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//注意: react-router-domはver.^5.3.0を指定してインストールしないとrouteが動かない
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './Home';
import Projects from './Projects';
import Activities from './Activities';
import './index.css';

console.log(process.env.PUBLIC_URL)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
        <div className="pageBody">
          <Route exact path="/" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Activities" component={Activities} />
        </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
