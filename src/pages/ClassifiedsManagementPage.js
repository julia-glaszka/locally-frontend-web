import React from 'react';
import UserProfile from '../components/user-profile/UserProfile.js';
import get from '../services/apiService.js';
// loads the Icon plugin

import url from '../config/url.js';
import CustomNavbar from '../components/common/CustomNavbar.js';
import CustomFooter from '../components/common/CustomFooter.js';
import ClassifiedsManagementPanel from '../components/classifieds/ClassifiedsManagementPanel.js';

const ClassifiedsManagementPage = () => {
  const [classifieds,
    setClassifieds] = React.useState([])

    
    React.useEffect(() => {
      async function getClassifieds() {
        let classifieds
        let classifiedsUrl = url.userClassifieds;
        try {
          classifieds = await get(classifiedsUrl)
          setClassifieds(classifieds)
        } catch (e) {
          console.log(e)
        }
      }
      getClassifieds()
    },[])
  return <div >
    <CustomNavbar/>
    <div className="uk-container uk-margin-medium-top">
     {classifieds ? <ClassifiedsManagementPanel classifieds={classifieds}/> : "shit"}
    </div>

 <CustomFooter/>
</div>

}

export default ClassifiedsManagementPage;

