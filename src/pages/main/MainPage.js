import React from 'react';
import GalleryPanel from '../../components/gallery/GalleryPanel.js';
import './Main.css';
// eslint-disable-next-line no-unused-vars
import css from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit/dist/js/uikit.js'
import OffersPanel from '../../components/offers-panel/OffersPanel.js';
import get from '../../services/apiService.js';
import url from '../../config/endpoints.js';
import SearchBox from '../../components/search/SearchBox.js';

UIkit.use(Icons);


// components can be called from the imported UIkit reference
function MainPage() {
  const [offers,
    setOffers] = React.useState([])
  const [images,
    setImages] = React.useState([])
    
  React.useEffect(() => {
    async function getImages() {
      let images
      try {
        images = await get(url.imagesUrl)
        setImages(images)
      } catch (e) {
        console.log(e)
      }
    }
    async function getOffers() {
      let offers
      try {
        offers = await get(url.offersUrl)
        setOffers(offers)
      } catch (e) {
        console.log(e)
      }
    }
    getImages()
    getOffers()
  }, [])

  return (
    <div >
      <SearchBox/>
      <div className="uk-container">
          <OffersPanel title="Marketplace" offers={offers}></OffersPanel>
          <GalleryPanel title="Local Pictures" images={images}/>
        </div>
    </div>

  );
}

export default MainPage;
