import React from 'react';
import ClassifiedsPanel from '../components/classifieds/ClassifiedsPanel.js';
import get from '../services/apiService.js';
import url from '../config/endpoints.js';
import CustomFooter from '../components/common/CustomFooter.js';
import CustomNavbar from '../components/common/CustomNavbar.js';
import queryString from 'query-string';
import { useLocation} from "react-router-dom";

// components can be called from the imported UIkit reference
function ClassifiedsPage() {
  const [classifieds,
    setClassifieds] = React.useState([])
  const location = useLocation();
  console.log("cla page")
  React.useEffect(() => {
    async function getClassifieds() {
      let classifieds
      let queryFromUrl = queryString.parse(location.search);
      let newQuery = url.classifiedsUrl;
      console.log(queryFromUrl, newQuery)
      if (queryFromUrl.title) {
        newQuery += '?title_like=' + queryFromUrl.title
      }
      console.log(newQuery)
      try {
        classifieds = await get(newQuery)
        setClassifieds(classifieds)
      } catch (e) {
        console.log(e)
      }
    }
      getClassifieds()
  }, [location.search])

  return (
    <div >
      <CustomNavbar/>
      <div className="uk-container">
        <ClassifiedsPanel title="Marketplace" classifieds={classifieds}></ClassifiedsPanel>

      </div>
      <CustomFooter/>
    </div>

  );
}

export default ClassifiedsPage;
