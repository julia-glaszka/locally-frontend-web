import React from 'react';

const Slider = ({images}) => {
  return images
    ?   <div
          className=" uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          uk-slider="center: true">
          <ul
            className="uk-slider-items uk-grid uk-grid-match"
            >

            {images.map((image, i) => 
            <li className="uk-width-3-4" key={i}>
              <div className="uk-cover-container">
                <img src={image.url} alt=""/>
              </div>
            </li>)}
          </ul>
        </div>
    : "There isn't any images "

}

export default Slider;
