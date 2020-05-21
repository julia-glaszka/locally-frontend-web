import React from 'react';
import {
   Image
} from 'uikit-react';

const Picture = ({imageUrl}) => {
    return <div className=" uk-first-column uk-margin-medium-bottom ">
        <div className="uk-panel">   
            <Image src={imageUrl} alt="zdjęcie" />
        </div>
    </div>


}

export default Picture;
