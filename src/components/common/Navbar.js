import React from 'react';
import {  AuthContext } from '../auth/AuthProvider.js'
import {useHistory } from 'react-router-dom'

import AvatarNavButton from './AvatarNavButton';
const Navbar = () => {
  const {state, dispatch} = React.useContext(AuthContext);
  const { isLoggedIn, error } = state;
  // let isLoggedIn = true
  console.log("hey", state)
  let history = useHistory()
  return <div
    className="uk-box-shadow-large"
    uk-sticky="">
    <div>
      <nav className="uk-navbar-container uk-navbar" uk-navbar="">
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="/">Locally</a>
          {isLoggedIn ? 
          <span className="uk-navbar-item uk-logo">Zalogowany</span>
          : <a href="/auth" className="uk-navbar-item uk-logo">Zaloguj sie</a>
          }
        </div>
        <div className="uk-navbar-right ">
         <AvatarNavButton/>
        </div>
      </nav>
    </div>
  </div>

}


export default Navbar;
