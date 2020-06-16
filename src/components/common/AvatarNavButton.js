import React from 'react';
import { AuthContext } from '../auth/AuthProvider.js'
import { logOut } from '../auth/authService.js'
import CircleAvatar from './CircleAvatar';
const AvatarNavButton = ({user = { name: 'unknown'}}) => {
  const {state, dispatch} = React.useContext(AuthContext);

  let options = [{
      path: '/account/offers',
      title: 'offers'
    },
    {
      path: '/account/pinned',
      title: 'Pinned'
    },
    {
      path: '/account/pictures',
      title: 'Pictures'
    },
    {
      path: '/account/announcements',
      title: 'Announcements'
    },
    {
      path: '/account/groups',
      title: 'Groups'
    },
    {
      path: '/account/settings',
      title: 'Settings'
    }]

return <ul className="uk-navbar-nav">
            <li className="">
              <span className="uk-visible@m uk-margin-right">{user.name}</span>
                <CircleAvatar image={user.imageUrl}/>
                <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-right">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                        {options.map(option => 
                            <li>
                            <a href={option.path}>{option.title}</a>
                            </li>
                        )}
                            <hr/>

                            <li>
                                <a href="/" onClick={e =>{
                                    logOut()
                                    dispatch({
                                    type: 'LOGOUT',
                                    payload: {}
                                    })
                                }}>
                                Log Out
                                </a>
                            </li>
                    </ul>
                </div>
            </li>
        </ul>
}



export default AvatarNavButton;