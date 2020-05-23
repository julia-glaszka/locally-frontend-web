import React from 'react';

const CustomNavbar = () => {
  return <div
    className="uk-box-shadow-large	"
    uk-sticky="animation: uk-animation-slide-top;">
    <div>
      <nav className="uk-navbar-container uk-navbar" uk-navbar="">
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="/">Locally</a>
        </div>

        <div className="uk-navbar-center">
          <form id="search-form" action="">
            <div className="uk-inline uk-width-1-1">
              <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
              <input
                className="uk-border-pill uk-input  uk-form-blank uk-width-1-1 search-fld"
                type="text"
                placeholder="Type your search"
                autoFocus/>
              <a
                href="#"
                className="search-filter"
                data-uk-filter-control="[data-tags*='']"
                hidden>Search</a>
            </div>
          </form>
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
                    <a href="/classifieds">Classifieds</a>
                  </li>
                  <li>
                    <a href="/pinned">Pinned</a>
                  </li>
                  <li >
                    <a href="/pictures">Pictures</a>
                  </li>
                  <li >
                    <a href="/announcements">Announcements</a>
                  </li>
                  <li >
                    <a href="/groups">Groups</a>
                  </li>
                  <li >
                    <a href="/settings">Settings</a>
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

export default CustomNavbar;
