import config from '../config/config.js';

let url = `${config.apiUrl}/reactive/userProfile`

export default async function fetchProfile() {
  return fetch(url)
    .then(res => res.json())
    .catch(e => []);
}
