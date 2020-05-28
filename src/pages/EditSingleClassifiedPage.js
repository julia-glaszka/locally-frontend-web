import React from 'react';
import get from '../services/apiService.js';
// loads the Icon plugin
import {useParams} from 'react-router-dom';
import endpoints from '../config/endpoints.js';

const EditSingleClassifiedPage = () => {
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

      {classified
        ? <div className="uk-container uk-margin-medium-top uk-margin-medium-bottom">
        
        <div className="uk-child-width-1-2@m uk-grid-match uk-grid">
           Here you can edit your classified
          </div>
    
      
      </div>
        : "Loading......"
}

  </div>

}

export default EditSingleClassifiedPage;
