import React from 'react';
import Gallery from './components/gallery/Gallery.js';
import './App.css';
import css from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit/dist/js/uikit.js'

import {
  Button,
  NavItem,
  NavbarDropdown,
  Link,
  Image,
  Container,
  OffcanvasContainer,
  Navbar,
  NavbarContainer,
  NavbarSticky,
  Section
} from 'uikit-react';
import ClassifiedsPanel from './components/classifieds-panel/ClassifiedsPanel.js';
// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
function App() {
  return (
    <OffcanvasContainer>
      <Section>
        <NavbarSticky
          className="uk-box-shadow-large	"
          options="animation: uk-animation-slide-top;">
          <NavbarContainer>
            <div className="uk-navbar-left">
              <a class="uk-navbar-item uk-logo" href="#">Locally
              </a>
            </div>

            <div className="uk-navbar-center">
              <form id="search-form" action="">
                <div class="uk-inline uk-width-1-1">
                  <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
                  <input
                    class="uk-border-pill uk-input  uk-form-blank uk-width-1-1 search-fld"
                    type="text"
                    placeholder="Type your search"
                    autofocus/>
                  <a
                    href="#"
                    class="search-filter"
                    data-uk-filter-control="[data-tags*='']"
                    hidden>Search</a>
                </div>
              </form>
            </div>

            <Navbar right>
              <NavItem>
                <Link>
                  <span class="uk-visible@m uk-margin-right">Joannah Cz.</span>
                  <Image
                    src="https://getuikit.com/docs/images/avatar.jpg"
                    width="32px"
                    className="uk-border-circle"></Image>
                </Link>
                <NavbarDropdown>
                  <NavItem>

                    <Link href="#">
                      Classifieds
                    </Link>

                    <Link href="#">
                      Pinned
                    </Link>
                    <Link href="#">
                      Pictures
                    </Link>
                    <Link href="#">
                      Announcements
                    </Link>
                    <Link href="#">
                      Groups
                    </Link>
                    <Link href="#">
                      Settings
                    </Link>
                    <hr/>
                    <Link href="#">
                      Log Out
                    </Link>
                  </NavItem>
                </NavbarDropdown>
              </NavItem>

            </Navbar>
          </NavbarContainer>

        </NavbarSticky>

        <Container>
          <ClassifiedsPanel></ClassifiedsPanel>
          <Gallery/>
        </Container>
      </Section>
      <footer class="uk-section uk-section-primary uk-padding-remove-bottom">
        <div class="uk-container">
          <div class="uk-grid uk-grid-large" data-uk-grid>
            <div class="uk-width-2-3@m">
              <h5>OUR COMPANY</h5>
              <p>
                A platform that will make your life easier in the local society. You will find
                ads, local photos and local government announcements.</p>

            </div>
            <div class="uk-width-1-3@m">
              <h5>LOCALLY</h5>
              <ul class="uk-list">
                <li>Marketplace</li>
                <li>Pictures</li>
                <li>Announcements</li>
              </ul>
            </div>

          </div>
        </div>

        <div class="uk-text-center uk-padding">
          <span class="uk-text-small uk-text-muted">© 2020
            <a href="#">Locally</a>
          </span>
        </div>
      </footer>
    </OffcanvasContainer>

  );
}

export default App;
