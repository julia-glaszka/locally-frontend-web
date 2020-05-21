import React from 'react';

const Classified = ({classified}) => {
  console.log(classified)
  return <div class="uk-card uk-card-default ">

    <div class="uk-card-media-top">
      <img src={classified.imageUrl} alt=""/>
    </div>

    <div class="uk-card-body">
      <h3 class="uk-card-title">{classified.title}</h3>
      <p>{classified.seller}</p>
      <p>{classified.addedAt}</p>
    </div>

  </div>
}

export default Classified;