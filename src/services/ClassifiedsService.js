import config from '../config/config.js';

let url = `${config.apiUrl}/reactive/classifieds`

export const fetchClassifieds = async() => {
  return fetch(url)
    .then(res => res.json())
    .catch(e => []);
}
