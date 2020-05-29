import config from './config.js';

const dev = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/reactive/all`,
    offersUrl: `${config.apiUrl}/reactive/offers`,
    userProfileDetailsUrl: `${config.apiUrl}/reactive/users`,
    userOffers: `${config.apiUrl}/reactive/myOffers`
  };
  
  const local = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/reactive/all`,
    offersUrl: `${config.apiUrl}/reactive/offers`,
    userProfileDetailsUrl: `${config.apiUrl}/reactive/users`,
    userOffers: `${config.apiUrl}/reactive/myOffers`
  };
  
  const prod = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/reactive/all`,
    offersUrl: `${config.apiUrl}/reactive/offers`,
    userProfileDetailsUrl: `${config.apiUrl}/reactive/users`,
    userOffers: `${config.apiUrl}/reactive/myOffers`
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