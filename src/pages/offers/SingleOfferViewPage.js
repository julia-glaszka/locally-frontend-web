import React from 'react';
import get from '../../services/apiService.js';
// loads the Icon plugin
import {useParams} from 'react-router-dom';

import endpoints from '../../config/endpoints.js';

import Slider from '../../components/offer-single-view/Slider.js';
import OfferInfo from '../../components/offer-single-view/OfferInfo.js';
import ShortProfileInfo from '../../components/user-profile/ShortProfileInfo.js';
import SearchBox from '../../components/search/SearchBox.js';

const SingleOfferDetailsPage = () => {
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
      <SearchBox/>

      { offer
        ? <div className="uk-container uk-margin-medium-top uk-margin-medium-bottom">
        
        <div className="uk-child-width-1-2@m uk-grid-match uk-grid">
            <Slider images={offer.images}/>
            <OfferInfo offer={offer}/>
          </div>
     <ShortProfileInfo seller={offer.seller}/>
      
      </div>
        : "Loading......"
      }

  </div>

}

export default SingleOfferDetailsPage;
