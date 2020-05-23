import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import UserProfilePage from './pages/UserProfilePage';
import NotFoundPage from './pages/NotFoundPage.js';
import ClassifiedsManagementPage from './pages/ClassifiedsManagementPage';


ReactDOM.render(
  <React.StrictMode>
  
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} key="main"/>
        <Route path="/user/:id" component={UserProfilePage} key="profile" />
        <Route path="/account/classifieds" component={ClassifiedsManagementPage} key="ownClassifieds" />
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    

    </div>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
