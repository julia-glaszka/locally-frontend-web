import React from 'react';

const ClassifiedInfo = ({classified}) => {
  console.log(classified)
  return      <div className="uk-card  uk-flex-middle">

  <div className="uk-card-body">
    <div className="uk-width-expand">

      <h3 className="uk-card-title ">{classified.title}, {classified.price} PLN</h3>
      <p className="uk-text-meta uk-margin-remove-top">
        <time dateTime="2016-04-01T19:00">Added At: {classified.addedAt}</time>

      </p>
    </div>
    <p>{classified.description}</p>
    <br/> <span uk-icon="users"></span>{classified.views}
  </div>

</div>
}

export default ClassifiedInfo;