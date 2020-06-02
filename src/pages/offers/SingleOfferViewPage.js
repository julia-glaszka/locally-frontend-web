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
      } catch (e) {
        console.log(e)
      }
    }
    getOffer()
  }, [id])
  
  return <div>
      <SearchBox/>
      <div class="uk-container">
      { offer
        ? <div className="uk-flex uk-flex-wrap uk-margin-medium-top uk-margin-medium-bottom">
        
            <div className="uk-width-3-4@m ">
                <div class="uk-flex uk-flex-wrap uk-flex-center">
                  <Slider images={offer.images}/>
                  <OfferInfo offer={offer}/>
                </div>
              
            </div>
            <div  className="uk-width-1-4@m">
              <ShortProfileInfo seller={offer.seller}/>
            </div>
      
        </div>
        : "Loading......"
      }
     
    
      </div>
  </div>

}

export default SingleOfferDetailsPage;
