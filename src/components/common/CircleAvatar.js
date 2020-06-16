import React from 'react';

const CircleAvatar = ({avatar = 'https://getuikit.com/docs/images/avatar.jpg'}) => {

return <img
        src={avatar}
        width="32px"
        className="uk-border-circle"
        alt="user"/>
}

export default CircleAvatar;