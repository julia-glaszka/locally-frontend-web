import React from 'react';
import get from '../services/apiService.js';
import url from '../config/endpoints.js';
import ClassifiedsManagementPanel from '../components/classifieds-panel/ClassifiedsManagementPanel.js';

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
  return <div>
   
    <div className="uk-container uk-margin-medium-top">
     {classifieds ? <ClassifiedsManagementPanel classifieds={classifieds}/> :"These account didn't exists"}
    </div>

    </div>

}

export default ClassifiedsManagementPage;

