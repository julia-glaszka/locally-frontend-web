import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/common/Navbar.js';
import CustomFooter from './components/common/CustomFooter.js';
import './index.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { routes } from "./config/routes.js";
require('moment/locale/pl')

const moment = require('moment')

ReactDOM.render(
  <React.StrictMode>
      <Navbar/>

  <Router>
    <div style={{minHeight: "100vh"}}>
      <Routes>
      {routes.map(route => (
        <Route {...route} />
      ))}
      </Routes>
    </div>
  </Router>
  <CustomFooter/>

  </React.StrictMode>,
  document.getElementById('root')
);

// Wybacz to nagłe wtargniecie.. ale chciałem sprawdzić jak działa kontrybuowanie :3

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
