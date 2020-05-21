import config from '../config/config.js';

let url = `${config.apiUrl}/reactive/all`

export default async function fetchImages() {
  return fetch(url)
    .then(res => res.json())
    .catch(e => []);
}
