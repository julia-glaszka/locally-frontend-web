import React from 'react';

const Navbar = () => {
  return <div
    className="uk-box-shadow-large	"
    uk-sticky="">
    <div>
      <nav className="uk-navbar-container uk-navbar" uk-navbar="">
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="/">Locally</a>
        </div>
        <div className="uk-navbar-right ">
          <ul className="uk-navbar-nav">
            <li className="">
                <span className="uk-visible@m uk-margin-right">Joannah Cz.</span>
                <img
                  src="https://getuikit.com/docs/images/avatar.jpg"
                  width="32px"
                  className="uk-border-circle"
                  alt="user"/>
              <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-right">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <a href="/account/classifieds">Classifieds</a>
                  </li>
                  <li>
                    <a href="/account/pinned">Pinned</a>
                  </li>
                  <li >
                    <a href="/account/pictures">Pictures</a>
                  </li>
                  <li >
                    <a href="/account/announcements">Announcements</a>
                  </li>
                  <li >
                    <a href="/account/groups">Groups</a>
                  </li>
                  <li >
                    <a href="/account/settings">Settings</a>
                  </li>
                  <hr/>
                  <li>
                    <a href="/logout">
                      Log Out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>

}

export default Navbar;
