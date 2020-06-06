import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/common/Navbar.js';
import CustomFooter from './components/common/CustomFooter.js';
import './index.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { routes } from "./config/routes.js";
import ProtectedRoute from './components/auth/ProtectedRoute.js';
import { AuthProvider, authReducer, authState } from './components/auth'
const Application = () => {
  const useAuth = React.useReducer(authReducer, authState);
  return (<React.StrictMode>
          <AuthProvider value={useAuth}>
            <Navbar/>
            <Router>
              <div style={{minHeight: "100vh"}}>
                <Switch>
                {routes.map(route => (
                (route.protected === true) ? <ProtectedRoute {...route} />: <Route {...route} />
                ))}
                </Switch>
              </div>
            </Router>
            <CustomFooter/>
          </AuthProvider>
  </React.StrictMode>)
}
ReactDOM.render(
  <Application/>,
  document.getElementById('root')
);

// Wybacz to nagłe wtargniecie.. ale chciałem sprawdzić jak działa kontrybuowanie :3

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
