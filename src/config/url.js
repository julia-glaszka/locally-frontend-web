import config from '../config/config.js';

const dev = {
    init: () => {},
    
    imagesUrl: `${config.apiUrl}/reactive/all`,
    classifiedsUrl: `${config.apiUrl}/reactive/classifieds`,
    userProfileDetailsUrl: `${config.apiUrl}/reactive/userProfile`,
    userClassifieds: `${config.apiUrl}/reactive/myClassifieds`
  };
  
  const local = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/reactive/all`,
    classifiedsUrl: `${config.apiUrl}/reactive/classifieds`,
    userProfileDetailsUrl: `${config.apiUrl}/reactive/userProfile`,
    userClassifieds: `${config.apiUrl}/reactive/myClassifieds`
  };
  
  const prod = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/reactive/all`,
    classifiedsUrl: `${config.apiUrl}/reactive/classifieds`,
    userProfileDetailsUrl: `${config.apiUrl}/reactive/userProfile`,
    userClassifieds: `${config.apiUrl}/reactive/myClassifieds`
  };
  
  let url;
  
  if (process.env.REACT_APP_STAGE === 'production') {
    url = prod;
  } else if (process.env.REACT_APP_STAGE === 'local') {
    url = local;
  } else {
    url = dev;
  }
  
  url.init();
  
  export default {
    ...url
  };