import React from 'react';
import UserProfile from '../../components/user-profile/UserProfile.js';
import get from '../../services/apiService.js';
// loads the Icon plugin
import { useParams } from 'react-router-dom';

import endpoints from '../../config/endpoints.js';

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
        } catch (e) {
          console.log(e)
        }
      }
      getUserProfile()
    },[id])
  return <div>
    <div className="uk-container uk-margin-medium-top">
     {userProfile ? <UserProfile userProfile={userProfile}/> : "nothing"}
    </div>
  </div>

}

export default UserProfilePage;

