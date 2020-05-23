import React from 'react';


const Picture = ({imageUrl}) => {
    return <div className=" uk-first-column uk-margin-medium-bottom ">
        <div className="uk-panel">   
            <img src={imageUrl} alt="zdjęcie" />
        </div>
    </div>


}

export default Picture;
