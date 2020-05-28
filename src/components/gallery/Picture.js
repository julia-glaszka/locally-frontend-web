import React from 'react';
import {Lightbox, LightboxItem} from 'uikit-react';

const Picture = ({imageUrl}) => {
  return <div className=" uk-first-column uk-margin-medium-bottom ">

    <div className="uk-panel">
      <Lightbox>
          
        <LightboxItem href={imageUrl} caption='Image'>
          <img src={imageUrl} alt=""/>
        </LightboxItem>

      </Lightbox>
    </div>
  </div>

}

export default Picture;
