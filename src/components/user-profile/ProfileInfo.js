import React from 'react';

const ProfileInfo = ({user}) => {
  let colors = {
    "online": "#00e39b",
    "offline": "#757575"
  } 
  return <div className="uk-card uk-card-default">
          <div className="uk-card-header">
              <div className="uk-grid-small uk-flex-middle">
                  <div className="uk-width-auto">
                      <img className="uk-border-circle" width="40" height="40" src={user.imageUrl} alt="user"/>  
                  </div>
                  <div className="uk-width-expand">

                      <h3 className="uk-card-title uk-margin-remove-bottom">
                        { user.name }   
                        { user.isOnline ?
                        <span className="uk-badge uk-badge-success uk-margin-small-left" style={{backgroundColor: colors.online}}>Online</span> 
                        :
                        <span className="uk-badge uk-margin-small-left" style={{backgroundColor: colors.offline}}>Offline</span>}
                      </h3>
                      <p className="uk-text-meta uk-margin-remove-top">@{user.username},  {user.location}</p>
                  </div>
              </div>
          </div>
        </div>
}

export default ProfileInfo;
