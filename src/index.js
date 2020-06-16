import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import { AuthProvider } from './components/auth/AuthProvider.js'
import { App } from './App';
const Application = () => {

  return (<React.StrictMode>
              <AuthProvider>
                  <App/>
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
