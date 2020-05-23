import React from 'react';
import fetchProfile from '../../services/UserProfileService.js'
import ProfileInfo from './ProfileInfo.js'
import ClassifiedsPanel from '../classifieds/ClassifiedsPanel.js';

const UserProfile = ({userProfile}) => {
  let classif = userProfile.classifieds
  return userProfile ? 
  <div>
        <ProfileInfo user={userProfile}/>
        <ClassifiedsPanel title="User's classifieds" classifieds={classif}/>
  </div> 
   : "user not found"
}

export default UserProfile;
