import config from './config.js';

const dev = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/all`,
    offersUrl: `${config.apiUrl}/offers`,
    userProfileDetailsUrl: `${config.apiUrl}/users`,
    userOffers: `${config.apiUrl}/myOffers`,
    login: `${config.apiUrl}/auth/login`
  };
  
  const local = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/all`,
    offersUrl: `${config.apiUrl}/offers`,
    userProfileDetailsUrl: `${config.apiUrl}/users`,
    userOffers: `${config.apiUrl}/myOffers`,
    login: `${config.apiUrl}/auth/login`
  };
  
  const prod = {
    init: () => {},
    imagesUrl: `${config.apiUrl}/all`,
    offersUrl: `${config.apiUrl}/offers`,
    userProfileDetailsUrl: `${config.apiUrl}/users`,
    userOffers: `${config.apiUrl}/myOffers`,
    login: `${config.apiUrl}/auth/login`
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