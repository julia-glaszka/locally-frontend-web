import React from 'react';

const OfferCard = ({offer}) => {
  let userUrl = '/users/' + offer.seller.id
  let offerUrl = '/offers/' + offer.id
  return <div className="uk-margin-bottom ">
   <div className="uk-card uk-card-default uk-card-hover ">

    <div className="uk-card-media-top">
      <div className="uk-inline">
        <div className="uk-position-top-left uk-overlay uk-overlay-default">
          {offer.price}
          PLN
        </div>
        <img src={offer.images[0]} alt="x"/>

      </div>
    </div>

    <div className="uk-card-body">
      <h3 className="uk-card-title"><a href={offerUrl}>{offer.title}</a></h3>
      <p>{offer.addedAt}</p>
      <a href={userUrl}>{offer.seller.name}</a>

    </div>

  </div>
  </div>
}

export default OfferCard;