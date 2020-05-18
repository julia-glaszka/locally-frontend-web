import React from 'react';
import Image from '../image/Image.js';

// let uri = 'http://localhost:8080/reactive/all'



async function fetchImages(uri) {
    return fetch(uri)
    .then(res => res.json());
}
const Gallery = ({url}) => {
    const [images, setImages] = React.useState([])
    React.useEffect(() => {
      getImages(url, setImages)
    }, [url])
  
    return images.map((img, i) => 
       <Image imageUrl={img} key={i}/>
    )
  }

  async function getImages (url, setImages) {
    let images
    try {
      images = await fetchImages(url)
      setImages(images)
    } catch (err) {
      return null
    }
  }
  
export default Gallery;