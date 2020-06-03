import React from 'react';
import { offerTimeFormat } from '../../helpers/index.js'

const OfferCard = ({offer}) => {
  let userUrl = '/users/' + offer.seller.id
  let offerUrl = '/offers/' + offer.id
  let colors = {
    "online": "#00e39b",
    "offline": "#757575"
  }

  console.log( __dirname )

  let formatedTime = offerTimeFormat( offer.added_at )

  return <div className="uk-margin-bottom ">
   <div className="uk-card uk-card-default uk-card-hover ">

    <div className="uk-card-media-top">
      <div className="uk-inline">
        <div className="uk-position-top-left uk-overlay uk-overlay-primary">
          {offer.price}
          PLN
        </div>
        <div class="image-cover-container  uk-height-medium">
          <img class="card-cover" src={offer.images[0].url} alt="x"/>
        </div>
      </div>
    </div>

    <div className="uk-card-body">
      <h3 className="uk-card-title uk-margin-remove-bottom"><a href={offerUrl}>{offer.title}</a></h3>

      <p  class="uk-padding-remove-top uk-margin-remove-top">
      {offer.category.name}
      </p>
      <p class="uk-padding-remove-top">
   <a href={userUrl}>
        <span >{offer.seller.name} </span>
        { offer.seller.is_online ?
                        <span className=" uk-margin-small-left" style={{width : "10px",
                        height: "10px",
                        borderRadius: "100%",
                        display: "inline-block",
                        backgroundColor: colors.online}}></span>
                        :
                        <span className=" uk-margin-small-left" style={{backgroundColor: colors.offline}}></span>}
                        </a>
      </p>

        {offer.location.name}, { formatedTime }
    </div>

  </div>
  </div>
}

export default OfferCard;

// {
//   "id": "2",
//   "status": "active",
//   "title": "Hoodie XS",
//   "description": "Bluza w rozmiarze XS. Kupiona w sinsay. Dobry stan. Wymiary: w klatce: 60cm, długość: 57cm. Zapraszam do zakupu.",
//   "location": "Toruń",
//   "images": [
//       {
//           "url": "https://ae01.alicdn.com/kf/HTB1FQy4acfrK1Rjy1Xdq6yemFXa5/Kobiety-Instagram-projektowania-druku-bluzy-z-kapturem-z-polaru-bluzy-zimowe-Unisex-Hip-Hop-Swag-bluzy.jpg_q50.jpg"
//       }
//   ],
//   "price": 23.32,
//   "seller": {
//       "id": "2",
//       "name": "Iza Pracz",
//       "is_online": true,
//       "phone": "222 222 222"
//   },
//   "category": {
//       "id": 2,
//       "name": "Bluzy"
//   },
//   "added_at": "2019-12-27T07:45:00Z",
//   "valid_to": "2020-07-27T07:45:00Z",
//   "views": 332
// }
