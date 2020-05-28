import React from 'react';
import {useHistory} from "react-router-dom";

import useDebounce from './useDebounce.js'
const SearchBox = () => {
  let [suggestions,
    setSuggestions] = React.useState([]);
  let [isExpanded,
    setIsExpanded] = React.useState(false);
  const [searched,
    setSearched] = React.useState("");

  let history = useHistory();

  let defaultList = {
    backgroundColor: "white",
    height: "auto",
    transition: " 0.3s ease",
    marginTop: 0,
    listStyleType: "none",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    boxSizing: "border-box",
    padding: 0,
    paddingLeft: "10px"

  }
  let whenVisible = {
    ...defaultList,
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: "100%",
    padding: "10px",
    boxShadow: "0 10px 10px rgba(0,0,0,0.3)"

  }
  let whenInvisible = {
    ...defaultList
  }
  function handleSelect(suggestion) {
    console.log(suggestion)
    setSearched(suggestion)

  }

  let input = {
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px"
  }
  function onSearchSubmit() {
    history.push({
      pathname: '/classifieds',
      search: '?title=' + searched
    })
  }
  const debouncedSearchTerm = useDebounce(searched, 500);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      searchSuggestions(debouncedSearchTerm).then(results => {
        setSuggestions(results);
        if (results.length > 0) {
          setIsExpanded(true)
        }
      });
    } else {
      setSuggestions([]);
      setIsExpanded(false);
    }
  }, [debouncedSearchTerm]);

  return <div className="uk-navbar-center">
    <form id="search-form" action="" onSubmit={onSearchSubmit}>
      <div className="uk-inline uk-width-1-1">
        <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: search"></span>
        <div style={{
          position: "relative"
        }}>
          <input
            className="uk-border-pill uk-input  uk-width-1-1 search-fld uk-padding-remove-bottom"
            type="search"
            value={searched}
            style={isExpanded
            ? input
            : {}}
            placeholder="Type your search"
            onChange={e => setSearched(e.target.value)}
            autoFocus/>
          <div
            style={{
            position: "absolute",
            transition: "height 0.3s ease",
            borderBox: "box-sizing",
            width: "100%"
          }}>
            <ul
              style={isExpanded
              ? whenVisible
              : whenInvisible}>
              {suggestions
                ? suggestions.map(suggestion => <li
                  style={{
                  paddingTop: "10px"
                }}
                  onClick={e => handleSelect(suggestion)}>
                  {suggestion}
                </li>)
                : "no"}
            </ul>
          </div>

        </div>

      </div>
    </form>

  </div>;

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

export default SearchBox;
