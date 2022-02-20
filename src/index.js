import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//注意: react-router-domはver.^5.3.0を指定してインストールしないとrouteが動かない
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Home from './Home';
import Projects from './Projects';
import Activities from './Activities';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Activities" component={Activities} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
