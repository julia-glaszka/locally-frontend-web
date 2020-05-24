import config from './config.js';

const dev = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/reactive/all`,
    classifiedsUrl: `${config.apiUrl}/reactive/classifieds`,
    userProfileDetailsUrl: `${config.apiUrl}/reactive/users`,
    userClassifieds: `${config.apiUrl}/reactive/myClassifieds`
  };
  
  const local = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/reactive/all`,
    classifiedsUrl: `${config.apiUrl}/reactive/classifieds`,
    userProfileDetailsUrl: `${config.apiUrl}/reactive/users`,
    userClassifieds: `${config.apiUrl}/reactive/myClassifieds`
  };
  
  const prod = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/reactive/all`,
    classifiedsUrl: `${config.apiUrl}/reactive/classifieds`,
    userProfileDetailsUrl: `${config.apiUrl}/reactive/users`,
    userClassifieds: `${config.apiUrl}/reactive/myClassifieds`
  };
  
  let endpoints;
  
  if (process.env.REACT_APP_STAGE === 'production') {
    endpoints = prod;
  } else if (process.env.REACT_APP_STAGE === 'local') {
    endpoints = local;
  } else {
    endpoints = dev;
  }
  
  endpoints.init();
  
  export default {
    ...endpoints
  };