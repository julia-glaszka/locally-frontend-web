import React from 'react';

const OfferInfo = ({offer}) => {
  return <div className="uk-card  uk-flex-middle">
  <div className="uk-card-body">
    <div className="uk-width-expand">
      <h3 className="uk-card-title ">{offer.title}, {offer.price} PLN</h3>
      <p className="uk-text-meta uk-margin-remove-top">
        <time dateTime="2016-04-01T19:00">Added At: {offer.addedAt}</time>
      </p>
    </div>
    <p>{offer.description}</p>
    <br/> <span uk-icon="users"></span>{offer.views}
  </div>

</div>
}

export default OfferInfo;