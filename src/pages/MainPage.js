import React from 'react';
import GalleryPanel from '../components/gallery/GalleryPanel.js';
import './Main.css';
// eslint-disable-next-line no-unused-vars
import css from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit/dist/js/uikit.js'
import ClassifiedsPanel from '../components/classifieds-panel/ClassifiedsPanel.js';
import get from '../services/apiService.js';
import url from '../config/endpoints.js';
import SearchBox from '../components/search/SearchBox.js';

UIkit.use(Icons);


// components can be called from the imported UIkit reference
function MainPage() {
  const [classifieds,
    setClassifieds] = React.useState([])
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
    async function getClassifieds() {
      let classifieds
      try {
        classifieds = await get(url.classifiedsUrl)
        console.log("app classsifieds", classifieds)
        setClassifieds(classifieds)
      } catch (e) {
        console.log(e)
      }
    }
    getImages()
    getClassifieds()
  }, [])

  return (
    <div >

      <SearchBox/>

      <div className="uk-container">
          <ClassifiedsPanel title="Marketplace" classifieds={classifieds}></ClassifiedsPanel>
          <GalleryPanel title="Local Pictures" images={images}/>
        </div>
    </div>

  );
}

export default MainPage;
