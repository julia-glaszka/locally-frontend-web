import React from 'react';
import ProfileInfo from './ProfileInfo.js'
import ClassifiedsPanel from '../classifieds-panel/ClassifiedsPanel.js';

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
