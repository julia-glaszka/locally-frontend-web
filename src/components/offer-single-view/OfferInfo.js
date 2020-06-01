import React from 'react';

const OfferInfo = ({offer}) => {
  return <div className="uk-card uk-flex-middle">
  <div className="uk-card-body">
    <div className="uk-width-expand">
      <h3 className="uk-card-title ">{offer.title}, {offer.price} PLN</h3>
      <p className="uk-text-meta uk-margin-remove-top">
        <time dateTime="2016-04-01T19:00">Added At: {offer.added_at}</time>
      ID: {offer.id}<br/>
      {offer.location.name} <br/>
      {offer.category.name}<br/>

      {offer.valid_to}<br/>
      </p>
    </div>
    <p>{offer.description}</p>
    <br/> <span uk-icon="users"></span>{offer.views}
  </div>

</div>
}

export default OfferInfo;


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