import React from 'react';
import get from '../services/apiService.js';
// loads the Icon plugin
import {useParams} from 'react-router-dom';

import endpoints from '../config/endpoints.js';

import Slider from '../components/classified-single-view/Slider.js';
import ClassifiedInfo from '../components/classified-single-view/ClassifiedInfo.js';
import ShortProfileInfo from '../components/user-profile/ShortProfileInfo.js';
import SearchBox from '../components/search/SearchBox.js';

const ClassifiedDetailsPage = () => {
  const [classified,
    setClassified] = React.useState(null)
  const { id } = useParams();

  React.useEffect(() => {
    async function getClassified() {
      let classified
      let classifiedUrl = endpoints.classifiedsUrl + '/' + id
      try {

        classified = await get(classifiedUrl)
        setClassified(classified)
        console.log("userprof", classified)
        console.log("images", classified.images)
        console.log("userlink", classifiedUrl)
      } catch (e) {
        console.log(e)
      }
    }
    getClassified()
  }, [id])
  
  

  return <div>
      <SearchBox/>

      {classified
        ? <div className="uk-container uk-margin-medium-top uk-margin-medium-bottom">
        
        <div className="uk-child-width-1-2@m uk-grid-match uk-grid">
            <Slider images={classified.images}/>
            <ClassifiedInfo classified={classified}/>
          </div>
     <ShortProfileInfo seller={classified.seller}/>
      
      </div>
        : "Loading......"
}

  </div>

}

export default ClassifiedDetailsPage;
