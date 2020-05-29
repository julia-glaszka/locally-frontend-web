import React from 'react';


const CustomFooter = () => {
    return    <footer className="uk-section uk-vertical-align-bottom uk-section-primary  uk-padding-remove-bottom">
    <div className="uk-container">
      <div className="uk-grid uk-grid-large">
        <div className="uk-width-2-3@m">
          <h5>OUR COMPANY</h5>
          <p>
            A platform that will make your life easier in the local society. You will find
            ads, local photos and local government announcements.</p>
        </div>
        <div className="uk-width-1-3@m">
          <h5 className="uk-margin-medium-top">LOCALLY</h5>
          <ul className="uk-list">
            <li><a href="/offers">Marketplace</a></li>
            <li><a href="/gallery">Pictures</a></li>
            <li><a href="/announcements">Announcements</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div className="uk-text-center uk-padding">
      <span className="uk-text-small uk-text-muted">© 2020  &nbsp;
        <a href="/">Locally</a>
      </span>
    </div>
  </footer>


}

export default CustomFooter;
