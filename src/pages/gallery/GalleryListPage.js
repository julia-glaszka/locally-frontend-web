import React from 'react';
import get from '../../services/apiService.js';
import url from '../../config/endpoints.js';
import GalleryPanel from '../../components/gallery/GalleryPanel.js';

function GalleryListPage() {
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
      <div className="uk-container">
      <GalleryPanel title="Local Pictures" images={images}/>
      </div>
    </div>
  );
}

export default GalleryListPage;
