const dev = {
  init: () => {},
  useSSO: false,
  apiUrl: 'http://localhost:3333'
};

const local = {
  init: () => {},
  useSSO: false,
  apiUrl: 'http://localhost:3333'
};

const prod = {
  init: () => {},
  auth: null,
  apiUrl: ''
};

let config;

if (process.env.REACT_APP_STAGE === 'production') {
  config = prod;
} else if (process.env.REACT_APP_STAGE === 'local') {
  config = local;
} else {
  config = dev;
}

config.init();

export default {
  TITLE : 'Locally app',
  ...config
};