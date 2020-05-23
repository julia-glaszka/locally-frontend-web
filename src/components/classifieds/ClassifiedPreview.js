import React from 'react';

const ClassifiedPreview = ({classified}) => {
  console.log(classified)
  return <main class="uk-margin-medium-bottom ">
    <div class="uk-container  ">
      <div uk-grid="" class="uk-grid-collapse uk-grid-match uk-grid ">
        <div class=" uk-width-1-6@s">
          <div class="uk-card uk-card-small">
            <img src={classified.imageUrl} alt=""/>
          </div>
        </div>

        <div
          className=" uk-width-expand@s uk-card uk-card-default uk-card-body  uk-card-small uk-padding-remove-right uk-flex-middle"
          uk-grid>
          <div class="uk-width-5-6">

            {classified.price}
            PLN
            <h3 class="uk-card-title">{classified.title}</h3>
            <span uk-icon="users"></span>{classified.views}
            <br/>
          </div>
          <div class="uk-width-1-6">

            <button class="uk-button uk-button-primary uk-width-3-@s">EDIT</button>
            <button class="uk-button  uk-width-3-@s">DISABLE</button>
            <button class="uk-button uk-button-danger uk-width-3-@s">DELETE</button>

          </div>

        </div>

      </div>
    </div>

  </main>
}

export default ClassifiedPreview;