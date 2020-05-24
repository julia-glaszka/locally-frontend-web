import React from 'react';

const Slider = ({images}) => {
  return images
    ? <div className="">
        <div
          className="uk-position-relative uk-visible-toggle uk-light"
          tabIndex="-1"
          uk-slider="center: true">
          <ul
            className="uk-slider-items uk-grid uk-grid-match"
            uk-height-viewport="offset-top: true; offset-bottom: 30">

            {images.map((image, i) => 
            <li className="uk-width-3-4" key={i}>
              <div className="uk-cover-container">
                <img src={image} alt=""/>
              </div>
            </li>)}
          </ul>
       

        </div>
      </div>
    : "There isn't any images "

}

export default Slider;
