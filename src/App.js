import React from 'react';
import Gallery from './components/gallery/Gallery.js';
import './App.css';
import css from 'uikit/dist/css/uikit.css';
import Icons from 'uikit/dist/js/uikit-icons';
import UIkit from 'uikit/dist/js/uikit.js'
import ClassifiedsPanel from './components/classifieds/ClassifiedsPanel.js';
import get from './services/apiService.js';
import url from './config/url.js';
import CustomFooter from './components/common/CustomFooter.js';
import CustomNavbar from './components/common/CustomNavbar.js';
UIkit.use(Icons);

// components can be called from the imported UIkit reference
function App() {
  const [classifieds,
    setClassifieds] = React.useState([])

  React.useEffect(() => {

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
    getClassifieds()
  }, [])

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

    getImages()
  }, [])

  return (
    <div >
     <CustomNavbar/>

      
      <div className="uk-container">
          <ClassifiedsPanel title="Marketplace" classifieds={classifieds}></ClassifiedsPanel>
          <Gallery title="Local Pictures" images={images}/>
        </div>
    <CustomFooter/>
    </div>

  );
}

export default App;
