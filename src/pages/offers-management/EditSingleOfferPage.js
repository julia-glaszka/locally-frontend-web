import React from 'react';
import get from '../../services/apiService.js';
// loads the Icon plugin
import {useParams} from 'react-router-dom';
import endpoints from '../../config/endpoints.js';

const EditSingleOfferPage = () => {
  const [offer,
    setOffer] = React.useState(null)
  const { id } = useParams();

  React.useEffect(() => {
    async function getOffer() {
      let offer
      let offerUrl = endpoints.offersUrl + '/' + id
      try {
        offer = await get(offerUrl)
        setOffer(offer)
        console.log("userprof", offer)
        console.log("images", offer.images)
        console.log("userlink", offerUrl)
      } catch (e) {
        console.log(e)
      }
    }
    getOffer()
  }, [id])
  
  return <div>
      { offer
        ? <div className="uk-container uk-margin-medium-top uk-margin-medium-bottom">
            <div className="uk-child-width-1-2@m uk-grid-match uk-grid">
              Here you can edit your offer
            </div>
      </div>
        : "Loading......"
      }
  </div>

}

export default EditSingleOfferPage;
