import React from 'react';
import OffersPanel from '../../components/offers-panel/OffersPanel.js';
import get from '../../services/apiService.js';
import url from '../../config/endpoints.js';

import queryString from 'query-string';
import { useLocation} from "react-router-dom";
import SearchBox from '../../components/search/SearchBox.js';

// components can be called from the imported UIkit reference
function OffersPage() {
  const [offers,
    setOffers] = React.useState([])
  const location = useLocation();
  console.log("cla page")
  React.useEffect(() => {
    async function getOffers() {
      let offers
      let queryFromUrl = queryString.parse(location.search);
      let newQuery = url.offersUrl;
      console.log(queryFromUrl, newQuery)
      if (queryFromUrl.title) {
        newQuery += '?title_like=' + queryFromUrl.title
      }
      console.log(newQuery)
      try {
        offers = await get(newQuery)
        setOffers(offers)
      } catch (e) {
        console.log(e)
      }
    }
      getOffers()
  }, [location.search])

  return (
    <div >
      <SearchBox/>
      <div className="uk-container">
      <OffersPanel title="Marketplace" offers={offers}></OffersPanel>

      </div>
    </div>

  );
}

export default OffersPage;
