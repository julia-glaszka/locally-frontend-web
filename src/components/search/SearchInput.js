import React from 'react';
import {useHistory} from "react-router-dom";
import useDebounce from './useDebounce.js'
import classNames from "classnames";
import './search.css'
const SearchInput = () => {
  let [suggestions,
    setSuggestions] = React.useState([]);
  let [isExpanded,
    setIsExpanded] = React.useState(false);
  const [searched,
    setSearched] = React.useState("");

  let history = useHistory();

  function handleSelect(suggestion) {
    console.log(suggestion)
    setSearched(suggestion)

  }
  function onSearchSubmit(e) {
    e.preventDefault()
    console.log("his", history)
    console.log("searched", searched)
    let query = searched.replace(/%20/g," ");
    if (history && searched) {
      history.push({
        pathname: '/offers',
        search: '?title=' + query
      })
    }
 
  }
  const debouncedSearchTerm = useDebounce(searched, 500);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      searchSuggestions(debouncedSearchTerm).then(results => {
        setSuggestions(results);
        if (results.length > 0) {
          setIsExpanded(true)
        } else {
          setIsExpanded(false);

        }
      });
    } else {
      setSuggestions([]);
      setIsExpanded(false);
    }
  }, [debouncedSearchTerm]);

  return <form id="search-form" action="" onSubmit={onSearchSubmit}>
      <div className="uk-inline uk-width-1-1">
        <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
        <div className="uk-position-relative">
          <input
            type="search"
            value={searched}
            onChange={e => setSearched(e.target.value)}
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
                  onClick={e => handleSelect(suggestion)}>
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

export default SearchInput;
