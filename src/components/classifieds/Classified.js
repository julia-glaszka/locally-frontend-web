import React from 'react';

const Classified = ({classified}) => {
  let userUrl = '/user/' + classified.seller.id
  return <div className="uk-margin-bottom ">
   <div className="uk-card uk-card-default uk-card-hover ">

    <div className="uk-card-media-top">
      <div className="uk-inline">
        <div className="uk-position-top-left uk-overlay uk-overlay-default">
          {classified.price}
          PLN
        </div>
        <img src={classified.imageUrl} alt=""/>

      </div>
    </div>

    <div className="uk-card-body">
      <h3 className="uk-card-title">{classified.title}</h3>
      <p>{classified.addedAt}</p>
      <a href={userUrl}>{classified.seller.name}</a>

    </div>

  </div>
  </div>
}

export default Classified;