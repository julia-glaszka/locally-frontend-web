import React from 'react';
import ProfileInfo from './ProfileInfo.js'
import OffersPanel from '../offers-panel/OffersPanel.js';

const UserProfile = ({userProfile}) => {
  let offers = userProfile.offers
  return userProfile ? 
  <div>
        <ProfileInfo user={userProfile}/>
        <OffersPanel title="User's classifieds" offers={offers}/>
  </div> 
   : "user not found"
}

export default UserProfile;
