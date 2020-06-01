import React from 'react';

const ShortProfileInfo = ({seller}) => {
  let userUrl = '/users/' + seller.id
  return <div class="uk-flex" >
      <div class="uk-width-expand uk-card uk-card-secondary uk-card-body">
        <h3 class="uk-card-title">{seller.name}</h3>
        <a href={userUrl}>
          See profile
          <span uk-icon="arrow-right"></span>
        </a>
    </div>
  </div>
}

export default ShortProfileInfo;
