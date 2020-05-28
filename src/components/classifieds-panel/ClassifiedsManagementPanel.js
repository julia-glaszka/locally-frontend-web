
import React from 'react';
import ClassifiedPreview from '../classified-management/ClassifiedPreview.js';

const ClassifiedsManagementPanel = ({title, classifieds}) => {
  return <div className="uk-container" >
    <h2 className="uk-margin-medium-top uk-text-bolder uk-text-uppercase ">
      {title} 
    </h2>
    <div className="">
      {
      classifieds.map((item, i) => 
        <ClassifiedPreview classified={item} key={i}/>
        )
      }

    </div>
  </div>

}



export default ClassifiedsManagementPanel;