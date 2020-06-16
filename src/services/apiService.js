import { getAuthHeader } from '../components/auth/utils.js'

export default async function get(url) {
  console.log("authHeader:", getAuthHeader())
  const requestOptions = {
    method: 'GET',
    headers: getAuthHeader()
  }
  return fetch(url, requestOptions)
    .then(res => res.json())
    .catch(e => {});
}
