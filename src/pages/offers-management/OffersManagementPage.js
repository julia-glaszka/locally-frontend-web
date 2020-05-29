import React from 'react';
import get from '../../services/apiService.js';
import url from '../../config/endpoints.js';
import OffersManagementPanel from '../../components/offers-management/OffersManagementPanel.js';

const OffersManagementPage = () => {
  const [offers,
    setOffers] = React.useState([])

    
    React.useEffect(() => {
      async function getOffers() {
        let offers
        let offersUrl = url.userOffers;
        try {
          offers = await get(offersUrl)
          setOffers(offers)
        } catch (e) {
          console.log(e)
        }
      }
      getOffers()
    },[])
  return <div>
      <div className="uk-container uk-margin-medium-top">
      {offers ? <OffersManagementPanel offers={offers}/> :"These account didn't exists"}
      </div>
    </div>

}

export default OffersManagementPage;

