import React from 'react';
import UserProfile from '../components/user-profile/UserProfile.js';
import get from '../services/apiService.js';
// loads the Icon plugin
import { useParams } from 'react-router-dom';

import endpoints from '../config/endpoints.js';
import CustomNavbar from '../components/common/CustomNavbar.js';
import CustomFooter from '../components/common/CustomFooter.js';

const UserProfilePage = () => {
  const [userProfile,
    setUserProfile] = React.useState(null)
    const { id } = useParams();
    console.log("id", id)
    
    React.useEffect(() => {
      async function getUserProfile() {
        let profile
        let userUrl = endpoints.userProfileDetailsUrl+ '/' + id
        try {
          
          profile = await get(userUrl)
          setUserProfile(profile)
          console.log("userprof", profile)
          console.log("userlink", userUrl)
        } catch (e) {
          console.log(e)
        }
      }
      getUserProfile()
    },[id])
  return <div>
    <CustomNavbar/>
    <div className="uk-container uk-margin-medium-top">
     {userProfile ? <UserProfile userProfile={userProfile}/> : "nothing"}
    </div>
    <CustomFooter/>
  </div>

}

export default UserProfilePage;

