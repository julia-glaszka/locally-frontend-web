import React from 'react';
import get from '../services/apiService.js';
// loads the Icon plugin
import {useParams} from 'react-router-dom';

import endpoints from '../config/endpoints.js';
import CustomNavbar from '../components/common/CustomNavbar.js';
import CustomFooter from '../components/common/CustomFooter.js';
import Slider from '../components/common/Slider.js';
import ClassifiedInfo from '../components/classifieds/ClassifiedInfo.js';
import UserProfile from '../components/user-profile/UserProfile.js';
import ShortProfileInfo from '../components/user-profile/ShortProfileInfo.js';

const ClassifiedDetailsPage = () => {
  const [classified,
    setClassified] = React.useState(null)
  const {id} = useParams();

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
  }, [])
  
  

  return <div>
    <CustomNavbar/>

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

    <CustomFooter/>
  </div>

}

export default ClassifiedDetailsPage;
