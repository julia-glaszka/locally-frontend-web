
import React from 'react';
import OfferRow from './OfferRow.js';

const OffersManagementPanel = ({title, offers = []}) => {
  return <div className="uk-container" >
    <h2 className="uk-margin-medium-top uk-text-bolder uk-text-uppercase ">
      {title} 
    </h2>
    <div>
      {offers ?
      offers.map((item, i) => 
        <OfferRow offer={item} key={i}/>) : "No offers was found"
      }

    </div>
  </div>

}



export default OffersManagementPanel;