import React from 'react';
import Classified from './Classified.js';

const ClassifiedsPanel = ({title, classifieds}) => {
  return <div className="uk-container" >
    <h2 className="uk-margin-medium-top uk-text-bolder uk-text-uppercase ">
      {title} 
    </h2>
    <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-grid">
      {
      classifieds.map((item, i) => 
        <Classified classified={item} key={i}/>
        )
      }

    </div>
  </div>

}



export default ClassifiedsPanel;