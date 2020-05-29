import React from 'react';
import "./search.scss"
import SearchInput from './SearchInput.js';
const SearchBox = () => {

  return <div className="uk-section uk-vertical-align-bottom uk-section-primary  ">
    <div className="uk-container">
        {/* it will be redesigned -structure, control */}
      <div >
        <h3>SEARCH WHAT YOU NEED</h3>
      </div>
      <div className="uk-grid uk-margin-remove-left">

        <div className="uk-width-1-2@m uk-padding-small">
          <SearchInput/>

        </div>

        <div className="uk-width-1-3@s uk-width-1-6@m uk-padding-small">
          <input className="uk-input uk-border-pill" type="text" placeholder="Min price" disabled/>
        </div>
        <div className="uk-width-1-3@s uk-width-1-6@m uk-padding-small">
          <input className="uk-input uk-border-pill" type="text" placeholder="Max price" disabled/>
        </div>
        <div className="uk-width-1-3@s uk-width-1-6@m uk-padding-small">
          <button className="uk-button uk-button-default uk-border-pill" disabled>Search</button>

        </div>

      </div>
    </div>

  </div>
}

export default SearchBox;
