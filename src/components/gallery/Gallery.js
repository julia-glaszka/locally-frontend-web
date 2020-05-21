import React from 'react';
import Picture from '../picture/Picture.js';
import fetchImages from '../../services/ImageService.js'
import {Container} from 'uikit-react';

const Gallery = () => {
  const [images,
    setImages] = React.useState([])
  React.useEffect(() => {
    getImages(setImages)
  }, [])

  return <Container>
    <h2 class="uk-margin-medium-top uk-text-bolder uk-text-uppercase ">Local Images</h2>
    <div
      className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-grid"
      uk-grid="true">

      {images.map((img, i) => <Picture imageUrl={img} key={i}/>)}

    </div>
  </Container>

}

async function getImages(setImages) {
  let images
  try {
    images = await fetchImages()
    setImages(images)
  } catch (e) {
    console.log(e)
  }
}

export default Gallery;