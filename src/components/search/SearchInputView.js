import React from 'react';
import {useHistory} from "react-router-dom";
import useDebounce from './useDebounce.js'
import classNames from "classnames";
const SearchInputView = ({onChange, isExpanded, searched, handleSelect,onSearchSubmit, suggestions}) => {

  return <form id="search-form" action="" onSubmit={onSearchSubmit}>
      <div className="uk-inline uk-width-1-1">
        <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
        <div className="uk-position-relative">
          <input
            type="search"
            value={searched}
            onChange={onChange}
            placeholder="Type your search"
            className={classNames("uk-border-pill", 
            "uk-input", "uk-width-1-1", 
            "search-fld", "uk-padding-remove-bottom",
            { whenVisible: isExpanded }
            )}          
            autoFocus/>

          <div
          className="suggestion-container">
            <ul
              className={classNames("default-list", "uk-background-primary", { 
              whenVisible: isExpanded,
              whenInvisible: !isExpanded
              }
              )}>
              { suggestions
                ? suggestions.map(suggestion => 
                <li
                  onClick={() => handleSelect(suggestion)}>
                  {suggestion}
                </li>)
                : ""}
            </ul>
          </div>

        </div>
      </div>
    </form>

 ;

}

function searchSuggestions(searched) {
  return fetch(`http://localhost:3333/suggest?q=${searched}`)
    .then(r => r.json())
    .then(r => r[0].suggestions)
    .catch(error => {
      console.error(error);
      return [];
    });
}

export default SearchInputView;
