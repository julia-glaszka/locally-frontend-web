import React from 'react';
import {useHistory} from "react-router-dom";
import useDebounce from './useDebounce.js'
import SearchInputView from './SearchInputView.js'
const SearchInput = () => {
  let [suggestions,
    setSuggestions] = React.useState([]);
  let [isExpanded,
    setIsExpanded] = React.useState(false);
  const [searched,
    setSearched] = React.useState("");

  let history = useHistory();
  function handleSelect(suggestion) {
    console.log("handleselect", suggestion)
    setSearched(suggestion)

  }
  console.log("suggestion is" + searched)
  function onSearchSubmit(e) {
    console.log("onsearchsubmit")
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
  function onChange (e) { 

    console.log("setting searched (onchange)", e.target.value)
    setSearched(e.target.value)
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

  return <SearchInputView onChange={onChange} 
          searched={searched}
          isExpanded={isExpanded} 
          handleSelect={handleSelect} 
          onSearchSubmit={onSearchSubmit}
          suggestions={suggestions}/>
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
