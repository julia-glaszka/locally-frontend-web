import React from 'react';

const ClassifiedPreview = ({classified}) => {
  console.log(classified)
  return <main className="uk-margin-medium-bottom ">
    <div className="uk-container  ">
      <div uk-grid="" className="uk-grid-collapse uk-grid-match uk-grid ">
        <div className=" uk-width-1-6@s uk-height-small">
          <div className="uk-flex uk-flex-center uk-flex-left@m">
            <img src={classified.imageUrl} className=" uk-height-small" style={{maxWidth: "none"}} alt=""/>
          </div>
        </div>

        <div
          className="uk-grid uk-width-expand@s uk-card uk-card-default uk-card-body  uk-card-small uk-padding-remove-right uk-padding-remove-bottom uk-flex-between">
          <div className="uk-width-5-6@s">

            {classified.price}
            PLN
            <h3 className="uk-card-title">{classified.title}</h3>
          
          
          </div>
          <div className="uk-width-1-6@s">
          <span uk-icon="users"></span>{classified.views}
          
          </div>
          <div className="uk-width-1@s uk-flex uk-flex-right">
          <button className="button-clear uk-button uk-width-auto"><a href={`/account/classifieds/${classified.id}/edit`}>EDIT</a></button>
            <button className="button-clear uk-button uk-width-auto">DISABLE</button>
            <button className="uk-button uk-button-danger uk-width-auto">DELETE</button>
          </div>
          


        </div>
       
      </div>
    </div>

  </main>
}

export default ClassifiedPreview;