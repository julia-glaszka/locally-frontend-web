import React from 'react';
import { render } from '@testing-library/react';
import ProfileInfo from '../ProfileInfo';

test('should render profile info from user object', () => {
  let user = {  id: "3343",
                name: "Wiktoria Kosiniak",
                username: "wikusia",
                location: "Świerszcierzyna",
                isOnline: true,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/002-beaming-face-with-smiling-eyes.svg/120px-002-beaming-face-with-smiling-eyes.svg.png",
                offers_count: 2
            }
  
    const { getByText } = render(<ProfileInfo user={user} />);
    
    const userNameElement = getByText(user.name);
    expect(userNameElement).toBeInTheDocument();

});
