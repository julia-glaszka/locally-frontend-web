import React from 'react';
import OfferCard from './OfferCard.js';

const OffersPanel = ({title, offers}) => {
  return <div className="uk-container" >
    <h2 className="uk-margin-medium-top uk-text-bolder uk-text-uppercase ">
      {title} 
    </h2>
    <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-grid">
      { offers.length ?
      offers.map((item, i) => 
        <OfferCard offer={item} key={i}/>
        ) : <p> There isn't any classifieds. Try to search again :( </p>
      }
    </div>
  </div>
}

export default OffersPanel;